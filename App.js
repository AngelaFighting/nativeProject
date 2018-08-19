/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Store from './src/store/index';
import Root from './src/index';

const store = Store();

export default class APP extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        )
    }
}

