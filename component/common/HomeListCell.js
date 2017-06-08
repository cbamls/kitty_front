/**
* CopyRright (c)2014-2016 Haerbin Hearglobal Co.,Ltd
* Project: kitty_front
* Comments:
* Author:cbam
* Create Date:2017/6/8
* Modified By:
* Modified Date: 
* Modified Reason: 
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
// 导入json数据
var Article = require('../business/home/Article.json'); // 数组

export default class HomeListCell extends Component {

        constructor(props) {
            super(props);
            this.dataSource = [];
            this.state = {
                list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
            };
        }
        componentWillReceiveProps(nextProps) {
            this._setState(nextProps.data);
        }
        componentDidMount() {
            this._setState(this.props.data);
        }
        _setState(newState) {
             this.setState({
                 "title": newState.title,
                  "img": newState.img,
                  "date": newState.date,
                  "favorite": newState.favorite,
                  "author":newState.author
             })
        }
        _processDate(date) {
            //当前时间
            var nowTime = (new Date()).valueOf();
            var diff = nowTime - date;
            var days = Math.floor(diff/(24*3600*1000));
            var leave = diff % (24*3600*1000);
            var hours = Math.floor(leave / (3600 * 1000));

            var leave2 = leave % (3600 * 1000);
            var minutes = Math.floor(leave2 / (60 * 1000));

            var leave3=leave2%(60*1000);
            var seconds=Math.round(leave3/1000);
            if(days > 0) {
                return days +' 天前';
            } else if(!days && hours) {
                return hours + ' 小时前';
            } else if(!days && !hours && minutes) {
                return minutes +' 分钟前';
            } else {
                return '刚刚';
            }

        }
  render() {
   // alert("state => " + this.state.title);
    return (
       <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('点击了')}}>
                              <View style={styles.cellViewStyle}>
                                    <View>
                                      <Text style={styles.topTitleStyle}>{this.state.title}</Text>
                                      <View style={{flexDirection: 'row'}}>
                                        <Text style={styles.textStyle}>{this.state.favorite} 人喜欢</Text>
                                        <Text> · </Text>
                                        <Text style={styles.textStyle}>{this.state.author}</Text>
                                         <Text> · </Text>
                                        <Text style={styles.textStyle}>{this._processDate(this.state.date)}</Text>
                                      </View>
                                    </View>
                                    <View style={{marginRight: 0}}>
                                        <Image source={{uri: this.state.img}} style={styles.rightImageStyle}/>
                                    </View>
                              </View>
         </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    cellViewStyle:{
       paddingTop:10,
       paddingLeft: 10,
       backgroundColor:'white',
       // 下划线
       borderBottomWidth:0.5,
       borderBottomColor:'#e8e8e8',

       // 确定主轴的方向
       flexDirection:'row'
    },
    textStyle: {
        fontSize: 10
    },
    rightImageStyle:{
     width:60,
     height:60,
    marginLeft:15
    },
    topTitleStyle:{
      color:'red',
      fontSize:15,
      width:width * 0.7,
      marginBottom: 10
    }
});
