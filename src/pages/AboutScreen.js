/**
 * Created by Angela on 2018/8/5.
 */
import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    AsyncStorage,
} from 'react-native';

/**
 * React Native 提供了两种方法来区分平台：
 使用Platform模块. 判断平台是否是IOS：Platform.OS === "ios"
 使用特定平台扩展名.当不同平台的代码逻辑较为复杂时，最好是放到不同的文件里，这时候我们可以使用特定平台扩展名。
 React Native 会检测某个文件是否具有.ios.或是.android.的扩展名，然后根据当前运行的平台自动加载正确对应的文件。
 * **/
// Platform.select()以 Platform.OS 为 key，从传入的对象中返回对应平台的值
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 检测 Android 版本
// 在 Android 上，Version属性是一个数字，表示 Android 的 api level：
if (Platform.Version === 25) {
    console.log("Running on Nougat!");
}

// 检测 iOS 版本
// 在 iOS 上，Version属性是-[UIDevice systemVersion]的返回值，
// 具体形式为一个表示当前系统版本的字符串。比如可能是"10.3"。
const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
    console.log("Work around a change in behavior");
}

export default class AboutScreen extends React.Component {

    static navigationOptions = {
        title: '简介',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Button title="Show me more of the app" onPress={this._showMoreApp}/>
                <Button title="Sign out" onPress={this._signOutAsync}/>
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('SampleAppMovies');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

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
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});
