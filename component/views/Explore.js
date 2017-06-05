/**
* CopyRright (c)2014-2016 Haerbin Hearglobal Co.,Ltd
* Project: kitty_front
* Comments:
* Author:cbam
* Create Date:2017/6/3
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
import FullStack from '../fullStack/FullStack';

class Explore extends Component {
 static navigationOptions = {
     tabBarLabel: 'Explore',
     tabBarIcon: ({ tintColor }) => (
           <Image
             source={{uri: "icon_tabbar_merchant_normal"}}
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
    }
});


export default Explore;
