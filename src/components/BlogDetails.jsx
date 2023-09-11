import { NavLink } from "react-router-dom";

function BlogDetails({post}){
    return (
        <div className="mt-[50px]">
            <NavLink to={`/blog/${post.id}`}><span>{post.title}</span></NavLink>
            <p>
                <p>By</p>
                <span>{post.author}</span>
                on{""}
                <NavLink to={`/category/${post.category.replaceAll(" ","-")}`}>
                    <span>{post.category}</span>
                </NavLink>
            </p>
            <p>Posted On {post.date}</p>
            <p>{post.content}</p>
            <div>
                {post.tags.map((tag,index)=>{
                    return(<NavLink key={index}to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span>{`#${tag}`}</span>
                </NavLink>);
                    
                })}
            </div>
        </div>
    );
}
export default BlogDetails;