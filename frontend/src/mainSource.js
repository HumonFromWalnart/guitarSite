import React, { createContext, useEffect, useState } from "react";
import { instance } from './axiosSrc';

export const PostData = createContext();


const Source = ({ children }) => {
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);

  const getPostData = async () => {
    const res = await instance.get(`/posts?skip=${skip}&limit=${limit}`);
    console.log(res)
    setPostData(res.data.data);
    const user = await instance.get("/users");
    setUserData(user.data.data);
  }

  useEffect(() => {
    console.log(skip, limit)
    getPostData();
  }, [skip]);

  return (
    <PostData.Provider value={{ postData, userData, skip, setSkip, setLimit, refresh: getPostData }}>
      {children}
    </PostData.Provider>
  );

}

export default Source;
