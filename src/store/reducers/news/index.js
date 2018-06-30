import {increase, decrease} from '../../actions/news/index';
import *as types from '../../actions/actionTypes/index';

const newsReducer = (state = [], action) => {
    // 判断 action 类型
    switch (action.type) {
        case types.SET_NEWS:
        	return state.concat([{num: 5,title: '上山打老虎',time: '2014-15-12'},{num: 6,title: '上山打老虎',time: '2014-15-12'}]);
        default:
            return state
    }
};

export default newsReducer;