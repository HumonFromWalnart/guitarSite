import './signUp.css'
import { PostData } from "./mainSource";
import { useContext, useState } from 'react';
import './mainPage.css'
import { useNavigate } from 'react-router';
import LikeButton from './likeButton';
import { instance } from './axiosSrc'


export const MainPage = (e) => {
    
        <link rel="icon" href="/images/favicon.ico" />
    
    const navigate = useNavigate();
    const { postData } = useContext(PostData);
    console.log(postData)
    // console.log(localStorage.getItem('uid'))
    localStorage.getItem("token");
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(2);

    const navi = async () => {
        setSkip(skip + 1);
        console.log(skip, limit);
        navigate(`?skip=${skip}&limit=${limit}`)
        const page = await instance.get(`/posts`, { skip: skip, limit: limit });
        console.log(page)
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
            <button onClick={navi}>1</button>

        </div>
    );
}