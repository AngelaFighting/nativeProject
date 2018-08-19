/**
 * Created by Angela on 2018/8/5.
 */
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

/**
 * FlatList组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同。

 FlatList更适于长列表数据，且元素个数可以增删。
 和ScrollView不同的是，FlatList并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。

 FlatList组件必须的两个属性是data和renderItem。data是列表的数据源，
 而renderItem则从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。
 * **/
export default class FlatListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})