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
    Platform,
    TouchableOpacity,
    TextInput,
    Image,
    WebView
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class ArticleDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    componentDidMount() {
        //  console.log("componentDidMount");
        this._fetchData();
    }

    _fetchData() {

        let that = this;
        console.log("fetchData");
        this.setState({isLoading: true});
        let uri = 'http://36kr.com/p/' + this.props.navigation.state.params.article_id + '.html';
        console.log("url: => " + uri);
        fetch(uri, {
            method: 'GET',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                "Content-Type": "text/plain"
            }
        }).then((response) => response.text())
            .then((responseText) => {
                let str = responseText;
                let props = str.slice(str.indexOf("detailArticle|post\":") + "detailArticle|post\":".length, str.indexOf("\"extraction_tags_extend") - 1);
                //console.log("json =======> "  + (props  + "}"));
                let json = JSON.parse(props + "}");
                //console.log("id =>>>>>>>>>>>>>>>" + json.id);
                this.setState({
                    isLoading: false,
                    cover: json.cover,
                    title: json.title,
                    name: json.user.name,
                    summary: json.summary,
                    published_at: json.published_at,
                    content: json.content
                })
            }).catch((error) => {
            console.error("error => " + error);
        });

    }

    render() {
        let data = this.state.data;
        console.log("data=>" + this.state.content);
        if (this.state.isLoading) {
            console.log("正在loading 不能渲染");
            return <View></View>;
        }
        return (
            <View style={styles.container}>
                <View>
                    <Image source={{uri: this.state.cover}} style={{width: width, height: 100}}/>
                </View>

                <View style={{backgroundColor: 'white', position: 'absolute', top: 80, right: 15, padding: 30}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                        {this.state.title}
                    </Text>
                </View>
                <View style={{backgroundColor: 'grey', marginTop: 100}}>
                    <Text style={styles.briefStyle}>
                        {this.state.name}
                        {this.state.published_at}
                    </Text>
                    <Text style={styles.briefStyle}>
                        {this.state.summary}
                    </Text>
                </View>
                <WebView
                    style={{width: width, height: height - 20, backgroundColor: 'gray'}}
                    source={{uri: 'http://36kr.com/p/5079312.html', method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    briefStyle: {marginTop: 30, marginLeft: 30}
});