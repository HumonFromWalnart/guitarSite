import axios from "axios";
import { useState } from "react";
import './signUp.css'
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const createUser = async () => {
        const { data } = await axios.post('http://localhost:6969/user/Create', { name: name, password: password });
        const user = data.data;
        localStorage.setItem('pass', user.password)
        console.log(user)
        if (user !== undefined) {
            navigate('/')
        }
    }

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