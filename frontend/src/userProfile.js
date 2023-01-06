import { useContext, useState } from "react";
import { UserData } from "./mainSource";
import './userProfile.css'

export const UserProfile = () => {

    const { data } = useContext(UserData);

    return (

        <div className="BigBoiContainer">
            {
                data.map((cur) => {
                    return (
                        <div className="BigContainer">
                            <div className="inventory">
                                <img src={cur.weapons?.primary} id="weaponMain"></img>
                                {/* <p>Shotgun</p> */}
                                <div className="secondHand">
                                    <div id="Secondary">
                                        r        <img src={cur.weapons?.secondary} id="weapon"></img>
                                        {/* <p>Pistol</p> */}
                                    </div>
                                    <div id="Melee">
                                        <img src={cur.weapons?.melee} id="weapon"></img>
                                        {/* <p>Wrench</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="tape">
                                <a href={cur.email} id='link'>More about me</a>
                            </div>
                            <div className="fullName">
                                <div id="firstName">{cur.firstName}</div>
                                <div id="lastName">{cur.lastName}</div>
                            </div>
                            <img src={cur.picture} id="picture"></img>
                            <div>{cur.line}</div>
                        </div>
                    );
                })
            }
        </div>
    );
}