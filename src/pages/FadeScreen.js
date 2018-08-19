/**
 * Created by Angela on 2018/8/5.
 */
import React from 'react';
import { Text, View } from 'react-native';
import FadeInView from '../components/FadeInView';

// 然后你就可以在组件中像使用`View`那样去使用`FadeInView`了
export default class FadeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
        )
    }
}