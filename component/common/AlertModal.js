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
import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Dimensions,
    Image,
    Modal,
    TextInput,
    InteractionManager
} from 'react-native';

var {SCREEN_WIDTH, SCREEN_HEIGHT} = Dimensions.get('window');

export default class AlertModal extends Component{
    constructor(props){
        super(props)
        this.state = { visible: this.props.visible };
    }
    close=()=>{
        this.setState({ visible: false });
    }
    componentWillReceiveProps(props) {
        this.setState({ visible: props.visible });
    }
    renderContent=()=>{
        return (
         <View style={styles.innerView}>
            <TouchableOpacity activeOpacity={0.5} onPress={this.props.openPicker}>
                <Text style={{fontSize:12, color:'black', marginTop:25, marginLeft:25}}>打开相册</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={this.close}>
                <Text style={{fontSize:12, color:'black',marginBottom:25}}>取消</Text>
            </TouchableOpacity>
        </View>)
    }
    render(){
        return(
            <Modal
                animationType='slide'//进场动画 fade
                onRequestClose={() => this.close()}
                visible={this.state.visible}//是否可见
                transparent={true} //背景透明
                 >
                <TouchableOpacity style={{flex:1}} activeOpacity={1} onPress={this.close}//点击灰色区域消失
                >
                <View style={styles.container}>
                    {this.renderContent()}
                </View>
                </TouchableOpacity>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    container:{
               flex:1,
               backgroundColor: 'rgba(0, 0, 0, 0.25)',
               justifyContent:'center',
               padding: 20
    },
    innerView: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        width: SCREEN_WIDTH * 0.4,
         height: SCREEN_HEIGHT * 0.3
    }
})