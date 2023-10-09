/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCart = ({ services}) => {
   const { title , image , decscription ,  id} = services;
    return (
    
        <div>
           

            <div className="flex  rounded-2xl w-full  bg-gradient-to-r from-orange-600 to-orange-50 p-2 ">
                <div>
                    <img className="h-[200px] w-[340px] rounded-2xl " src={image} alt="" />
                </div>
                <div className="space-y-5">
                    <h2 className="text-xl lg:text-xl  mx-4 font-bold">
                         {title}
                    </h2>
                   
                    {
                        decscription.length >100 
                        ? <p>{decscription.slice(0,100)} <Link className="text-orange-600 font-bold" to={`/more/${id}`}>Read More..</Link></p>
                        : <p>{decscription}</p>
                    }
                    <button className="btn btn-error flex justify-center mx-auto hover:bg-orange-400 "> <Link to={`/detailes/${id}`}>Detailes</Link> </button>
                </div>
              
            </div>
            
       </div>
    );
};

export default ServiceCart;