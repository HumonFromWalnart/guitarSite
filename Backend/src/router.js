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

const router = express.Router()

router.get('/user/:firstName', getUserByUsername)
router.post('/user', createUser)
router.post('/user/login', loginUser)
router.get('/user', getUsers)
router.get('/user/:id', getUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)
router.post('/post', createPost)
router.get('/getPost', getPost)
router.patch('/:id', updatePost)
router.delete('/deletePost', deletePost)
router.get('/getPosts', getPosts)

export default router;