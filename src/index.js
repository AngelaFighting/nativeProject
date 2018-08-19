/**
 * Created by Angela on 2018/8/4.
 */
import React, {Component} from 'react';
import {
    createSwitchNavigator,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';

import AuthLoadingScreen from './pages/AuthLoadingScreen';
import SignInScreen from './pages/SignInScreen';
import MovieListScreen from './pages/MovieListScreen';
import AboutScreen from './pages/AboutScreen';
import MyMoviesScreen from './pages/MyMoviesScreen';
import SampleAppMovies from './pages/SampleAppMovies';
import MovieDetailScreen from './pages/MovieDetailScreen';

// Because the create***Navigator function returns a React component,
// we can export it directly from index.js to be used as our App's root component.
const rootTab = createBottomTabNavigator(
    {
        MovieList: MovieListScreen,
        MyMovies: MyMoviesScreen,
        About: AboutScreen,
    },
    {//Customizing the appearance
        tabBarOptions: {
            activeTintColor: '#0390eb',
            inactiveTintColor: '#fff',
            labelStyle: {
                fontSize: 20,
                marginBottom: 10
            },
            style: {
                backgroundColor: '#222',
            }
        }
    }
);

rootTab.navigationOptions = {
    // Hide the header from AppNavigator stack
    header: null,
};

const AppStack = createStackNavigator(
    {
        RootTab: rootTab,
        MovieDetail: MovieDetailScreen,
        SampleAppMovies: SampleAppMovies,
    },
    {
        initialRouteName: 'RootTab',
    }
);

const AuthStack = createStackNavigator(
    {
        SignIn: SignInScreen
    },
    {
        initialRouteName: 'SignIn',// the default router
        headerMode: 'none'
    }
);

const Root = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',// the default router
    }
);

export default Root;

