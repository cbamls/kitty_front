
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,   // 判断当前运行的系统
} from 'react-native';


/**-----导入外部的组件类------**/
import TabNavigator from 'react-native-tab-navigator';

var Main = React.createClass({

    // 初始化函数(变量是可以改变的,充当状态机的角色)
    getInitialState(){
       return{
           selectedTab:'home' // 默认是第一个
       }
    },


    render() {
        this.props.navigation.navigate("MyApp");
        return (
        <View>

            </View>
        );
    },

    // 每一个TabBarItem
    renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName,badgeText){
    console.log("select =" + selectedTab +" this.stta== " + componentName);

        return(

           <TabNavigator.Item
                title={title}  // 传递变量,一定要加{}
                           renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle}/>} // 图标
                            renderSelectedIcon={() =><Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}   // 选中的图标
                            selected={this.state.selectedTab === selectedTab}
                            onPress={()=>{this.setState({selectedTab:selectedTab})}}
                            selectedTitleStyle={styles.selectedTitleStyle}
                           badgeText = {badgeText}

            >
                 <View>{this.props.navigation.navigate(componentName)}</View>
            </TabNavigator.Item>
        )
    }
});


const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    },

    selectedTitleStyle:{
        color:'orange'
    }
});

// 输出组件类
module.exports = Main;
