import { PostData } from "./mainSource";
import { useContext, useState } from 'react';
import './mainPage.css'
import { useNavigate } from 'react-router';
import LikeButton from './likeButton';
import { instance } from './axiosSrc'
import { Button } from './button';
import { ReverseButton } from './gobackbutton';
import { Delete } from "./delete";
export const MainPage = (e) => {

    const navigate = useNavigate();
    const { postData, setSkip, setLimit } = useContext(PostData);
    localStorage.getItem("token");

    // {
    //     postData.map((cur) => {
    //         console.log(cur.image)
    //     })
    // }
    
    return (
        <div className="container" >
            <div className='firstContainer'>

            </div>
            <div className='secondContainer'>
                <button onClick={() => navigate('/createPost')}>post comment</button>
                {
                    postData?.map((cur) =>
                        <div className="post">
                            <div className='user'>
                                <img id='profilePic' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
                                <div id='userName'>{cur.creator?.name}</div>
                            </div>
                            <img src={cur.image}></img>
                            <div>{cur.message}</div>
                            {/* <Delete onClick={()=> {localStorage.setItem("postId", cur._id)}}/> */}
                            <Delete postId={cur._id} />
                        </div>)
                }
                <div className='buttons'>
                    <ReverseButton />
                    <Button />
                </div>
            </div>
            <div className='thirdContainer'>
                <button id='logOut' onClick={() => navigate('/logIn')}>log out</button>
            </div>
        </div>
    );
}