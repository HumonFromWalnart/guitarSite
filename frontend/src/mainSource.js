import axios from 'axios'
import React, { createContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { instance } from './axiosSrc';

export const PostData = createContext();


const Source = ({ children }) => {
  const [postData, setPostData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    console.log(skip, limit)
    const postData = async () => {
      const res = await instance.get(`/posts?skip=${skip}&limit=${limit}`);
      console.log(res)
      setPostData(res.data.data);
      const use = await instance.get("/users");
      setUsersData(use.data.data);
    }
    postData();
  }, [skip]);

  return (
    <PostData.Provider value={{ postData, usersData, skip, setSkip, setLimit }}>
      {children}
    </PostData.Provider>
  );

}

export default Source;
