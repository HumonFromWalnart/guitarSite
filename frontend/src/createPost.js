import axios from "axios";
import { useState, useEffect } from "react";
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";
import { instance } from "./axiosSrc";

export const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');
    const [like, setLike] = useState(0);
    const navigate = useNavigate();
    const userId = localStorage.getItem("uid")

    const createPost = async () => {
        const { data } = await instance.post('/post', { title: title, file: file, description: description, like: like, id : userId });
        const post = data.data;
        if (post !== undefined) {
            navigate('/createPost')
        }
    }

    return (
        <div className="bigBoiContainer">
            <div className="inputContainer">
                <input placeholder="Title" type={'text'} id="input" onChange={(e) => setTitle(e.target.value)} value={title}></input>
                <input placeholder="Upload files here" type={'file'} id="input" onChange={(e) => setFile(e.target.value)} value={file}></input>
                <input placeholder="Description" type={'text'} id="input" onChange={(e) => setDescription(e.target.value)} value={description}></input>
                <SubmitButton onClick={createPost} />
            </div>
        </div>
    );
}