/**
* CopyRright (c)2014-2018 Haerbin Hearglobal Co.,Ltd
* Project: kitty_front
* Comments:
* Author:cbam
* Create Date:2017/6/13
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
  ScrollView,
  Image,
  InteractionManager,
  TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

import Swiper from 'react-native-swiper';

export default class CommonScroll extends Component {

  render() {
    return (
 <Swiper style={styles.wrapper} height={120} horizontal={true}
 autoplay={true}
  autoplayTimeout={1} autoplayDirection={true}>
              {this.renderAllImage()}
      </Swiper>
    )
  }
   // 返回所有的图片
      renderAllImage(){
          // 数组
          var allImage = [];
          // 拿到图像数组
          var imgsArr = this.props.data.data;
          // 遍历
          for(var i=0; i<imgsArr.length; i++){
              // 取出单独的每一个对象
              var imgItem = imgsArr[i];
                        console.log("imgsArr => " + imgItem.cover);

              // 创建组件装入数组
              allImage.push(
              <View style ={styles.imgStyle}>
                                                     <Image source={{uri: imgItem.cover}} style={{width: width, height: 120}}/>

              </View>

              );
          }
          // 返回数组
          return allImage;
      }

}

const styles = StyleSheet.create({
 wrapper: {
 },
 imgStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
 }
});
