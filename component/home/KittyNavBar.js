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
 // 跳转到二级界面
          pushToDetail(data){
              // alert(data);
             this.props.navigation.navigate('SearchDetail', {handleTextBlur: this.handleTextBlur.bind(this)});
          }

          handleTextBlur() {
            this.refs.textInput.blur();
          }
  render() {
    return (
      <View style={styles.navBarStyle}>
                                   {/*左边*/}
                                    <Text style={{color:'white'}}>喵喵~</Text>
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
                                       <TouchableOpacity onPress={()=>{alert('点击了')}}>
                                           <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                                       </TouchableOpacity>
                                       <TouchableOpacity onPress={()=>this.handleTextBlur()}>
                                           <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                                       </TouchableOpacity>
                                   </View>

                      </View>
    );
  }
}


const styles = StyleSheet.create({
    navBarStyle:{ // 导航条样式
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',

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