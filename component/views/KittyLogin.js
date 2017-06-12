/**
* CopyRright (c)2014-2016 Haerbin Hearglobal Co.,Ltd
* Project: kitty_front
* Comments:
* Author:cbam
* Create Date:2017/6/5
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
    Image,
    TextInput
} from 'react-native';


import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');



class KittyLogin extends Component {


    render() {

        return (
            <View style={[styles.card2, styles.container, { backgroundColor: 'white' }]}>
                  <View style={{alignItems: 'center'}}>
                    <Image source={{uri: 'img_01'}} style={styles.iconStyle}/>
                  </View>
                  <Sae
                    label={'Email Address'}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'blue'}
                  />
                  <Sae
                    iconName={'pencil'}
                    iconColor={'blue'}
                    label={'Invitation Code'}
                    iconClass={FontAwesomeIcon}
                  />

                {/*登录*/}
                <View style={styles.loginBtnStyle}>
                    <Text style={{color:'white'}}>登录</Text>
                </View>
                {/*设置*/}
                <View style={styles.settingStyle}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>
                {/*其他的登录方式*/}
                <View style={styles.otherLoginStyle}>
                    <Text>快速登录: </Text>
                    <Image  source={require('../business/uc/img/icon3.png')}  style={styles.otherImageStyle} />
                    <Image  source={require('../business/uc/img/icon7.png')}   style={styles.otherImageStyle} />
                    <Image  source={require('../business/uc/img/icon8.png')}   style={styles.otherImageStyle} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    iconStyle:{
       marginTop:50,
       marginBottom:30,
       width:80,
       height:80,
       borderRadius:40,
       borderWidth:2,
       borderColor:'white'

    },

    textInputStyle:{

        height:45,
        width: width * 0.75,

        marginBottom:1,
        // 内容居中
        textAlign:'center'
    },
    card2: {
        padding: 16,
    },
    loginBtnStyle:{
        height:35,
        width:width*0.9,
        backgroundColor:'blue',
        marginTop:30,
        marginBottom:20,

        justifyContent:'center',
        alignItems:'center',

        borderRadius:8
    },

    settingStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // backgroundColor:'red',

        // 主轴的对齐方式
        width:width*0.9,
        justifyContent:'space-between'
    },

    otherLoginStyle:{
        // backgroundColor:'red',

        // 设置主轴的方向
        flexDirection:'row',

        // 设置侧轴的对齐方式
        alignItems:'center',

        // 绝对定位
        position:'absolute',
        bottom:50,
        left:20
    },

    otherImageStyle:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:8
    }
});

// 输出类
module.exports = KittyLogin;
