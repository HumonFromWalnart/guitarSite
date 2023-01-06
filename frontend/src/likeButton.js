import React, { useEffect, useState } from 'react'
import './likeButton.css'
import axios from "axios";

export const LikeButton = ({ id, like },) => {
    const [likes, setLikes] = useState(like);
    const [condi, setCondi] = useState(true);

    const addLike = async () => {
        setLikes(like)
        if (condi == true) {
            setCondi(false)
        }if (condi == false) {
            alert("you have only 1 option left and that is dislike")
        }
        const post = await axios.patch(`http://localhost:1967/${id}`, { like: like + 1 });
        console.log(likes);
    }

    return (
        <div>
            <button onClick={addLike}>like</button>
            <div>{likes}</div>
        </div >
    )
}

export default LikeButton;


