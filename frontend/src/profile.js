import axios from "axios";
import { useState, useEffect, useContext } from "react";
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";
import { instance } from "./axiosSrc";
import { PostData } from "./mainSource";

export const Profile = () => {
    const { refresh } = useContext(PostData);
    const navigate = useNavigate();
    const { usersData } = useContext(PostData);

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
    }

    const createPost = async () => {
        const image = await convertImage();
        const { data } = await instance.post('/updateUser/:id', {});
        const user = data.data;
        if (user !== undefined) {
            await refresh()
            navigate('/posts')
        }

    }
    return (
        <div className="bigBoiContainer">
            <div className="inputContainer">
                <input type={'file'} id="fileInput" accept="image/jpeg, image/jpg, image/gif, image/png"></input>
                <SubmitButton onClick={createPost} />
            </div>n
        </div>
    );
}