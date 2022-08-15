import {serverUrl} from '../config.json';

export const fetchNextPage = (page, category, cb) => {

    fetch(`${serverUrl}?q=${category}&page=${page + 1}`)
        .then(res => res.json())
        .then(({ posts, disabledNext }) => cb(posts, page, disabledNext))
        .catch(err =>{
            console.log(err);
            alert('server error')
        })

}

export const fetchPrevPage = (page, category, cb) => {

    fetch(`${serverUrl}/prev?q=${category}&page=${page - 1}`)
        .then(res => res.json())
        .then(( posts ) => cb(posts, page))
        .catch(err =>{
            console.log(err);
            alert('server error')
        })

}

export const fetchCategory = (selectedCategory, cb) => {

    fetch(`${serverUrl}?q=${selectedCategory}&page=${0}`)
        .then(res => res.json())
        .then(( {posts, disabledNext} ) => cb({posts, selectedCategory, disabledNext}))
        .catch(err =>{
            console.log(err);
            alert('server error')
        })

}