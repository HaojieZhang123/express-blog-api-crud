const express = require('express');

// router class
const router = express.Router();


// get all posts
router.get('/', (req, res) => {
    res.json(posts);
});

// get post by id
router.get('/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts.find(p => p.id == postId);
    if (!post) {
        res.send('Post non trovato');
    }
    else{
        res.json(post);
    }
});

// create a new post
router.post('/', (req, res) => {

});

// update post by id
router.put('/:id', (req, res) => {

});

// modify post by id
router.patch('/:id', (req, res) => {

});

// delete post by id
router.delete('/:id', (req, res) => {

});

// export the router
module.exports = router;
