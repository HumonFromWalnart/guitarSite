import axios from "axios";
import { useState, useEffect } from "react";
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";
import { instance } from "./axiosSrc";

export const CreatePost = () => {
    const [message, setTitle] = useState('');
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');
    const [like, setLike] = useState(0);
    const navigate = useNavigate();
    const userId = localStorage.getItem("uid")

    const createPost = async () => {
        console.log(userId)
        const { data } = await instance.post('/post', { message: message, id: userId });
        const post = data.data;
        if (post !== undefined) {
            navigate('/createPost')
        }
    }

    return (
        <div className="bigBoiContainer">
            <div className="inputContainer">
                <input placeholder="message" type={'text'} id="input" onChange={(e) => setTitle(e.target.value)} value={message}></input>
                <SubmitButton onClick={createPost} />
            </div>
        </div>
    );
}