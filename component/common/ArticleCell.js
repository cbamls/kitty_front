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
           selectFavorite: false,
           favoriteCount: this.props.data.counters.favorite
        };
    }


  render() {

    let data = this.props.data;
    return (
      <View style = {styles.container}>
         <View style={{flexDirection: 'row'}}>
            <Image source={{uri: data.user.avatar_url}} style={{width: 30, height: 30}} />
            <View style={{marginLeft: 2}}>
                <Text>{data.user.name}</Text>
                <Text style={{fontSize: 8}}>{this._processDate(data.published_at)}</Text>
            </View>
         </View>
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{this._toDetail()}}>

             <View style={styles.cellViewStyle}>
                        <View style={styles.rightViewStyle}>
                          {/*上边的Text*/}
                          <Text style={styles.TitleStyle}>{data.title}</Text>
                          {/*下边的Text*/}
                          <Text style={styles.briefStyle}>{data.summary}</Text>
                        </View>
                        <View style={{width: width*0.24,marginLeft:30}}>
                            <Image source={{uri: data.cover}} style={styles.rightImageStyle}/>
                        </View>

             </View>
         </TouchableOpacity>

         <TouchableOpacity activeOpacity={0.5} onPress={() => this._handleFavorite()}>

                         <View style={{marginLeft: 2, marginTop: 10, width: 15, height: 20, flexDirection: 'row'}}>
                             {
                                  this.state.selectFavorite ?
                                  <Image source={{uri: 'kitty_ic_favorite_green_500_24dp'}} style={styles.iconStyle} />
                                  :
                                  <Image source={{uri: 'kitty_ic_favorite_border_light_blue_a200_24dp'}} style={styles.iconStyle} />
                             }
                             <Text style={{fontSize: 8, width: 15}}>{this.state.favoriteCount ? this.state.favoriteCount  : 0}</Text>
                         </View>
          </TouchableOpacity>

      </View>
    );
  }
  _toDetail() {
    console.log("_toDetail => " + this.props.data.id);
    this.props.navigation.navigate('ArticleDetail', {article_id: this.props.data.id});
  }
  _handleFavorite() {
        this.setState({
            favoriteCount: this.state.selectFavorite ? this.state.favoriteCount -1  : this.state.favoriteCount + 1,
            selectFavorite: !this.state.selectFavorite
        })
  }
  _processDate(date) {
              //当前时间
              var nowTime = (new Date()).valueOf();
              var diff = nowTime - new Date(date);
              console.log("noewTime =>" +nowTime + "diff : " + diff);
              var days = Math.floor(diff/(24*3600*1000));
              var leave = diff % (24*3600*1000);
              var hours = Math.floor(leave / (3600 * 1000));

              var leave2 = leave % (3600 * 1000);
              var minutes = Math.floor(leave2 / (60 * 1000));

              var leave3=leave2%(60*1000);
              var seconds=Math.round(leave3/1000);
              console.log("days: " + days + " hours: " + hours + " minutes: " + minutes);
              if(days > 0) {
                  return days +' 天前';
              } else if(!days && hours) {
                  return hours + ' 小时前';
              } else if(!days && !hours && minutes) {
                  return minutes +' 分钟前';
              } else {
                  return '刚刚';
              }

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

        },
      rightImageStyle:{
        height:70,
        width:70
      },
      TitleStyle: {
        color:'red',
        fontSize:15,
        width:width * 0.75,
        marginBottom:2
      },
    rightViewStyle: {
        width: width - 120
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
