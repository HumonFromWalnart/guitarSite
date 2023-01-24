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
import jwt from 'jsonwebtoken'

const lemmeSeeYourTicket = (req, res, next) => {

    if (req.headers.token) {
        console.log(req.headers.token)
        jwt.verify(req.headers.token, process.env.JWT_SECRET || "password", (err, result) => {
            console.log(err)
            if (err) res.status(400).send("no ticket no entry ma boi")
            else next();
        })
    } else {
        res.status(403).send("no ticket no entry ma boi")
    }

}
const entry = express.Router();

// entry.get('/user/:name', getUserByUsername)
entry.post('/user/create', createUser)
entry.post('/user/login', loginUser)
entry.get('/users', lemmeSeeYourTicket, getUsers)
entry.get('/user/:id', lemmeSeeYourTicket, getUser)
entry.patch('/user/:id', lemmeSeeYourTicket, updateUser)
entry.delete('/user/:id', lemmeSeeYourTicket, deleteUser)
entry.post('/post', lemmeSeeYourTicket, createPost)
entry.get('/post/:id', lemmeSeeYourTicket, getPost)
entry.patch('/post/:id', lemmeSeeYourTicket, updatePost)
entry.delete('/post/:id', lemmeSeeYourTicket, deletePost)
entry.get(`/posts:skip`, lemmeSeeYourTicket, getPosts)

export default entry;