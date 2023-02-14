import axios from "axios";
import { useState, useEffect, useContext } from "react";
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";
import { instance } from "./axiosSrc";
import { PostData } from "./mainSource";

export const CreatePost = () => {
    const [message, setTitle] = useState('');
    const { refresh } = useContext(PostData);
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');
    const [like, setLike] = useState(0);
    const navigate = useNavigate();
    const userId = localStorage.getItem("uid")

    const createPost = async () => {
        console.log(userId)
        const { data } = await instance.post('/createPost', { message: message, id: userId });
        const post = data.data;
        if (post !== undefined) {
            await refresh()

            navigate('/posts')
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