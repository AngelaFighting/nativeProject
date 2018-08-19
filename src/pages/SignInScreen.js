/**
 * Created by Angela on 2018/8/19.
 */
import React from 'react';
import {
    AsyncStorage,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,//获取设备尺寸
    Alert,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';// for iphoneX

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logoStyle: {
        //设置主轴方向
        flexDirection: 'row',
        //设置侧轴对齐
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 30,
    },
    logoImageStyle: {
        width: 66,
        height: 58,
        backgroundColor: 'black',
    },
    textInputStyle: {
        height: 38,
        backgroundColor: 'white',
        textAlign: 'left',
        width: width * 0.8,
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: '#000000',
        marginBottom: 10,
    },
    loginBtnStyle: {
        height: 35,
        width: width * 0.8,
        backgroundColor: '#1DBAF1',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
    },
    settingStyle: {
        //设置主轴方向
        flexDirection: 'row',
        //主轴对齐方式
        justifyContent: 'space-between',
        marginTop: 15,
        width: width * 0.8,
        color: '#1DBAF1',
    },
    otherLoginWay: {
        marginTop: 50,
        marginBottom: 10,
        alignItems: 'center',
    },
    otherLoginStyle: {
        //设置主轴方向
        flexDirection: 'row',
        //设置侧轴对齐
        alignItems: 'center',
        marginTop: 10,
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 8,
    }
});
/*密码输入框需要指定属性：secureTextEntry={true}*/
export default class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    constructor(props) {
        super(props);
        this.userName = '';
        this.password = '';
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/*图标*/}
                <View style={styles.logoStyle}>
                    <Image source={require('../img/react_logo.png')} style={styles.logoImageStyle}/>
                </View>
                {/*账号和密码*/}
                {/*<TextInput>组件在React Native中，默认是带一条横线的，如果想去掉输入框下面的横线，
                 需要给<TextInput>指定一个underlineColorAndroid='transparent'，这样就可以去掉输入框下面的横线了*/}
                <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle}
                           underlineColorAndroid='transparent'
                           autoFocus={true}
                           onChangeText={(text) => {
                               this.userName = text;
                           }}/>
                <TextInput placeholder={'请输入密码'}
                           underlineColorAndroid='transparent'
                           password={true} secureTextEntry={true}
                           style={styles.textInputStyle}
                           onChangeText={(text) => {
                               this.password = text;
                           }}/>
                {/*登录*/}
                <TouchableOpacity style={styles.loginBtnStyle}
                                  onPress={this._signInAsync}>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableOpacity>
                {/*设置*/}
                <View style={styles.settingStyle}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>
                {/*其他登录方式*/}
                <View style={styles.otherLoginWay}>
                    <Text>其他登录方式</Text>
                    <View style={styles.otherLoginStyle}>
                        <Image source={require('../img/icon_qq.png')} style={styles.imageStyle}/>
                        <Image source={require('../img/icon_weichat.png')} style={styles.imageStyle}/>
                        <Image source={require('../img/icon_weibo.png')} style={styles.imageStyle}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }

    _signInAsync = async () => {
        Alert.alert('用户名:' + this.userName + ';密码:' + this.password);
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}


