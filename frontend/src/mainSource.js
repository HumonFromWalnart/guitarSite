import axios from 'axios'
import React, { createContext, useEffect, useState } from "react";
import { instance } from './axiosSrc';

export const PostData = createContext();

const Source = ({ children }) => {
  const [postData, setPostData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  

  useEffect(() => {
    const postData = async () => {
      const res = await instance.get("posts");
      console.log(res.data);
      setPostData(res.data.data);
      const use = await instance.get("users");
      console.log(use.data);
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
