import axios from "axios";
import { useState } from "react";
import './signUp.css'
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [guitarist, setGuitarist] = useState('');
    const [guitar, setGuitar] = useState('');
    const navigate = useNavigate();

    const createUser = async () => {
        const user = await axios.post('http://localhost:1967', { name: guitar, password: guitarist });
        console.log(user)
        if (user !== undefined) {
            navigate('/LoadingScreen')
        }
    }

    return (
        <div className="bigBoiContainer">
            <div className="inputContainer">
            </div>
            <div>
                <input placeholder="Guitar" type={'text'} id="input" onChange={(e) => setGuitar(e.target.value)} value={guitar}></input>
                <input placeholder="Guitarist Name" type={'text'} id="input" onChange={(e) => setGuitarist(e.target.value)} value={guitarist}></input>
                <SubmitButton onClick={createUser} />
            </div>
        </div>
    );
}
export default SignUp;
{/* {
                data.map((cur) => {
                    return (
                        <div className="BigContainer">
                            <div className="fullName">
                                <div id="firstName">{cur.firstName}</div>
                                <div id="lastName">{cur.lastName}</div>
                            </div>
                            <img src={cur.picture} id="picture"></img>
                            <div>{cur.line}</div>
                            <a href={cur.email}>More about me</a>
                        </div>
                    );
                })
            } */}