import axios from "axios";
import { useEffect, useState } from "react";
import './signUp.css'
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
    const [guitarist, setGuitarist] = useState('');
    const [guitar, setGuitar] = useState('');
    const navigate = useNavigate();

    const createUser = async () => {
        const { data } = await axios.post('http://localhost:1967/login', { name: guitar, password: guitarist });
        const user = data.data;
        localStorage.setItem('uid', user._id)

        if (user !== undefined) {
            navigate('/')
        }
    }


    // const item = localStorage.getItem('guitarist', JSON.stringify(guitarist));

    useEffect(() => {
        localStorage.setItem('nothing', JSON.stringify(guitarist));
    }, [guitarist])


    return (
        <div className="bigBoiContainer">
            <div className="inputContainer">
                <input placeholder="Guitar" type={'text'} id="input" onChange={(e) => setGuitar(e.target.value)} value={guitar}></input>
                <input placeholder="Guitarist Name, password" type={'text'} id="input" onChange={(e) => setGuitarist(e.target.value)} value={guitarist}></input>
            </div>
            <div>
                <SubmitButton onClick={createUser} />
            </div>

            {/* {
                  lockerKey == "wrong" && 
                <div className="YOUTHIEF">
                    <div className="YOUBLOODYTHIEF">YOU BLOODY THEIF</div>
                </div>

            } */}
        </div>
    );
}
export default LogIn;