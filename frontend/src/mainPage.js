import { PostData } from "./mainSource";
import { useContext, useState } from 'react';
import './mainPage.css'
import { useNavigate } from 'react-router';
import { Button } from './button';
import { ReverseButton } from './gobackbutton';
import { Delete } from "./delete";
import { Dot } from "./dot";

export const MainPage = (e) => {

    const navigate = useNavigate();
    const { postData, setSkip, setLimit } = useContext(PostData)
    const userId = localStorage.getItem("uid");
    return (
        <div className="container" >

            <div className="header">
                <button onClick={() => navigate('/createPost')}>post something this site is dead</button>
                <button id='logOut' onClick={() => navigate('/logIn')}>log out</button>
                <button onClick={() => navigate('/audio')}>audios</button>
            </div>

            <div className="postContainer">
                <div className='secondContainer'>

                    {
                        postData?.map((cur) =>
                            <div className="post">
                                <div className="postTop">
                                    <div className='user' onClick={() => { navigate(`./${userId}`) }}>
                                        <img id='profilePic' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
                                        <div id='userName'>{cur.creator?.name}</div>
                                    </div>
                                    <div>
                                        <Dot />
                                    </div>
                                </div>
                                <img src={cur.image} id="postImg"></img>
                                <div>{cur.message}</div>
                                <Delete postId={cur._id} />
                            </div>)
                    }

                </div>
            </div>

            <div className='footer'>
                <ReverseButton />
                <Button />
            </div>
        </div>
    );
}


{/* <source src={getUrl(audio)} type="audio/mpeg"> */ }

    // const [audio, setAudio] = useState({ buffer: null });

    // const file = new File(this.audio.buffer, bruh, {
    //     type: this.audio.blob.type
    // });

    // data.append("audio", file);