/**
* CopyRright (c)2014-2018 Haerbin Hearglobal Co.,Ltd
* Project: kitty_front
* Comments:
* Author:cbam
* Create Date:2017/6/12
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
  WebView
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
import LoadingPage from '../common/LoadingPage';
export default class ArticleDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
           isLoading: true
        };
    }

  render() {
              let uri = 'http://36kr.com/p/' + this.props.navigation.state.params.article_id + '.html';

    return (
     <View style={styles.container}>
           {
               this.state.isLoading ? <LoadingPage> </LoadingPage> : null

             }

            <WebView

            onLoadEnd={this._onLoadEnd.bind(this)}
                     style={{width:width,height:height-20,backgroundColor:'gray'}}
                     source={{uri: uri,method: 'GET'}}
                     javaScriptEnabled={true}
                     domStorageEnabled={true}
                     scalesPageToFit={false}
                     />
      </View>


    );
  }

  _onLoadEnd() {
    this.setState({
        isLoading: false
    })
  }
}

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        backgroundColor: 'white'
    },
    briefStyle: {marginTop: 30, marginLeft: 30}
});