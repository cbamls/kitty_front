/**
* CopyRright (c)2014-2016 Haerbin Hearglobal Co.,Ltd
* Project: kitty_front
* Comments:
* Author:cbam
* Create Date:2017/6/7
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
  Image
} from 'react-native';
import FullStack from '../common/FullStack';
import CommonNavBar from '../common/CommonNavBar';
import { StackNavigator } from 'react-navigation';
const FullStackView = ({ navigation, banner }) => (
  <View style={{flex: 1}}>
        {/* <CommonNavBar leftText={"test"} rightIcon={'ic_search_grey_400_24dp'}></CommonNavBar>*/}
         <FullStack></FullStack>
  </View>
);


FullStackView.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    headerTitle: `IT喵~之大全栈!`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    headerRight: (
      <Button
        title={params.name === 'edit' ? 'Done' : 'Edit'}
        onPress={() =>
          setParams({ name: params.name === 'edit' ? '' : 'edit' })}
      />
    ),
    headerStyle: {
        backgroundColor: '#2296F3'
    },
    headerTitleStyle :{
        color: 'white'
    }
  };
};
const MyFullStack = StackNavigator({
  FullStackView: {
    path: 'people/:name',
    screen: FullStackView,
  }
}
//, {headerMode: 'none'}
);

export default MyFullStack;