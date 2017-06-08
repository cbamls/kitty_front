/**
* CopyRright (c)2014-2016 Haerbin Hearglobal Co.,Ltd
* Project: kitty_front
* Comments:
* Author:cbam
* Create Date:2017/6/3
* Modified By:
* Modified Date: 
* Modified Reason: 
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Platform
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import LoadingPage from '../common/LoadingPage';
import PullRefresh from '../common/PullRefresh';

var MockData = require('./FullStackMock.json');

class Tech1 extends Component {
 static navigationOptions = {
     tabBarLabel: '全部',
     tabBarIcon: ({ tintColor }) => (
           <Image
             source={{uri: "icon_tabbar_merchant_normal"}}
             style={[styles.iconStyle, {tintColor: tintColor}]}
           />
      )

   };
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: {}
        }
    }
    _setState(data) {
        this.setState({"loading": false, "data": data});
    }
    fetchDataTech1() {
        var data = [{"1": "_1"}, {"2": "_2"}];
        this._setState(data);
    }
    componentDidMount() {
        this.fetchDataTech1();
    }


    _onPullRelease(resolve) {
   		//do something
   		setTimeout(() => {
               resolve();
           }, 2000);
       }
   render() {
     return (
           <View style = {styles.container}>
                 {
                    this.state.loading ? <LoadingPage></LoadingPage> :  (null)
                 }
                 <PullRefresh data = {MockData} isLastPage={true}  onPullRelease={this._onPullRelease.bind(this)}></PullRefresh>
           </View>

     );
   }

}


class Tech2 extends Component {
 static navigationOptions = {
     tabBarLabel: '后端',
     tabBarIcon: ({ tintColor }) => (
           <Image
             source={{uri: "icon_tabbar_merchant_normal"}}
             style={[styles.iconStyle, {tintColor: tintColor}]}
           />
      )

   };

   render() {
     return (
       <Button
         onPress={() => this.props.navigation.goBack()}
         title="Go back home"
       />
     );
   }
}



class Tech3 extends Component {
 static navigationOptions = {
     tabBarLabel: '前端',
     tabBarIcon: ({ tintColor }) => (
           <Image
             source={{uri: "icon_tabbar_merchant_normal"}}
             style={[styles.iconStyle, {tintColor: tintColor}]}
           />
      )

   };

   render() {
     return (
       <Button
         onPress={() => this.props.navigation.goBack()}
         title="Go back home"
       />
     );
   }
}



class Tech4 extends Component {
  static navigationOptions = {
      tabBarLabel: 'Android',
 title: 'Android',
      tabBarIcon: ({ tintColor }) => (
               <Image
                 source={{uri: 'icon_tabbar_homepage'}}
                 style={[styles.iconStyle, {tintColor: tintColor}]}
               />
          )
    };

    render() {
      return (
            <View>
            <Text>32</Text>
            <Image source={{uri: "icon_tabbar_homepage"}}
                             style={styles.iconStyle}/>
            </View>
      );
    }
}

class Tech5 extends Component {
  static navigationOptions = {
      tabBarLabel: '程序员',
      title: '程序员',
      tabBarIcon: ({ tintColor }) => (
               <Image
                 source={{uri: 'icon_tabbar_homepage'}}
                 style={[styles.iconStyle, {tintColor: tintColor}]}
               />
          )
    };

    render() {
      return (
            <View>
            <Text>32</Text>
            <Image source={{uri: "icon_tabbar_homepage"}}
                             style={styles.iconStyle}/>
            </View>
      );
    }
}

class Tech6 extends Component {
  static navigationOptions = {
      tabBarLabel: 'Tech6',
 title: 'Tech6',
      tabBarIcon: ({ tintColor }) => (
               <Image
                 source={{uri: 'icon_tabbar_homepage'}}
                 style={[styles.iconStyle, {tintColor: tintColor}]}
               />
          )
    };

    render() {
      return (
            <View>
            <Text>32</Text>
            <Image source={{uri: "icon_tabbar_homepage"}}
                             style={styles.iconStyle}/>
            </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
       flex: 1,
       backgroundColor: 'white'
    },
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    }
});


const FullStack = TabNavigator({
  Tech1: {
    screen: Tech1,
  },
  Tech2: {
    screen: Tech2,
  },
   Tech3: {
      screen: Tech3,
    },
     Tech4: {
        screen: Tech4,
      },
         Tech5: {
              screen: Tech5,
            },
               Tech6: {
                    screen: Tech6,
                  },
},


 {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showLabel:true,
    showIcon : false,
    scrollEnabled: true,
    labelStyle: {
         fontSize: 10,
    },
    style: {
        backgroundColor: '#2296F3',
    },
     tabStyle: {
        height: 40,
        width:90
      }
  },
});

export default FullStack;