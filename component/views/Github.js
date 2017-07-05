/**
 * Created by ershu.liang on 2017/6/27.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import FullStack from '../common/FullStack';
import CommonNavBar from '../common/CommonNavBar';
import { StackNavigator } from 'react-navigation';
import TopMenu from '../common/TopMenu';
export default class Github extends Component {
    render() {
        return (
            <TopMenu></TopMenu>
        )
    }
}