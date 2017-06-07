/**
* CopyRright (c)2014-2016 Haerbin Hearglobal Co.,Ltd
* Project: kitty_front
* Comments:
* Author:cbam
* Create Date:2017/6/6
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
    TouchableOpacity,
    Platform,
    Switch
} from 'react-native';

export default class ArticleCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "imgUrl": "",
            "topText":"topText",
            "bottomText":"bottomText",
            "laud":0,
            "remark":0
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            "imgUrl": nextProps.imgUrl,
            "topText": nextProps.title,
            "bottomText":nextProps.subTitle,
            "laud":0,
            "remark":0,

        })
    }
  render() {
    return (
      <View style={styles.cellViewStyle}>

            {/*右边的View*/}
            <View style={styles.rightViewStyle}>
              {/*上边的Text*/}
              <Text style={styles.topTitleStyle}>{this.state.title}</Text>
              {/*下边的Text*/}
              <Text style={styles.bottomTitleStyle}>¥{this.state.subTitle}</Text>
            </View>
              <Image source={{uri: this.state.imgUrl}} style={styles.leftImageStyle}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
 
});
