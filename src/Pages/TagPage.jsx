import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

function TagPage(){

    const navigate=useNavigate();

    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);

    return (
        <div>
            <Header></Header>
            <div>
                <button onClick={()=>navigate(-1)}> Back</button>
                <h2>
                    Blogs Tagged <span>{tag}</span>
                </h2>
            </div>
            <Blogs></Blogs>
            <Pagination></Pagination>


        </div>
    );
}
export default TagPage;