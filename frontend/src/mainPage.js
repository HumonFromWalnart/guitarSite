import './signUp.css'
import { PostData } from "./mainSource";
import { useContext, useEffect, useState } from 'react';
import './mainPage.css'
import { useNavigate } from 'react-router';
import LikeButton from './likeButton';
import axios from 'axios';

export const MainPage = (e) => {
    const { postData } = useContext(PostData);
    console.log(postData)

    const navigate = useNavigate();

    const[page, setPage] = useState(0);

    console.log(localStorage.getItem('uid'))
    localStorage.getItem("token");

    const Add = async () => {
        navigate(`/?skip=1&limit=1`)
    }

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
            <div id="page">
                <div id='page' onClick={Add()}>2</div>
                <div id='page' onClick={Add()}>3</div>
                <div id='page' onClick={Add()}>4</div>
                <div id='page' onClick={Add()}>5</div>
            </div>
        </div>
    );
}