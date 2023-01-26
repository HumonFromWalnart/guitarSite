import axios from 'axios'
import React, { createContext, useEffect, useState } from "react";
import { instance } from './axiosSrc';

export const PostData = createContext();

const Source = ({ children }) => {
  const [postData, setPostData] = useState([]);
  const [usersData, setUsersData] = useState([]);


  useEffect(() => {
    const postData = async () => {
      const res = await instance.get("/posts");
      setPostData(res.data.data);
      const use = await instance.get("users");
      setUsersData(use.data.data);
    }
    postData();
  }, []);

  return (
    <PostData.Provider value={{ postData, usersData }}>
      {children}
    </PostData.Provider>
  );

}

export default Source;
