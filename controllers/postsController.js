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

// update

// modify

// delete