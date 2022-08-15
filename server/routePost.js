const express = require('express');
const router = express.Router();
const axios = require('axios');
const { pixabayApi } = require('./config.json');

const hendleApiReq = async (category) => {
    const {data} = await axios.get(`${pixabayApi}&q=${category}`);
    let {hits: posts} = data;
    return posts;
};

const sortArr = (arr) => arr.sort( (a,b) => a.id - b.id );

// hendle with the first call and next
router.get('/', async (req,res) => {
    
    if( !req.query.page && !req.query.q ){
        return res.status(404);
    }

    const page = parseInt(req.query.page); 
    const category = req.query.q;
    let disabledNext = false; // for disabled the btn in the front 

    try{

        let posts = await hendleApiReq(category)
        
        posts = sortArr(posts);
        
        const limter = 9;
        let max = (page + 1) * limter;
        const min = max - 9;
    
        // no more post to send
        if(max >= posts.length){
            
            max = posts.length;
            disabledNext = true;
            posts  = posts.slice(min,max)
            
            return res.send({posts, disabledNext})
        }
        
        posts = posts.slice(min,max);
        
        res.send({posts, disabledNext});

    }catch(err){

        console.log(err);
        res.status(500)

    }
})

// hendle with the prev call
router.get('/prev', async (req,res) => {
    
    if( !req.query.page && !req.query.q || req.query.page < 0 ){
        return res.status(404);
    }

    const page = parseInt(req.query.page); 
    const category = req.query.q;

    try{

        let posts = await hendleApiReq(category)
        
        posts = sortArr(posts);
        
        const limter = 9;
        let max = (page + 1) * limter;
        const min = max - 9;
        
        posts = posts.slice(min,max);
        res.send(posts);

    }catch(err){
        console.log(err);
        res.status(500)
    }
})


module.exports = router;