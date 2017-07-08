/**
 * Created by ershu.liang on 2017/7/5.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator,
    TouchableOpacity,
    Image
} from 'react-native';
import Video from 'react-native-video'
import CommonNavBar from '../common/CommonNavBar';
import {StackNavigator} from 'react-navigation';
import Icon  from 'react-native-vector-icons/FontAwesome';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class VideoDetail extends Component {
    constructor(props) {
        super(props);
        console.log("constructor =====");
        this.state = {
            videoReady: false,
            rate: 1,
            muted: false,
            paused: false,
            resizeMode: 'contain',
            repeat: false,
            playing: false,
            videoProgress: 0.01
        };

    }

    _onEnd() {
        this.setState({
            videoProgress: 1
        })
    }

    _rePlay() {
        this.refs.videoPlayer.seek(0)
    }

    _setTime(data) {
        if (!this.state.videoReady) {
            this.setState({
                videoReady: true
            })
        }
        console.log(data)
        let duration = data.playableDuration;
        let currentTime = data.currentTime;
        let percent = Number((currentTime / duration).toFixed(2));
        //console.log("this. ================> " + duration + " " + currentTime + " " + percent);
        this.setState({
            videoTotal: duration,
            currentTime: Number(data.currentTime.toFixed(2)),
            videoProgress: percent,
            playing: true
        })
    }

    _onEnd() {
        this.setState({
            playing: false
        })
    }

    _pause() {
        if (!this.state.paused) {
            this.setState({
                paused: true
            })
        }
    }

    _resume() {
        if (!this.state.paused) {
            this.setState({
                paused: false
            })
        }
    }

    render() {
        // console.log("this.props + " + this.props.navigation.state.params.uri);
        console.log("this ====> " + this.state.videoReady + " " + this.state.playing)
        return (

            <View style={styles.containerStyle}>
                <CommonNavBar></CommonNavBar>
                <Video
                    source={{uri: this.props.navigation.state.params.uri}}   // Can be a URL or a local file.
                    ref='videoPlayer'                                      // Store reference
                    rate={this.state.rate}                              // 0 is paused, 1 is normal.
                    volume={5.0}                            // 0 is muted, 1 is normal.
                    muted={this.state.muted}                           // Mutes the audio entirely.
                    paused={this.state.paused}                          // Pauses playback entirely.
                    resizeMode={this.state.resizeMode}                      // Fill the whole screen at aspect ratio.*
                    repeat={this.state.repeat}                           // Repeat forever.
                    playInBackground={false}                // Audio continues to play when app entering background.
                    progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                    onLoadStart={this._loadStart.bind(this)}            // Callback when video starts to load
                    onLoad={this._setDuration.bind(this)}               // Callback when video loads
                    onProgress={this._setTime.bind(this)}               // Callback every ~250ms with currentTime
                    onEnd={this._onEnd.bind(this)}                      // Callback when playback finishes
                    onError={this._videoError}               // Callback when video cannot be loaded
                    onBuffer={this._onBuffer}                // Callback when remote video is buffering
                    style={styles.backgroundVideo}/>
                {
                    !this.state.videoReady && <ActivityIndicator style={styles.loading}></ActivityIndicator>
                }
                {

                    this.state.videoReady && !this.state.playing
                        ? <Icon
                        name="play-circle"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
                        size={40}   //图片大小
                        /* color="white"  //图片颜色*/
                        style={styles.playIcon}
                    />
                        : null
                }

                {
                    this.state.videoReady && this.state.playing ?
                        <TouchableOpacity onPress={this._pause} style={styles.pauseBtn}>
                            this.state.paused ?
                            <Icon onPress={this._resume} name="play-circle" style={styles.resumeIcon}>
                            </Icon>
                        </TouchableOpacity> : null
                }
                <View style={styles.progressBox}>
                    <View style={[styles.progressBar, {width: width * this.state.videoProgress}]}>

                    </View>
                </View>
            </View>

        )
        // Later to trigger fullscreen
        this.refs.videoPlayer.presentFullscreenPlayer()

// To set video position in seconds (seek)
        this.refs.videoPlayer.seek(0)

    }

}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    playIcon: {
        position: 'absolute',
        top: 140,
        left: width / 2 - 30,
        width: 60,
        height: 60,
        paddingTop: 8,
        paddingLeft: 22,
    },
    progressBox: {
        width: width,
        height: 3,
        backgroundColor: '#ccc'
    },
    progressBar: {
        width: 1,
        height: 2,
        backgroundColor: '#ff6600'
    },
    backgroundVideo: {
        width: width,
        height: width * 0.75,
    },
    loading: {
        position: 'absolute',
        left: 0,
        top: 140,
        width: width,
        alignSelf: 'center',
        backgroundColor: 'transparent'
    },
    pauseBtn: {
        width: width,
        height: width * 0.75
    },
    resumeIcon: {
        width: 60,
        height: 60,
        paddingTop: 8,
        paddingLeft: 22,
        alignSelf: 'center'
    },

})
