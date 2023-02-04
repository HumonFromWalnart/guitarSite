import './signUp.css'
import { PostData } from "./mainSource";
import { useContext, useState } from 'react';
import './mainPage.css'
import { useNavigate } from 'react-router';
import LikeButton from './likeButton';
import { instance } from './axiosSrc'
import { Button } from './button';
import { ReverseButton } from './gobackbutton';


export const MainPage = (e) => {

    const navigate = useNavigate();
    const { postData, setSkip, setLimit } = useContext(PostData);
    // const [pageLimit, setPageLimit] = useState(5);
    // const[currentPage, setCurrentPage] = useState();

    localStorage.getItem("token");
    return (
        <div className="container" >
            <div className='firstContainer'>

            </div>
            <div className='secondContainer'>
                {
                    postData?.map((cur) =>
                        <div className="post">
                            <div className='user'>
                                <img id='profilePic' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
                                <div>{cur.creator?.name}</div>
                            </div>
                            <div>{cur.message}</div>
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