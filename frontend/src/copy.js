


import { useEffect, useRef, useState } from "react";
import './signUp.css'
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";
import { instance } from "../src/axiosSrc";
import { Input } from "./input";

export const SignUp = () => {
    const [input, setInput] = useState({})
    const fields = ['name', 'password', 'rePassword', 'email']
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



    function handleChange(e) {
        const value = e.target.value;
        setInput({
            ...input,
            [e.target.name]: value
        });
    }

    const createUser = async () => {
        console.log(input)
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
            pass.current.type = "text"
            setTimeout(() => {
                ref.current.type = "password"
                pass.current.type = "password"
            }, 1000);
            setPassword(passRespond[getRandomInt(6)])
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
                {
                    fields.map((field) => <Input value={input[field]} onChange={handleChange} placeholder={field} name={field} />)
                }
                {/* <Input
                    type={ }
                    value={value}
                    style={{ borderColor }}
                    onClick={onClick}
                    onChange={onChange}
                    placeholder={placeholder} />
                <Input />
                <Input />
                <Input /> */}
                <SubmitButton onClick={createUser} />
            </div>
        </div>
    );
}



export default SignUp;