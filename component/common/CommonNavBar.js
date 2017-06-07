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
  Platform,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class CommonNavBar extends Component {

        constructor(props) {
                super(props);
                this.state = {
                    "rightIcon": 'icon_homepage_scan',
                     "leftText":'IT喵~'
                };
            }

           componentWillReceiveProps(nextProps) {
                  this.setState({
                      "leftText":"IT喵~",
                      "rightIcon": nextProps.rightIcon,
                  })
           }

  render() {
    return (
      <View style={styles.navBarStyle}>
                                   {/*左边*/}
                                         <Text style={{color:'white', marginLeft: 2}}>
                                            {this.state.leftText}
                                         </Text>

                                   {/*右边*/}
                                   <View style={styles.rightNavViewStyle}>
                                       <TouchableOpacity onPress={()=>this.handleTextBlur()}>
                                           <Image source={{uri:this.state.rightIcon}} style={styles.navRightImgStyle} />
                                       </TouchableOpacity>
                                   </View>

                      </View>
    );
  }
}


const styles = StyleSheet.create({
    navBarStyle:{
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'#2296F3',

        flexDirection:'row',
        alignItems:'center',

        justifyContent:'space-around'
    },

    rightNavViewStyle:{
      flexDirection:'row',
      height:64,
      alignItems:'center'
    },

    navRightImgStyle:{
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24
    },

    container: {
        flex: 1,
        backgroundColor: 'blue'
    },

    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    }
});