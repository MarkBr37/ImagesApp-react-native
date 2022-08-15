
import { createStore ,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 

import reducer from './reducer';
import { fetchPosts } from './actions';


const store = createStore( reducer,applyMiddleware(thunk) )

// store.subscribe(()=>{
//     console.log(store.getState().page);
// })

store.dispatch(fetchPosts())

export default store;