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
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import BarcodeScanner from './MyBarcodeScanner';

import TopScrollView from '../business/home/TopScrollView';
import KittyNavBar from '../business/home/KittyNavBar';
import ModuleList from '../business/home/ModuleList';
import HomeListView from '../business/home/HomeListView';


import AlertModal from '../common/AlertModal';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class KittyHome extends Component {

   static navigationOptions = {
        tabBarLabel: 'Home',
        title: 'MyHome',
         header :'screen',
        tabBarIcon: ({ tintColor }) => (
                 <Image
                   source={{uri: 'kitty_ic_home_grey_400_24dp'}}
                   style={[styles.iconStyle, {tintColor: tintColor}]}
                 />
            )
      };

      render() {

        return (
            <View style = {{flex: 1}}>
             {/* <AlertModal ref="alertModal" visible={true}></AlertModal>*/}
              <KittyNavBar navigation={this.props.navigation}> </KittyNavBar>
             {/* <HomeMidListView navigation={this.props.navigation}></HomeMidListView>*/}
              <HomeListView navigation={this.props.navigation}></HomeListView>
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
