
import { useEffect, useState } from "react";
import './signUp.css'
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";
import { instance } from "../src/axiosSrc";

export const LogIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const createUser = async () => {
        const { data } = await instance.post('/user/login', { name: name, password: password, email: email });
        const user = data.data;
        const token = data.token;
        console.log(user)
        localStorage.setItem("uid", user._id)
        localStorage.setItem("token", token)
        if (user !== undefined) {
            navigate('/posts')
        }
    }

    useEffect(() => {
        localStorage.setItem('nothing', JSON.stringify(name));
    }, [name])

    return (
        <div className="bigBoiContainer">
            <div className="signUp">
                <div id="text">no account?</div>
                <div id='toSignUp' onClick={() => navigate('/')}>click here</div>
            </div>
            <div className="inputContainer">
                <input placeholder="Name" type={'text'} id="input" onChange={(e) => setName(e.target.value)} value={name}></input>
                <input placeholder="Email" type={'email'} id="input" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <input placeholder="Password" type={'password'} id="input" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            </div>
            <div>
                <SubmitButton onClick={createUser} />
            </div>
        </div>
    );
}
export default LogIn;