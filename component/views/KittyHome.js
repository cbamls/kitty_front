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
  Platform,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

import ScrollView from './ScrollView';
import KittyNavBar from './KittyNavBar';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class KittyHome extends Component {
   static navigationOptions = {
        tabBarLabel: 'Home',
        title: 'MyHome',
         header :'screen',
        tabBarIcon: ({ tintColor }) => (
                 <Image
                   source={{uri: 'icon_tabbar_homepage'}}
                   style={[styles.iconStyle, {tintColor: tintColor}]}
                 />
            )
      };

      render() {
        return (
               <View style={styles.container}>
                              {/*首页的导航条*/}
                              <KittyNavBar></KittyNavBar>

             </View>

        );
      }


}


