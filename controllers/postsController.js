const express = require('express');

// import array data
const posts = require('../data/posts.js');
const { error } = require('console');

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
    // need to find first available id
    let id = 1;
    while(posts.find(element => element.id === id)){
        id++;
    }
    // create new post
    const post = {
        id: id,
        title: req.query.title,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: '/placeholder.png',
        tags: ['placeholder']
    };

    // add the new post to the array
    posts.push(post);

    // sort the array by id
    posts.sort((a, b) => a.id - b.id);

    // print in console the updated array
    console.log(posts);
    // return the new post
    // status code 201: Created
    res.status(201).json({
        success: true,
        data: post
    });
};

// update
const update = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Post con id ${id} aggiornato`);
};

// modify
const modify = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Post con id ${id} modificato`);
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