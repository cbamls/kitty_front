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

class Tech1 extends Component {
 static navigationOptions = {
     tabBarLabel: 'Tech1',
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


class Tech2 extends Component {
 static navigationOptions = {
     tabBarLabel: 'Tech2',

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



class Tech3 extends Component {
 static navigationOptions = {
     tabBarLabel: 'Tech3',

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



class Tech4 extends Component {
  static navigationOptions = {
      tabBarLabel: 'Tech4',
 title: 'Tech4',
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
            <View>
            <Text>32</Text>
            <Image source={{uri: "icon_tabbar_homepage"}}
                             style={styles.iconStyle}/>
            </View>
      );
    }
}
const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    }
});


const FullStack = TabNavigator({
  Tech1: {
    screen: Tech1,
  },
  Tech2: {
    screen: Tech2,
  },
   Tech3: {
      screen: Tech3,
    },
     Tech4: {
        screen: Tech4,
      },
},


 {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showLabel:true,
    showIcon : false,
    labelStyle: {
         fontSize: 10,
    },
    style: {
        backgroundColor: 'grey',
    },
     tabStyle: {
        height: 40,
      }
  },
});

export default FullStack;