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
  WebView
} from 'react-native';
import LoadingPage from '../common/LoadingPage';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class ScanResultView extends Component {
   constructor(props) {
          super(props);
          this.state = {
             isLoading: true
          };
      }
      componentDidMount() {
         let judge = typeof(this.props.navigation.state.params.uri)=="string";
               if(!judge) {
                    this.setState({
                        isLoading: false
                    })
               }
      }
    render() {
       let judge = typeof(this.props.navigation.state.params.uri)=="string";

      return (
       <View style={styles.container}>
               {
                 this.state.isLoading ? <LoadingPage> </LoadingPage> : null

               }
            {
                judge ?
                 <WebView

                              onLoadEnd={this._onLoadEnd.bind(this)}
                                       style={{backgroundColor:'white'}}
                                       source={{uri: this.props.navigation.state.params.uri,method: 'GET'}}
                                       javaScriptEnabled={true}
                                       domStorageEnabled={true}
                                       scalesPageToFit={false}
                                       />

                                  :
                                  <Text>
                                   {this.props.navigation.state.params.data}
                                  </Text>
            }

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