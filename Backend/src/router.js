const express = require("express");
const createUser = require("./controller.js");
const getUsers = require('./getUsers.js');
const getUser = require("./getUser.js");
const updateUser = require("./updateUser.js");
const deleteUser = require("./deleteUser.js");
const getUserByUsername = require("./getUserByUsername.js");
const loginUser = require("./loginUser.js");
const createPost = require("./postController.js");
const getPost = require("./getPost.js");
const updatePost = require("./updatePost.js");
const deletePost = require("./deletePost.js");
const getPosts = require("./getPosts.js");
const jwt = require('jsonwebtoken')

const middleware = (req, res, next) => {
    console.log(req.body)
    if (req.headers.token) {
        jwt.verify(req.headers.token, process.env.JWT_SECRET || "password", (err, result) => {
            if (err) res.status(400).send("no ticket no entry ma boi")
            else next();
        })
    } else {
        res.status(403).send("no ticket no entry ma boi")
    }

}
const entry = express.Router();

entry.get('/', (req, res) => {
    res.json({ module: "is your mother" })
})

entry.post('/user/create', createUser)
entry.post('/user/login', loginUser)
entry.get('/users', middleware, getUsers)
entry.get('/user/:id', middleware, getUser)
entry.patch('/updateUser/:id', middleware, updateUser)
entry.delete('/deleteUser/:id', middleware, deleteUser)
entry.post('/createPost', middleware, createPost)
entry.get('/post/:id', middleware, getPost)
entry.patch('/updatePost/:id', middleware, updatePost)
entry.delete('/deletePost/:id', middleware, deletePost)
entry.get(`/posts`, middleware, getPosts)

module.exports = entry;