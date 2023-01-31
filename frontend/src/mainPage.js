import './signUp.css'
import { PostData } from "./mainSource";
import { useContext, useState } from 'react';
import './mainPage.css'
import { useNavigate } from 'react-router';
import LikeButton from './likeButton';
import { instance } from './axiosSrc'
import { Button } from './button';


export const MainPage = (e) => {

    const navigate = useNavigate();
    const { postData, setSkip, setLimit } = useContext(PostData);
    localStorage.getItem("token");

    return (
        <div className="container" >
            {
                postData?.map((cur) =>
                    <div className="guitarContainer">
                        <img src={cur.picture} id="picture"></img>
                        <p>{cur.name}</p>
                        <p>{cur.description}</p>
                        <LikeButton id={cur._id} like={cur.like} />
                    </div>)
            }
          <Button/>
        </div>
    );
}