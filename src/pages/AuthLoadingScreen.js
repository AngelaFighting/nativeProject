/**
 * Created by Angela on 2018/8/19.
 */
import React from 'react';
import {
    ActivityIndicator,// 显示一个圆形的正在加载的符号
    AsyncStorage,
    StatusBar,// 用于控制应用顶部状态栏样式的组件
    StyleSheet,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        /**
         * 在组件样式中使用flex可以使其在可利用的空间中动态地扩张或收缩。
         * 一般而言我们会使用flex:1来指定某个组件扩张以撑满所有剩余的空间。
         * 如果有多个并列的子组件使用了flex:1，则这些子组件会平分父容器中剩余的空间。
         * 如果这些并列的子组件的flex值不一样，则谁的值更大，
         * 谁占据剩余空间的比例就更大（即占据剩余空间的比等于并列组件间flex值的比）。

         组件能够撑满剩余空间的前提是其父容器的尺寸不为零。
         如果父容器既没有固定的width和height，也没有设定flex，
         则父容器的尺寸为零。其子组件如果使用了flex，也是无法显示的。
         * **/
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}