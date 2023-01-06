import axios from 'axios'
import React, { createContext, useEffect, useState } from "react";

export const PostData = createContext();

const Source = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:1967/getPosts");
    console.log(res.data);
    setData(res.data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <PostData.Provider value={{ data }}>
      {children}
    </PostData.Provider>
  );

}

export default Source;
