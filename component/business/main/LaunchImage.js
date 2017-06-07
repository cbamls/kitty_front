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
    Image
} from 'react-native';


var Launch = React.createClass({
    render() {

        return (
            <Image source={{uri: 'launchimage'}} style={styles.launchImageStyle}/>
        );
    },

    // 复杂的操作:定时器\网络请求
    componentDidMount(){
        // 定时: 隔2s切换到KittyMain
        setTimeout(()=>{
          this.props.navigation.navigate('MyApp');
        }, 15);
    }
});


const styles = StyleSheet.create({
    launchImageStyle:{
        flex:1
    }
});

// 输出组件类
module.exports = Launch;
