import {
 RECEIVE_CATEGORY,
 RECEIVE_CATEGORIES,
 REMOVE_CATEGORY,
 CATEGORY_LOADING
 } from '../action/category_actions';

const initialState = {
    categories: [],
    category: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CATEGORY_LOADING:
            return {
                ...state,
                loading: true
            };
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                loading: false
            };
        case RECEIVE_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false
            };
        // case ADD_CATEGORY:
        //     return {
        //         ...state,
        //         categories: [action.payload, ...state.categories]
        //     };
        case REMOVE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(category => category._id !== action.payload)
            };
        default:
            return state;
    }
}