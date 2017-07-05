/**
 * Created by ershu.liang on 2017/7/5.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,

    Image
} from 'react-native';
import Video from 'react-native-video'
import CommonNavBar from '../common/CommonNavBar';
import {StackNavigator} from 'react-navigation';
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
export default class VideoDetail extends Component {
    render() {
        return (

            <View style={styles.containerStyle}>

                <Video
                    source={{uri: "http://nenmbv.whlmsp.com/up/nenmb/video/20170211/589e6ade1c835.mp4"}}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    rate={1.0}                              // 0 is paused, 1 is normal.
                    volume={1.0}                            // 0 is muted, 1 is normal.
                    muted={false}                           // Mutes the audio entirely.
                    paused={false}                          // Pauses playback entirely.
                    resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                    repeat={true}                           // Repeat forever.
                    playInBackground={false}                // Audio continues to play when app entering background.
                    playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                    ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                    progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                    onLoadStart={this.loadStart}            // Callback when video starts to load
                    onLoad={this.setDuration}               // Callback when video loads
                    onProgress={this.setTime}               // Callback every ~250ms with currentTime
                    onEnd={this.onEnd}                      // Callback when playback finishes
                    onError={this.videoError}               // Callback when video cannot be loaded
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                    style={styles.backgroundVideo}/>
            </View>

        )
        // Later to trigger fullscreen
        this.player.presentFullscreenPlayer()

// To set video position in seconds (seek)
        this.player.seek(0)

    }

}

const styles = StyleSheet.create({
    containerStyle: {

    },
    backgroundVideo: {
        width: width,
        height: width * 0.75,
    }
});