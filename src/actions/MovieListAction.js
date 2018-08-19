/**
 * Created by Angela on 2018/8/18.
 */
import * as types from '../constants/ActionTypes';
import * as apis from '../constants/Apis';
import movies from '../static/movies.json';

export function fetchMovieListData() {
    return (dispatch, getState) => {
        if (getState.refreshing) {
            return;
        }
        dispatch(isFetching());
        fetch(apis.FETCH_MOVIE_LIST_DATA)
            .then((response) => response.text())
            .then((responseText) => {
                const json = JSON.parse(responseText);
                var movies = json.subjects;
                dispatch(fetchSuccess(movies));
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

function isFetching() {
    return {
        type: types.FETCH_LIST_DATA_DOING,
        id: 1
    }
}

export function initData() {
    return {
        type: types.LIST_INIT_DATA,
        refreshing: false,
        movies: movies.subjects,
        childState: ''
    }
}

function fetchSuccess(movies) {
    return {
        type: types.FETCH_LIST_DATA_DONE,
        movies: movies
    }
}