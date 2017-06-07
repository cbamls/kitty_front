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
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
export default class LoadingPage extends Component {
  render() {
    return (
      <View style = {[styles.container, {opacity: 0.5}]}>
        <Image source={require('../business/home/img/loading.gif')} style = {styles.imageStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 imageStyle: {
     width : 40,
     height: 40,

 },
 container: {
    width: width,
    height: height,
    justifyContent: 'center',
     alignItems: 'center'
 }
});
