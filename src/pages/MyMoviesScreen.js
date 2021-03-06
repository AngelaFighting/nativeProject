/**
 * Created by colinambitious on 2017/9/13.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import ParentComponent from '../components/ParentComponent';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default class MyMoviesScreen extends Component {
    static navigationOptions = {
        title: '我的'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>我的电影</Text>
                <ParentComponent/>
            </View>
        );
    }
}
