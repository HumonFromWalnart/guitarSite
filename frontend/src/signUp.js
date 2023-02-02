
import { useEffect, useState } from "react";
import './signUp.css'
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";
import { instance } from "../src/axiosSrc";

export const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const createUser = async () => {
        const { data } = await instance.post('/user/create', { name: name, password: password, email: email, role: role });
        const user = data.data;
        const token = data.token;
        console.log(user)
        localStorage.setItem("uid", user._id)
        localStorage.setItem("token", token)
        if (user !== undefined) {
            navigate('/createPost')
        }
    }

    useEffect(() => {
        localStorage.setItem('nothing', JSON.stringify(name));
    }, [name])

    return (
        <div className="bigBoiContainer">
            <div className="inputContainer">
                <input placeholder="Name" type={'text'} id="input" onChange={(e) => setName(e.target.value)} value={name}></input>
                <input placeholder="Email" type={'text'} id="input" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <input placeholder="Role" type={'text'} id="input" onChange={(e) => setRole(e.target.value)} value={role}></input>
                <input placeholder="Password" type={'text'} id="input" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            </div>
            <div>
                <SubmitButton onClick={createUser} />
            </div>
        </div>
    );
}
export default SignUp;