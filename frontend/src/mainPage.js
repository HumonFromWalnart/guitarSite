import './signUp.css'
import { PostData } from "./mainSource";
import { useContext, useEffect, useState } from 'react';
import './mainPage.css'
import { useNavigate } from 'react-router';
import LikeButton from './likeButton';
import axios from 'axios';

export const MainPage = (e) => {
    const { postData } = useContext(PostData);
    const navigate = useNavigate();
    console.log(localStorage.getItem('uid'))
    localStorage.getItem("token");
    console.log(postData)

    return (
        <div className="container" >
            {
                postData.map((cur) =>
                    <div className="guitarContainer">
                        <img src={cur.picture} id="picture"></img>
                        <p>{cur.name}</p>
                        <p>{cur.description}</p>
                        <LikeButton id={cur._id} like={cur.like} />
                    </div>)
            }
        </div>
    );
}