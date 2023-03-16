import axios from "axios";
import { useState, useEffect, useContext } from "react";
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";
import { instance } from "./axiosSrc";
import { PostData } from "./mainSource";

export const Profile = () => {
    const [data, setData] = useState([]);
    const userId = localStorage.getItem("uid");

    const getPostData = async () => {
        const res = await instance.get(`/user/${userId}`);
        console.log(res);
        setData(res.data.data);
        console.log(data)
    }

    useEffect(() => {
        getPostData();
    }, []);


    // return (
    //     <div>
    //         {
    //             data.products?.map((cur) =>
    //                 <div>
    //                     <div>{cur.name}</div>
    //                 </div>
    //             )
    //         }
    //     </div>
    // );
}