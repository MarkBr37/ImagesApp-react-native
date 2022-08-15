import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { nextPosts, prevPosts, changeCategory } from '../redux/actions';
import { connect } from "react-redux";

import Buttons from './buttons';
import CategoryBtn from './categoryBtn'
import Post from './post';
import {fetchNextPage,fetchPrevPage,fetchCategory} from '../utils/fetch';

const styles = StyleSheet.create({
    container:{
        marginTop: 60,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
  
});

const Main = (props) => {

    const { posts, page, nextBtnDisabled, category } = props;


    const handleNextPage = () => fetchNextPage(page, category, props.nextPosts)

    const handlePrevPage = () => fetchPrevPage(page, category, props.prevPosts)
        
    const changeCategory = (selectedCategory) => fetchCategory(selectedCategory, props.changeCategory)
   

    return(

        <View>

            <CategoryBtn changeCategory={changeCategory} />
            <Buttons fun={{handlePrevPage, handleNextPage}} page={page} nextBtnDisabled={nextBtnDisabled} />
            
            <FlatList style={styles.container} 
                numColumns={3}
                data={posts}
                renderItem={(post)=> <Post post={post} />}
                keyExtractor={post => post.id}
            />

        </View>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        page: state.page,
        nextBtnDisabled: state.nextBtnDisabled,
        category: state.category,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextPosts: ( posts, page, disabledNext ) => dispatch( nextPosts( posts, page, disabledNext )),
        prevPosts: ( posts, page ) => dispatch( prevPosts( posts, page )),
        changeCategory: ( {posts, selectedCategory, disabledNext} ) => dispatch( changeCategory( {posts, selectedCategory, disabledNext} ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);