import axios from "axios";
import { useEffect, useState } from "react";
import './signUp.css'
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const createUser = async () => {
        const { data } = await axios.post('http://localhost:6969/user/login', { name: name, password: password });
        const user = data.data;
        const token = data.token
        console.log(token)
        localStorage.setItem('uid', user._id)
        localStorage.setItem("token", token)

        if (user !== undefined) {
            navigate('/')
        }
    }

    useEffect(() => {
        localStorage.setItem('nothing', JSON.stringify(name));
    }, [name])


    return (
        <div className="bigBoiContainer">
            <div className="inputContainer">
                <input placeholder="Name" type={'text'} id="input" onChange={(e) => setName(e.target.value)} value={name}></input>
                <input placeholder="Password" type={'password'} id="input" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            </div>
            <div>
                <SubmitButton onClick={createUser} />
            </div>
        </div>
    );
}
export default LogIn;