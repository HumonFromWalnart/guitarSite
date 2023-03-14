
import { useEffect, useRef, useState } from "react";
import './signUp.css'
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";
import { instance } from "../src/axiosSrc";

export const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const ref = useRef();
    const pass = useRef();
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const passRespond = [
        'does not match',
        'its not matching',
        'your passwords does not match',
        'they are not matching',
        'do you have dementia?',
        `what's wrong with you`,
    ];
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const createUser = async () => {
        if (rePassword == password) {
            const { data } = await instance.post('/user/create', { name: name, password: password, email: email });
            const user = data.data;
            const token = data.token;
            console.log(user)
            localStorage.setItem("uid", user._id)
            localStorage.setItem("token", token)
            if (user !== undefined) {
                navigate('/posts')
            }
        } else {
            ref.current.type = "text"
            setRePassword(passRespond[getRandomInt(6)])
            console.log("passwords didn't match!")
        }
    }

    useEffect(() => {
        localStorage.setItem('nothing', JSON.stringify(name));
    }, [name])

    return (
        <div className="bigBoiContainer">

            <div className="toLogin">
                <div id="text">Already have an account?</div>
                <div id="navigateLink" onClick={() => navigate('/LogIn')}>Click here</div>
            </div>

            <div className="inputContainer">
                <input
                    placeholder='name'
                    type='text'
                    id='input'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    onClick={() => setName('')}
                />
                <input
                    placeholder='email'
                    type='text'
                    id='input'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    onClick={() => setEmail('')}
                />
                <input
                    placeholder='password'
                    type='password'
                    id='input'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    onClick={() => {
                        setPassword('');
                    }}
                    ref={pass}
                />
                <input
                    placeholder='re-enter password'
                    type='password'
                    id='input'
                    onChange={(e) => setRePassword(e.target.value)}
                    value={rePassword}
                    onClick={() => {
                        setRePassword('');
                        ref.current.type = "password"
                    }}
                    ref={ref}
                />
                <SubmitButton onClick={createUser} />
            </div>
        </div>
    );
}
export default SignUp;

