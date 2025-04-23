// import array data
const posts = require('../data/posts.js');

// controller functions
// index
const index = (req, res) => {
    // if query is passed in the request, return the post with that id
    const id = parseInt(req.query.id);
    if(id){
        const post = posts.find(element => element.id === id);

        // if post is not found, return 404 error
        if(!post){
            res.status(404).json({
                success: false,
                error: '404 Not Found',
                message: `Post with id ${id} not found`
            });
        }
        else{
            res.json({
                success: true,
                data: post
            });
        }
    }
    else{
        res.json({
            success: true,
            data: posts
        });
    }
};

// show
const show = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(element => element.id === id);

    // if post is not found, return 404 error
    if(!post){
        res.status(404).json({
            success: false,
            error: '404 Not Found',
            message: `Post with id ${id} not found`
        });
    }
    else{
        res.json({
            success: true,
            data: post
        });
    }
};

// store
const store = (req, res) => {
    // create new id
    const id = posts[posts.length - 1].id + 1;

    // destructure request body
    const { title, content, image, tags } = req.body;
    // create new post
    const newPost = {
        id,
        title,
        content,
        image,
        tags
    };

    // add new post to the existing posts array
    posts.push(newPost);

    // print in console the updated array
    console.log(posts);
    res.status(201).json({
        success: true,
        data: newPost
    });
};

// update
const update = (req, res) => {
    // getting id of the post to be updated
    const id = parseInt(req.params.id);

    // find the element with the id
    const post = posts.find(element => element.id === id);

    // if post is not found, return 404 error
    if(!post){
        return res.status(404).json({
            success: false,
            error: '404 Not Found',
            message: `Post with id ${id} not found`
        });
    }

    // destructure request body
    const { title, content, image, tags } = req.body;

    // updating the post
    post.title = title;
    post.content = content;
    post.image = image;
    post.tags = tags;

    // print in console the updated array
    console.log(posts);
    res.status(200).json({
        success: true,
        data: post
    });
};

// modify
const modify = (req, res) => {
    // getting id of the post to be updated
    const id = parseInt(req.params.id);

    // find the element with the id
    const post = posts.find(element => element.id === id);

    // if post is not found, return 404 error
    if(!post){
        return res.status(404).json({
            success: false,
            error: '404 Not Found',
            message: `Post with id ${id} not found`
        });
    }

    // destructure request body
    const { title, content, image, tags } = req.body;

    // updating the posto if the value is not undefined
    if(title) post.title = title;
    if(content) post.content = content;
    if(image) post.image = image;
    if(tags) post.tags = tags;

    // print in console the updated array
    console.log(posts);
    res.status(200).json({
        success: true,
        data: post
    });
};

// delete
const destroy = (req, res) => {
    const id = parseInt(req.params.id);

    // find the element with the id
    const post = posts.find(element => element.id === id);

    // if post is not found, return 404 error
    if(!post){
        res.status(404).json({
            success: false,
            error: '404 Not Found',
            message: `Post with id ${id} not found`
        });
    }
    else{
        // remove the element from the array
        const index = posts.indexOf(post);
        posts.splice(index, 1);
        
        // print in console the updated array
        console.log(posts);

        res.sendStatus(204);
    }

};

// export the controller functions
module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};