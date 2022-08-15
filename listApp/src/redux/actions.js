import { FETCH_POSTS, NEXT_POSTS, PREV_POSTS, CHANGE_CATEGORY } from "./type";
import { serverUrl } from "../config.json";


export const fetchPosts = () => dispatch => {
    
    fetch(serverUrl+'?q=all&page=0')
    .then(res => res.json())
    .then(({ posts ,disabledNext }) => dispatch({
        type: FETCH_POSTS,
        payload: {posts, disabledNext}
    }))
    .catch(err =>{
        alert('server error')
        console.log('actions.js:',err);
    })

};

export const nextPosts = (posts, page, disabledNext ) => {
    return {
        type: NEXT_POSTS,
        payload: {posts, page, disabledNext }
    }
};

export const prevPosts = (posts, page) => {
    return {
        type: PREV_POSTS,
        payload: {posts , page}
    }
};

export const changeCategory = ({posts, selectedCategory, disabledNext}) => {
    return {
        type: CHANGE_CATEGORY,
        payload: {posts, selectedCategory ,disabledNext}
    }
};