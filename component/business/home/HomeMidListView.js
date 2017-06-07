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
// 导入json数据
var Wine = require('./Wine.json'); // 数组

import {PullList} from 'react-native-pull';
import TopScrollView from './TopScrollView';
import ModuleList from './ModuleList';
export default class HomeMidListView extends Component {

	constructor(props) {
        super(props);
        this.dataSource = [{
                                                             "image": "a",
                                                                             "money": "1230",
                                                                             "name": "爱之湾+兰贵人组合"
                                                           },
                                                           {
                                                             "image": "b",
                                                                             "money": "1230",
                                                                             "name": "爱之湾+兰贵人组合"
                                                           },
                                                           {
                                                             "image": "c",
                                                                             "money": "1230",
                                                                             "name": "爱之湾+兰贵人组合"
                                                           },
                                                           {
                                                                                                                        "image": "a",
                                                                                                                                        "money": "1230",
                                                                                                                                        "name": "爱之湾+兰贵人组合"
                                                                                                                      },
                                                                                                                      {
                                                                                                                        "image": "b",
                                                                                                                                        "money": "1230",
                                                                                                                                        "name": "爱之湾+兰贵人组合"
                                                                                                                      }
                                                                                                                      ];
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
        this.renderHeader = this.renderHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.topIndicatorRender = this.topIndicatorRender.bind(this);
        // this.loadMore();
    }

    onPullRelease(resolve) {
		//do something
		setTimeout(() => {
            resolve();
        }, 2000);
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
                <Image source= {require('./img/pullView.gif')} style = {{width: 60, height: 60}}/>
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
              <TopScrollView></TopScrollView>
              <ModuleList navigation={this.props.navigation}></ModuleList>
              <View style={styles.TopListStyle}>
              	<View style={styles.TopLeftStyle}>
              	   <Image source={{uri: 'rm'}} style={{width: 25, height: 25}}/>
              		<Text>热门文章</Text>
              	</View>
              	<TouchableOpacity style={styles.TopRightStyle} activeOpacity={0.5} onPress={() => alert("label ok")}>
              		<Image source={{uri: 'kitty_ic_label_grey_300_24dp'}} style={{width: 25, height: 25}}/>
              		<Text style={{color: '#E0E0E0'}}>
              			标签管理
              		</Text>
              	</TouchableOpacity>
              </View>
          </View>
      );
    }

    // 返回具体的cell
        renderRow(rowData,sectionID,rowID,highlightRow){

               return(
                      <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('点击了'+rowID+'行')}}>
                        <View style={styles.cellViewStyle}>
                          {/*左边的图片*/}
                          <Image source={{uri: rowData.image}} style={styles.leftImageStyle}/>
                          {/*右边的View*/}
                          <View style={styles.rightViewStyle}>
                            {/*上边的Text*/}
                            <Text style={styles.topTitleStyle}>{rowData.name}</Text>
                            {/*下边的Text*/}
                            <Text style={styles.bottomTitleStyle}>¥{rowData.money}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );

        }

    renderFooter() {
      if(this.state.nomore) {
          return null;
      }
      return (
          <View style={{height: 100}}>
              <ActivityIndicator />
          </View>
      );
    }

    loadMore() {

        this.dataSource.push(...Wine);
         alert("load More => " + this.dataSource.length);
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