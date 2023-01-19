import axios from "axios";
import { useState, useEffect } from "react";
import './signUp.css'
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const createUser = async () => {
        const { data } = await axios.post('http://localhost:6969/user/Create', { name: name, password: password, role : role, email : email });
        const user = data.data;
        const token = data.token
        localStorage.setItem('pass', user.password)
        localStorage.setItem('token', token)
        console.log(user)
        if (user !== undefined) {
            navigate('/createPost')
        }
    }

    return (
        <div className="bigBoiContainer">
            <div className="inputContainer">
                <input placeholder="Name" type={'text'} id="input" onChange={(e) => setName(e.target.value)} value={name}></input>
                <input placeholder="Role" type={'text'} id="input" onChange={(e) => setRole(e.target.value)} value={role}></input>
                <input placeholder="email" type={'email'} id="input" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <input placeholder="Password" type={'text'} id="input" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <SubmitButton onClick={createUser} />
            </div>
        </div>
    );
}
export default SignUp;