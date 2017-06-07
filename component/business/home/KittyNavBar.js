/**
* CopyRright (c)2014-2016 Haerbin Hearglobal Co.,Ltd
* Project: kitty_front
* Comments:
* Author:cbam
* Create Date:2017/6/4
* Modified By:
* Modified Date: 
* Modified Reason: 
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class KittyNavBar extends Component {

        constructor(props) {
                super(props);
                this.state = {
                    "rightIcon": 'icon_homepage_scan',
                     "leftIcon": ''
                };
            }
 // 跳转到二级界面
          pushToDetail(data){
              // alert(data);
             this.props.navigation.navigate("SearchDetail", {handleTextBlur: this.handleTextBlur.bind(this)});
          }

          handleTextBlur() {
            this.refs.textInput.blur();
          }

           componentWillReceiveProps(nextProps) {
                  this.setState({
                      "leftText":"IT喵~",
                      "rightIcon": nextProps.rightIcon,
                      "leftIcon": nextProps.leftIcon
                  })
           }

          fechData() {
          alert("feachData");
                let formData = new FormData();
                 let url = "https://api.leancloud.cn/1.1/classes/Entry?&where=%7B%22type%22%3A%22post%22%2C%22createdAt%22%3A%7B%22%24gte%22%3A%7B%22__type%22%3A%22Date%22%2C%22iso%22%3A%222017-05-29T13%3A41%3A27.866Z%22%7D%7D%7D&include=user&limit=6&order=-hotIndex";
                fetch(url , {
                     method: 'GET',
                     headers: new Headers({
                     'User-Agent':'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
                             'Accept':'*/*',
                             'Content-Type': 'application/json;charset=utf-8',
                             'Host':'api.leancloud.cn',
                             'X-LC-UA':'AV/js1.5.4',
                             'X-LC-Sign':'b58eb47ad78a923f8f10271db7ab88d8,1496670087966',
                                'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',

                             'X-LC-Id':'mhke0kuv33myn4t4ghuid4oq2hjj12li374hvcif202y5bm6'
                         })
                     }
                ).then((response) => {
                    alert("response.ok => " + response.ok);
                     if (response.ok) {
                            return response.json()
                     } else {
                             alert("notok" );

                        }
                     }
                ).catch((error) => {
                 console.error(error);
                 }
                );
          }
  render() {
    return (
      <View style={styles.navBarStyle}>
                                   {/*左边*/}
                                    <Text style={{color:'white', marginLeft: 2}}>this.state.leftText</Text>
                                   {/*中间*/}
                                   <View style={styles.searchBoxStyle}>
                                       <Image source={{uri:'ic_search_grey_400_24dp'}} style={styles.searchStyle}/>
                                        <TextInput
                                         ref = "textInput"
                                         placeholder="输入关键词"
                                         style={styles.topInputStyle}
                                         clearButtonMode="while-editing"
                                         onFocus = {()=>{this.pushToDetail()}}
                                       />
                                   </View>
                                   {/*右边*/}
                                   <View style={styles.rightNavViewStyle}>
//                                       <TouchableOpacity onPress={()=>{this.fechData()}}>
//                                           <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
//                                       </TouchableOpacity>
                                       <TouchableOpacity onPress={()=>this.handleTextBlur()}>
                                           <Image source={{uri:this.state.rightIcon}} style={styles.navRightImgStyle} />
                                       </TouchableOpacity>
                                   </View>

                      </View>
    );
  }
}


const styles = StyleSheet.create({
    navBarStyle:{ // 导航条样式
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'#2296F3',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',

        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },

    rightNavViewStyle:{
      flexDirection:'row',
      // backgroundColor:'blue',
      height:64,
      // 设置侧轴的对齐方式
      alignItems:'center'
    },

    topInputStyle:{ // 设置输入框
     backgroundColor:'transparent',
        flex:1,
    },

    navRightImgStyle:{ // 设置图片的大小
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24
    },

    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    },
    searchStyle: {
            height: 20,
            width: 20,
            marginLeft: 5,
            resizeMode: 'stretch',

    },
    searchBoxStyle: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        width:width * 0.71,
        height:Platform.OS == 'ios' ? 35 : 40,
        backgroundColor:'white',
        marginTop: Platform.OS == 'ios' ? 18 : 0,
        // 设置圆角
        borderRadius:17,
         marginLeft: 8,
          marginRight: 8,
    }
});