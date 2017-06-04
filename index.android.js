/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

/**-------导入外部的组件类---------**/
import LaunchImage from './component/main/LaunchImage';
import Main from './component/main/KittyMain'

import { StackNavigator, } from 'react-navigation';
class kitty_front extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
           <View>
 this.props.navigation.navigate('LaunchImage')
               <Text>
            esfwefe
               </Text>
           </View>
        );
    }

}
   const SimpleApp = StackNavigator({
      KittyMain: { screen: Main },
      LaunchImage: { screen: LaunchImage },
    });


AppRegistry.registerComponent('kitty_front', () => kitty_front);
