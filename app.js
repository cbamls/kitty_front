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
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

/**-------导入外部的组件类---------**/


import { TabNavigator } from 'react-navigation';



import SearchDetail from './component/business/home/SearchDetail';
import LaunchImage from './component/business/main/LaunchImage';

import FullStackView from './component/views/FullStackView';
import KittyHome from './component/views/KittyHome';
import Explore from './component/views/Explore';
import Message from './component/views/Message';
import Center from './component/views/Center';
import KittyLogin from './component/views/KittyLogin';
import HomeMidListView from './component/business/home/HomeMidListView';

import { StackNavigator} from 'react-navigation';

/*首屏路由注册*/
const MyApp = TabNavigator({
  KittyHome: {
    screen: KittyHome,
  },
  Explore: {
    screen: Explore,
  },
   Message: {
      screen: Message,
    },
     Center: {
        screen: Center,
      }
},


 {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showLabel:true,
    showIcon : true,
    labelStyle: {
         fontSize: 10,
    },
    style: {
        backgroundColor: '#2296F3',
    },
     tabStyle: {
        height: 60,
      }
  },
  tabBarPosition : 'bottom',
  swipeEnabled :false

});



const SimpleApp = StackNavigator({
    MyApp: {screen: MyApp},
     HomeMidListView: {
        screen: HomeMidListView
      },
  initialRouteName : {screen: LaunchImage},
  LaunchImage: { screen: LaunchImage },
FullStackView:{
   screen: FullStackView
},

  SearchDetail: {
    path: 'people/:name',
    screen: SearchDetail
  },
  KittyLogin: {
    screen: KittyLogin
  }

},
 {headerMode :'none'} );

export default SimpleApp;
