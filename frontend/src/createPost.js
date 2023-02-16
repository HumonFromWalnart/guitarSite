import axios from "axios";
import { useState, useEffect, useContext } from "react";
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";
import { instance } from "./axiosSrc";
import { PostData } from "./mainSource";

export const CreatePost = () => {
    const [message, setMessage] = useState('');
    const { refresh } = useContext(PostData);
    // const [image, setImage] = useState();
    const navigate = useNavigate();
    const userId = localStorage.getItem("uid")

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const convertImage = async () => {
        const file = document.querySelector("#fileInput").files[0];
        const encodedImage = await toBase64(file);
        console.log(encodedImage)
        return encodedImage;
        // setImage(encodedImage)
        // console.log(image)
    }

    const createPost = async () => {
        const image = await convertImage();
        const { data } = await instance.post('/createPost', { message: message, id: userId, image: image });
        const post = data.data;
        if (post !== undefined) {
            await refresh()

            navigate('/posts')
        }

    }
    return (
        <div className="bigBoiContainer">
            <div className="inputContainer">
                <input placeholder="message" type={'text'} id="input" onChange={(e) => setMessage(e.target.value)} value={message}></input>
                <input type={'file'} id="fileInput" accept="image/jpeg, image/jpg, image/gif, image/png"></input>
                <SubmitButton onClick={createPost} />
            </div>n
        </div>
    );
}