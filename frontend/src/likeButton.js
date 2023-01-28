import React, { useContext, useEffect, useState } from 'react'
import './likeButton.css'
import axios from "axios";
import { PostData } from './mainSource';
import { instance } from './axiosSrc';

export const LikeButton = ({ id, like },) => {
    const [likes, setLikes] = useState(like);
    const { getData } = useContext(PostData);

    const addLike = async () => {
        setLikes(like + 1);
        const post = await instance.patch(`/post/${id}`, { like: like + 1 });
        getData();
        console.log(likes, like);
    }

    const reduceLike = async () => {
        setLikes(like - 1)
        const post = await instance.patch(`/post/${id}`, { like: like - 1 });
        getData();
        console.log(likes, like);
    }

    return (
        <div className='buttons'>
            <div onClick={addLike} id='icon'>+</div>
            <div id='number'>{likes}</div>
            <div onClick={reduceLike} id='icon'>-</div>
        </div>
    )
}

export default LikeButton;


