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

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView,
    Platform,
    BackHandler
} from 'react-native';
import LoadingPage from '../common/LoadingPage';
import {NavigationActions} from 'react-navigation'
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class ScanResultView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    componentWillMount() {
        let that = this;
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onFrontAndroid.bind(that));
        }
    }

    componentWillUnmount() {
        let that = this;
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid.bind(that));
        }
    }

    onFrontAndroid() {
        console.log("将要挂载");
        this.props.navigation.navigate('MyApp');
    }

    onBackAndroid() {
        console.log("将要卸载");
        const backAction = NavigationActions.back({
            key: 'MyApp'
        })
        this.props.navigation.dispatch(backAction);
    }

    componentDidMount() {
        let judge = typeof(this.props.navigation.state.params.uri) == "string";
        if (!judge) {
            this.setState({
                isLoading: false
            })
        }
    }

    render() {
        let judge = typeof(this.props.navigation.state.params.uri) == "string";
        console.log("judge +> " + judge +  " this.state => " + this.state.isLoading);
        return (
            <View style={styles.container}>
                {
                    this.state.isLoading ? <LoadingPage> </LoadingPage> : null

                }
                {
                    judge ?
                        <WebView

                            onLoadEnd={this._onLoadEnd.bind(this)}
                            style={{backgroundColor: 'white'}}
                            source={{uri: this.props.navigation.state.params.uri, method: 'GET'}}
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
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    briefStyle: {marginTop: 30, marginLeft: 30}
});