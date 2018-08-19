/**
 * Created by colinambitious on 2017/9/12.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as listAction from '../actions/MovieListAction';

import MovieItem from '../components/MovieItem';

const styles = StyleSheet.create({
    row: {
        marginLeft: 15
    }
});

class MovieListScreen extends Component {
    static navigationOptions = {
        title: '上映',
    };

    componentDidMount() {
        this.props.events.initData();
    }

    render() {
        const {movies, refreshing} = this.props;
        return (
            <View>
                <FlatList
                    style={styles.row}
                    numColumns={3}//numColumns指定一共有多少列
                    keyExtractor={item => item.id}//keyExtractor指定每一项的id
                    onRefresh={this.props.events.fetchMovieListData}
                    refreshing={refreshing}
                    data={movies}//data指定数据源
                    renderItem={//renderItem用来为每一个Item设置参数
                        ({item}) =>
                            <MovieItem
                                title={item.title}
                                image={item.images.large}
                                stars={item.rating.stars}
                                onPress={() => this.props.navigation.navigate('MovieDetail', {
                                    id: item.id,
                                    callback: (data) => {
                                        this.setState({
                                            childState: data
                                        })
                                    }
                                })}/>
                    }
                />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        events: bindActionCreators(listAction, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        refreshing: state.movieListFetchData.refreshing,
        movies: state.movieListFetchData.movies
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(MovieListScreen)