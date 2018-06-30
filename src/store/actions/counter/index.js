import *as types from '../actionTypes/index';
export const increase = (num) => {
	return {
		type: types.INCREASE_NUM,
		num
	}
}
export const decrease = (num) => {
	return {
		type: types.DECREASE_NUM,
		num
	}
}


