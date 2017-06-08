/**
* CopyRright (c)2014-2016 Haerbin Hearglobal Co.,Ltd
* Project: kitty_front
* Comments:
* Author:cbam
* Create Date:2017/6/7
* Modified By:
* Modified Date: 
* Modified Reason: 
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
ActivityIndicator,
    Platform
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
import ArticleCell from '../common/ArticleCell';
import {PullList} from 'react-native-pull';

var MockData = require('./FullStackMock.json');

export default class PullRefresh extends Component {

	constructor(props) {
        super(props);
        this.dataSource = [];
        this.firstRender = true;
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
            isLastPage: false
        };
        this.renderHeader = this.renderHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.topIndicatorRender = this.topIndicatorRender.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
           console.log("update");
          return this.firstRender ? true : false;
          if(this.firstRender) {
                 this.firstRender = false;
                    this.dataSource.push(...(nextProps.data));
                             this.setState({
                                list: this.state.list.cloneWithRows(this.dataSource),
                                isLastPage: this.props.isLastPage
                             })
                             return true;
          }
          return false;
    }

//     componentWillReceiveProps(nextProps) {
//                       console.log("receive");
//
//
//      }
    componentDidMount() {console.log("did");
        //alert("this => " + this.props.data.length);

         this.dataSource.push(...(this.props.data));
                    this.setState({
                       list: this.state.list.cloneWithRows(this.dataSource),
                       isLastPage: this.props.isLastPage
         })
    }
	topIndicatorRender(pulling, pullok, pullrelease) {
        const hide = {position: 'absolute', left: -10000};
        const show = {position: 'relative', left: 0};
        setTimeout(() => {
            if (pulling) {
                this.txtPulling && this.txtPulling.setNativeProps({style: show});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullok) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: show});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullrelease) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
            }
        }, 1);
		return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                <Image source= {require('../business/home/img/pullView.gif')} style = {{width: 60, height: 60}}/>
                 <Text ref={(c) => {this.txtPulling = c;}}>下拉上刷新 </Text>
                <Text ref={(c) => {this.txtPullok = c;}}>禽兽 放开我</Text>
                 <Text ref={(c) => {this.txtPullrelease = c;}}>刷~ </Text>
    		</View>
        );
	}

    render() {
        return (
          <View style={styles.container}>
              <PullList
                  style={{}}
                  onPullRelease={this.onPullRelease}
                   topIndicatorRender={this.topIndicatorRender} topIndicatorHeight={60}
                  renderHeader={this.renderHeader}
                  dataSource={this.state.list}
                  pageSize={5}
                  initialListSize={5}
                  renderRow={this.renderRow}
                  onEndReached={this.loadMore}
                  onEndReachedThreshold={1}
                  renderFooter={this.renderFooter}
                  />
          </View>
        );
    }

    renderHeader() {
      return (
          <View>
          </View>
      );
    }

    // 返回具体的cell
        renderRow(rowData,sectionID,rowID,highlightRow){
               return(
                  <ArticleCell date={rowData.date} title={rowData.title} subTitle={rowData.subTitle} author={rowData.author} avatar={rowData.avatar} imgUrl={rowData.imgUrl}></ArticleCell>
               );

        }

    renderFooter() {
      if(this.state.isLastPage) {
          return (
            <Text style={{height: 100}}>没有更多数据...</Text>
          );
      }
      return (
          <View style={{height: 100}}>
              <ActivityIndicator />
          </View>
      );
    }

    loadMore() {

        {/*this.dataSource.push(...Wine);*/}

        setTimeout(() => {
            this.setState({
                list: this.state.list.cloneWithRows(this.dataSource)
            });
        }, 1000);
    }

}

const styles = StyleSheet.create({
   container: {
            flex: 1,
            backgroundColor: '#e8e8e8'
        },

        cellViewStyle:{
              padding:10,
              backgroundColor:'white',
              // 下划线
              borderBottomWidth:0.5,
              borderBottomColor:'#e8e8e8',

              // 确定主轴的方向
              flexDirection:'row'
          },

          leftImageStyle:{
            width:60,
            height:60,
            marginRight:15
          },

          rightViewStyle:{
             // 主轴的对齐方式
             justifyContent:'center'
          },

          topTitleStyle:{
             color:'red',
             fontSize:15,
             width:width * 0.7,
             marginBottom:8
          },

          bottomTitleStyle:{
            color:'blue',
          },
        iconStyle:{
            width: Platform.OS === 'ios' ? 30 : 25,
            height:Platform.OS === 'ios' ? 30 : 25
        },
       TopListStyle: {
         width: width,
         height: 30,
         flexDirection: 'row',
         backgroundColor: 'white',
         alignItems: 'center',
         marginTop: 10,
         borderBottomColor: 'grey',
         borderBottomWidth: 0.5
       },
       TopRightStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          right:2,
       },
       TopLeftStyle: {
            flexDirection: 'row',
            alignItems: 'center'
       }
});