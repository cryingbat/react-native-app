import *as types from '../../actions/actionTypes/index';

const initState ={
    num: 2,
    news: [],
}

const mainReducer = (state = initState, action) => {
    // 判断 action 类型
    switch (action.type) {
        case types.INCREASE_NUM:
        	if(state.num>=5){
        		return Object.assign({},state,{num: 5});
        	}else{
        		return Object.assign({},state,{num: state.num+action.num});
        	}
        case types.DECREASE_NUM:
        	if(state.num<=0){
        		return Object.assign({},state,{num: 0});
        	}else{
        		return Object.assign({},state,{num: state.num-action.num});
        	}
        default:
            return state
    }
};

export default mainReducer;