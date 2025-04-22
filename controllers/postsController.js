const express = require('express');

// import array data
const posts = require('../data/posts.js');
const { error } = require('console');

// controller functions

// index
const index = (req, res) => {
    // if query is passed in the request, return the post with that id
    const tag = parseInt(req.query.tag);
    if(tag){
        const post = posts.find(element => element.tag === tag);

        // if post is not found, return 404 error
        if(!post){
            res.status(404).json({
                success: false,
                error: '404 Not Found',
                message: `Post with id ${tag} not found`
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
    res.send(`Creazione nuovo post`);
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