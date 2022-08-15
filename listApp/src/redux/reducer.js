import { FETCH_POSTS, NEXT_POSTS, PREV_POSTS, CHANGE_CATEGORY } from "./type";

const initialState = {
    posts: [],
    page: 0,
    nextBtnDisabled: false,
    category: 'all',
}


const reducer = (state = initialState, action) => {

    // console.log(action.payload.disabledNext);
    switch (action.type) {

        case FETCH_POSTS:
            return {
                ...state,
                nextBtnDisabled: action.payload.disabledNext,
                posts: action.payload.posts
            }
        
        case NEXT_POSTS:
            return {
                ...state,
                nextBtnDisabled: action.payload.disabledNext,
                posts: action.payload.posts,
                page: action.payload.page + 1
            }
        
        case PREV_POSTS:
            return {
                ...state,
                nextBtnDisabled: false,
                posts: action.payload.posts,
                page: action.payload.page - 1
            }
        case CHANGE_CATEGORY:
            return {
                ...state,
                nextBtnDisabled: action.payload.disabledNext,
                posts: action.payload.posts,
                category: action.payload.selectedCategory,
                page: 0
            }
            
        default:
            return state;
    }
}

export default reducer;