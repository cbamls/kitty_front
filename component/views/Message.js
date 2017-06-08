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
  Button,
  Image,
  Platform
} from 'react-native';

import { TabNavigator } from 'react-navigation';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


class Message extends Component {
 static navigationOptions = {
     tabBarLabel: 'Message',
     tabBarIcon: ({ tintColor }) => (
           <Image
             source={{uri: "icon_homepage_message"}}
             style={[styles.iconStyle, {tintColor: tintColor}]}
           />
      )

   };

   render() {
     return (
       <Button
         onPress={() => this.props.navigation.goBack()}
         title="Go back home"
       />
     );
   }
}


const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    } ,searchStyle: {
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


export default Message;