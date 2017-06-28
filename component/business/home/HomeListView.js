/**
* CopyRright (c)2014-2016 Haerbin Hearglobal Co.,Ltd
* Project: kitty_front
* Comments:
* Author:cbam
* Create Date:2017/6/6
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
  RefreshControl,
ActivityIndicator,
    Platform
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
// 导入json数据
var Article = require('./Article.json'); // 数组

import TopScrollView from './TopScrollView';
import ModuleList from './ModuleList';
import ArticleCell from '../../common/ArticleCell';
import CommonScroll from '../../common/CommonScroll';

export default class HomeMidListView extends Component {

	constructor(props) {
	//console.log("constructor");
        super(props);

        this.dataSource = [];
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
            isLoading: false,
            isRefreshing: false,
            jsonData: {"data":[]}
        };
        this.renderHeader = this.renderHeader.bind(this);
        this._renderRow = this._renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this._loadMore = this._loadMore.bind(this);
        this.nextPage = 0;
        this.totalNumber = 0;
        this.isFirstLoad = true;
        // this.loadMore();
    }
    componentWillReceiveProps(nextProps) {
       // console.log("componentWillReceiveProps");
    }
    componentWillUpdate() {
        //console.log("componentWillUpdate");
    }
     componentDidMount() {
          //  console.log("componentDidMount");
            this._fetchLunBo();
            this._fetchData(0);

     }
  _fetchLunBo() {
         let that = this;
        console.log("_fetchLunBo");
        let uri = "http://36kr.com/"
        fetch(uri, {
                      method: 'GET',
                      headers: {
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*;q=0.8',
                         "Content-Type": "text/plain"
                      }
                    }) .then((response) => response.text())
                    .then((responseText) => {
                       let str = responseText;
                       let props = str.slice(str.indexOf("highProjects|focus\":") + "highProjects|focus\":".length, str.indexOf("\"editorChoice|focus\"") - 1);
                       let json = JSON.parse("{\"data\":" + props + "}");

                       let newJson = {"data":[]};
                       let data = json.data;

                       for(var i = 0; i <data.length; i++) {
                        if(data[i].title !== "") {
                            newJson.data.push(data[i]);
                        }
                       }
                       //console.log("newJson => " + JSON.stringify(newJson));
                       this.setState({
                         jsonData: newJson
                       })
                    }).catch((error) => { console.error("error => " + error); });
    }
    _fetchData(page) {
         let that = this;
        console.log("fetchData");
        if(page >= 0) {
            this.setState({isLoading: true});
        } else {
            this.setState({isRefreshing: true});
        }

        //alert("this => " + this.props.data.length);
        let dtoPage = page >= 0 ? page : 0;
        let uri = 'http://222.27.196.8:7777/api/itmiao/page/' + dtoPage + '/per_page/8';
        console.log("url: => " + uri);
        fetch(uri, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }) .then((response) => response.json())
        .then((responseJson) => {
           // console.log("json =======> "  + JSON.stringify(responseJson));
            if(page >= 0) {
                this.dataSource.push(...responseJson);

                 this.nextPage += 1;
           } else {
            this.dataSource = [];
//            this.dataSource = Article.data.slice().contact(this.dataSource)
                this.dataSource.push(...responseJson);
           }
           this.totalNumber = 80;//
           that._setState(page);
        }).catch((error) => { console.error("error => " + error); });

    }
    _onRefresh() {
       // console.log("_onRefresh");
        if(!this._hasMore() || this.state.isRefreshing) {
            return ;
        }
        this.setState({isRefreshing: true});
        this._fetchData(-1); //表示从第0页
      }

    _setState(page) {
    //console.log("page =>>>>>>>>>>>>>>> "  + page);
         if(page >= 0) {
             this.setState({
                   list: this.state.list.cloneWithRows(this.dataSource),
                   isLoading: false
             })
         } else {
              this.setState({
                   list: this.state.list.cloneWithRows(this.dataSource),
                   isRefreshing: false
             })
         }

    }



    render() {
      //  console.log("render this.state.isRefreshing => " + this.state.isRefreshing );

        return (
          <View style={styles.container}>

              <ListView
                refreshControl={
                                        <RefreshControl
                                          refreshing={this.state.isRefreshing}
                                          onRefresh={this._onRefresh.bind(this)}
                                          progressBackgroundColor='#ffff00'
                                        />
                                      }
                                style={{}}
                                enableEmptySections={true}
                                renderHeader={this.renderHeader}
                                dataSource={this.state.list}
                                pageSize={8}
                                initialListSize={8}
                                renderRow={this._renderRow}
                                onEndReached={this._loadMore}
                                onEndReachedThreshold={20}
                                renderFooter={this.renderFooter}
              >

                  </ListView>
          </View>
        );
    }

    renderHeader() {
    //console.log("renderHeader => " + this.state.jsonData.data.length);
      return (
          <View>
             {/* <TopScrollView data = {this.state.jsonData}></TopScrollView>*/}
            <TopScrollView navigation={this.props.navigation} data = {this.state.jsonData}></TopScrollView>
            {/*<CommonScroll navigation={this.props.navigation} data = {this.state.jsonData}></CommonScroll>*/}
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

        _renderRow(rowData,sectionID,rowID,highlightRow){
               //console.log("renderRow")
               return(
                        <ArticleCell key={rowID} navigation={this.props.navigation} data={rowData}></ArticleCell>
                    );

        }

    renderFooter() {
    //console.log("renderFooer =>" + this._hasMore() + " this.totalnumber " + this.totalNumber );
      if(!this._hasMore() && this.totalNumber !== 0) {
           return (
                      <Text style={{height: 100}}>没有更多数据...</Text>
                    );
      }
      //console.log(" this.state.isLoading => " + this.state.isLoading);
      if(this.state.isLoading) {
        console.log("renderFooter");
        return (
                  <View style={{height: 100}}>
                      <ActivityIndicator />
                  </View>
              );
      } else {
         return (
                          <View>

                          </View>
                      );
      }
    }
    _hasMore() {
       // console.log(" _hasMore totalNumer" + this.totalNumber + "  " + this.dataSource.length);
        return this.totalNumber !== this.dataSource.length;
    }
    _loadMore() {
     //console.log("loadMore +> " + this._hasMore() + this.state.isLoading);
        if(!this._hasMore() || this.state.isLoading) {
            return ;
        }
       // console.log("loadMore and this.nextPage => " +this.nextPage);
        if(this.isFirstLoad) {
            this.isFirstLoad = false;
            return ;
        }
        this._fetchData(this.nextPage);
    }

}

const styles = StyleSheet.create({
   container: {
            flex: 1,
            backgroundColor: '#e8e8e8'
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