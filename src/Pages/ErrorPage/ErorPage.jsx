import {AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
const ErorPage = () => {
    return (
        <div>
           <div className="flex justify-center mx-auto">
            <div> 
            <h1 className="text-xl lg:text-4xl  p-8 font-bold">Page Not Found!</h1>
            <img className="p-5 mx-auto" src="https://i.ibb.co/QFP9rqG/OIP-2.jpg" alt="" />
            </div>
           </div>
           <Link className="btn btn-error flex justify-center mx-auto w-[150px]" to={'/'}><AiOutlineArrowLeft></AiOutlineArrowLeft>go home</Link>
        </div>
    );
};

export default ErorPage;