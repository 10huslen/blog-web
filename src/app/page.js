"use client"
import { useRouter } from "next/navigation";
import Blog from "../app/components/blog"
import { useEffect, useState } from "react";
const Page = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const createPost = () => {
    router.push(`/createPost`);
  }
  const dataFetch= async () => {
    const JsonData = await fetch ("https://dev.to/api/articles")
    const fetchData = await JsonData.json()
    setData(fetchData);
  };
  useEffect(() => {
    dataFetch()
  }, [])
  return (
    <div>
      <button onClick={createPost} className="createPST">Create post</button>
    <div className="container">
      {data?.map((blog, index) => {
       return (
       <Blog props={blog} key={index}/>
       ) 
      })}
    </div>
    </div>
  )
};

export default Page;