/**
 * Created by Angela on 2018/8/18.
 */
'use strict'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

// redux-thunk中间件可以让action创建函数先不返回一个action对象，而是返回一个函数，
// 函数传递两个参数(dispatch,getState),在函数体内进行业务逻辑的封装
export default function Store(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)
    return store
}