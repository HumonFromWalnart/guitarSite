import axios from "axios";
import { useState, useEffect } from "react";
import './signUp.css'
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [user, setUser] = useState();


    const createUser = async () => {
        const { data } = await axios.post('http://localhost:6969/user/Create', { name: name, password: password });
        const user = data.data;
        const token = data.token
        localStorage.setItem('pass', user.password)
        localStorage.setItem('token', token)
        console.log(user)
        if (user !== undefined) {
            navigate('/')
        }
    }

    // const getUser = async () => {
    //     const res = await axios.post("http://localhost:6969/user/create");
    //     console.log(res.data);
    //     setUser(res.data.data);
    //     // localStorage.setItem("User", user)
    //     console.log(user.ticket)
    //     console.log("lol")
    // }

    // useEffect(() =>{
    //     getUser();
    // }, [])


    return (
        <div className="bigBoiContainer">
            <div className="inputContainer">
                <input placeholder="Name" type={'text'} id="input" onChange={(e) => setName(e.target.value)} value={name}></input>
                <input placeholder="Password" type={'text'} id="input" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <SubmitButton onClick={createUser} />
            </div>
        </div>
    );
}
export default SignUp;