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

import React, {Component} from 'react';
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


var SearchDetail = React.createClass({
    render() {
        return (
            <View style={styles.navBarStyle}>
                <View style={styles.searchBoxStyle}>
                    <Image source={{uri: 'ic_search_grey_400_24dp'}} style={styles.searchStyle}/>
                    <TextInput
                        placeholder="输入关键词"
                        style={styles.topInputStyle}
                        clearButtonMode="while-editing"
                        onSubmitEditing={this.fetchData()}
                    />
                </View>
                <TouchableOpacity onPress={() => this.cancelSearch()}>
                    <Text style={{color: 'blue'}}>取消</Text>
                </TouchableOpacity>
            </View>
        );
    },


    fetchData() {

    },
    cancelSearch() {
        this.props.navigation.state.params.handleTextBlur();
        this.props.navigation.goBack();
    }
});


const styles = StyleSheet.create({
    navBarStyle: { // 导航条样式
        height: Platform.OS == 'ios' ? 64 : 44,

        // 设置主轴的方向
        flexDirection: 'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems: 'center',

        // 设置主轴的对齐方式
        justifyContent: 'space-around'
    },
    topInputStyle: { // 设置输入框
        backgroundColor: 'transparent',
        flex: 1,

    },
    searchStyle: {
        height: 20,
        width: 20,
        marginLeft: 5,
        resizeMode: 'stretch',

    },
    searchBoxStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.71,
        height: Platform.OS == 'ios' ? 35 : 40,
        backgroundColor: 'white',
        marginTop: Platform.OS == 'ios' ? 18 : 0,
        // 设置圆角
        borderRadius: 17,
        marginLeft: 8,
        marginRight: 8,
    }
});

// 输出组件类
module.exports = SearchDetail;