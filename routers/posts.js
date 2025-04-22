const express = require('express');

// router class
const router = express.Router();

// controller functions
const postsController = require('../controllers/postsController.js');

// get all posts
router.get('/', postsController.index);
// get post by id
router.get('/:id', postsController.show);

// create a new post
router.post('/', postsController.store);

// update post by id
router.put('/:id', postsController.update);

// modify post by id
router.patch('/:id', postsController.modify);

// delete post by id
router.delete('/:id', postsController.destroy);

// export the router
module.exports = router;
