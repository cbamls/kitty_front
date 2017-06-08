/**
* CopyRright (c)2014-2018 Haerbin Hearglobal Co.,Ltd
* Project: kitty_front
* Comments:
* Author:cbam
* Create Date:2017/6/8
* Modified By:
* Modified Date:
* Modified Reason:
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';

export default class BarcodeScannerApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      torchMode: 'off',
      cameraType: 'back',
    };
  }

  barcodeReceived(e) {
    console.log('Barcode: ' + e.data);
    console.log('Type: ' + e.type);
    window.location.href = "http://www.baidu.com";
  }

  render() {
    return (
      <BarcodeScanner
        onBarCodeRead={this.barcodeReceived}
         style={styles.camera}
        torchMode={this.state.torchMode}
        cameraType={this.state.cameraType}>

        <View style={styles.rectangleContainer}>
                            <View style={styles.rectangle} />
                        </View>
      </BarcodeScanner>
    );
  }
}
var styles = StyleSheet.create({
    camera: {
        flex: 1
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    }
})