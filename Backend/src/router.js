import express from "express";
import createUser from "./controller.js";
import getUsers from './getUsers.js'
import getUser from "./getUser.js";
import updateUser from "./updateUser.js";
import deleteUser from "./deleteUser.js";
import getUserByUsername from "./getUserByUsername.js";
import loginUser from "./loginUser.js";
import createPost from "./postController.js";
import getPost from "./getPost.js";
import updatePost from "./updatePost.js";
import deletePost from "./deletePost.js";
import getPosts from "./getPosts.js";

const entry = express.Router();

const lemmeSeeYourTicket = (req, res, next) => {

    if (req.body.ticket) {
        next();
    } else {
        res.status(403).send("no ticket no entry ma boi")
    }

}

// entry.get('/user/:name', getUserByUsername)
entry.post('/user/create', createUser)
entry.post('/user/login', lemmeSeeYourTicket, loginUser)
entry.get('/users', getUsers)
entry.get('/user/:id', getUser)
entry.patch('/user/:id', updateUser)
entry.delete('/user/:id', deleteUser)
entry.post('/post', createPost)
entry.get('/post/:id', getPost)
entry.patch('/post/:id', updatePost)
entry.delete('/post/:id', deletePost)
entry.get('/posts', getPosts)

export default entry;