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
    res.send(`Creazione nuovo post`);
});

// update post by id
router.put('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Post con id ${postId} aggiornato`);
});

// modify post by id
router.patch('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Post con id ${postId} modificato`);
});

// delete post by id
router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Post con id ${postId} eliminato`);
});

// export the router
module.exports = router;
