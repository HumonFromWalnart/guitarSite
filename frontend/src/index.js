import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './mainPage.js';
import Source from './mainSource.js';
import SignUp from './signUp.js'
import LogIn from './logIn.js'
import { CreatePost } from './createPost.js';
import Test from './testParam.js';
import { Profile } from './profile.js';
import { AudioPage } from './audioPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Source>
                <Routes>
                    <Route path={'/posts'} element={<MainPage />} />
                    <Route path={'/'} element={<SignUp />} />
                    <Route path={'/LogIn'} element={<LogIn />} />
                    <Route path={'/createPost'} element={<CreatePost />} />
                    <Route path={'/test'} element={<Test />} />
                    <Route path={'/posts/:id'} element={<Profile />} />
                    <Route path={'/audio'} element={<AudioPage />}></Route>
                    <Route path={'/users/:id'} element={<Profile/>}></Route>
                </Routes>
            </Source>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
