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
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class ArticleCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "laud":0,
            "remark":0,
            "avatar":'dy',
            "subTitle":"",
            "imgUrl":'',
            "selectFavorite": false
        };
    }
    componentWillReceiveProps(nextProps) {

        this.setState({
            "laud":nextProps.laud,
            "remark":nextProps.remark,
            "avatar": nextProps.avatar,
            "date": nextProps.date,
            "author": nextProps.author,
            "subTitle":nextProps.subTitle,
            "title": nextProps.title,
            "imgUrl":nextProps.imgUrl
        })
    }
    componentWillMount() {
        let nextProps = this.props;
         this.setState({
            "laud":nextProps.laud,
            "remark":nextProps.remark,
            "avatar": nextProps.avatar,
            "date": nextProps.date,
            "author": nextProps.author,
            "subTitle":nextProps.subTitle,
            "title": nextProps.title,
            "imgUrl":nextProps.imgUrl
          })
    }
  render() {

    return (
      <View style = {styles.container}>
         <View style={{flexDirection: 'row'}}>
            <Image source={{uri: this.state.avatar}} style={{width: 30, height: 30}} />
            <View>
                <Text>{this.state.author}</Text>
                <Text style={{fontSize: 8}}>{this.state.date} 小时前</Text>
            </View>
         </View>
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('点击了'+'行')}}>

             <View style={styles.cellViewStyle}>
                        <View style={styles.rightViewStyle}>
                          {/*上边的Text*/}
                          <Text style={styles.TitleStyle}>{this.state.title}</Text>
                          {/*下边的Text*/}
                          <Text style={styles.briefStyle}>{this.state.subTitle}</Text>
                        </View>
                        <Image source={{uri: this.state.imgUrl}} style={styles.rightImageStyle}/>

             </View>
         </TouchableOpacity>

         <TouchableOpacity activeOpacity={0.5} onPress={this._handleFavorite.bind(this)}>

                         <View style={{marginLeft: 2, marginTop: 10, width: 15, height: 20}}>
                             {
                                  this.state.selectFavorite ?
                                  <Image source={{uri: 'kitty_ic_favorite_green_500_24dp'}} style={styles.iconStyle} />
                                  :
                                  <Image source={{uri: 'kitty_ic_favorite_border_light_blue_a200_24dp'}} style={styles.iconStyle} />
                             }
                         </View>
          </TouchableOpacity>

      </View>
    );
  }

  _handleFavorite() {
        this.setState({
            selectFavorite: !this.state.selectFavorite
        })
  }
}

const styles = StyleSheet.create({
        container: {

               marginTop: 2,
               backgroundColor:'white',
                // 下划线
               borderBottomWidth:0.5,
               borderBottomColor:'#e8e8e8',
               paddingTop: 5,
               paddingBottom: 10,
               paddingLeft: 10,
               paddingRight: 10,
               height: 130
        },
      rightImageStyle:{
        width:60,
        height:60,
        marginLeft:15
      },
      TitleStyle: {
        color:'red',
        fontSize:15,
        width:width * 0.7,
        marginBottom:2
      },

    cellViewStyle:{

      flexDirection:'row'
    },
      briefStyle: {

      },
      iconStyle: {
        width: 20,
        height: 20
      }

});
