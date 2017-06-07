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
    TextInput,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

export default class ModuleList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("FullStackView", {name:'jane'})}}>
             <View style={{alignItems: 'center'}}>
                          <Image source={{uri: 'kitty_article_list_600'}} style={styles.imgStyle}/>
                          <Text style={styles.collectionStyle}>技能GET</Text>
             </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <View style={{alignItems: 'center'}}>
                <Image source={{uri: 'kitty_collection'}} style={styles.imgStyle}/>
                  <Text style={styles.collectionStyle}>我的收藏</Text>
            </View>
         </TouchableOpacity>
        <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <View style={{alignItems: 'center'}}>
                 <Image source={{uri: 'kitty_github'}} style={styles.imgStyle}/>
                 <Text style={styles.collectionStyle}>Trending</Text>
             </View>
         </TouchableOpacity>
        <TouchableOpacity onPress={()=>{alert('点击了')}}>

            <View style={{alignItems: 'center'}}>
                <Image source={{uri: 'kitty_video_black'}} style={styles.imgStyle}/>
                  <Text style={styles.collectionStyle}>名师直播</Text>
             </View>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: width,
        height: 70,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    imgStyle: {
        width: 40,
        height: 40,

    },
    collectionStyle: {

    }
});
