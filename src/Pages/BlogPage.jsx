import Header from "../components/Header";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import { useState } from "react";
import { useEffect } from "react";
import BlogDetails from "../components/BlogDetails";
import { useLocation } from "react-router-dom";

function BlogPage(){

    const [blog,setBlog]=useState(null);
    const [relatedblogs,setRelatedBlogs]=useState([]);
    const location=useLocation();
    const navigate=useNavigate();
    const {loading,setLoading}=useContext(AppContext);
    const blogId=location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url=`${baseUrl}?blogId=${blogId}`;
        try{
            const res=await fetch(url);
            const data=await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedblogs);
        }
        catch(err)
        {
            console.log('Error Occured');
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false)
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }

    },[location.pathname])

    return(
        <div>
            <Header></Header>
            <div>
                <button onClick={()=>navigate(-1)}>Back</button>
            </div>
            {   
                loading ?
                (
                    <div>
                        <p>Loading</p>
                    </div>
                ):
                blog ?
                ( 
                    <div>
                        <BlogDetails post={blog}></BlogDetails>
                        <h2>Related Blogs</h2>
                        {
                            relatedblogs.map((post)=>{
                                return(<div key={post.id}>
                                <BlogDetails post={post}></BlogDetails>
                            </div>);
                                
                            })
                        }
                    </div>
                ):
                (
                    <div>
                        <p>No Blog Found</p>
                        </div>
                )
               
            }

        </div>
    );
}

export default BlogPage;