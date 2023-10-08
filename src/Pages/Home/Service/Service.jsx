import { useLoaderData } from "react-router-dom";
import ServiceCart from "./ServoceCart/ServiceCart";

const Service = () => {
    const serviceData = useLoaderData();
  
    return (
        <div className="bg-gray-100 w-11/12 mx-auto mt-5 rounded-md">
         <div className="p-8">
         <h1 className="text-4xl text-center font-extrabold bg-gradient-to-r from-orange-400 to-orange-700  text-transparent bg-clip-text">Our Services.</h1>
           <p className="text-center text-4xl font-extrabold -mt-2 text-orange-500">________</p>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-7 gap-10 w-full mx-auto">
           
          {
            serviceData?.map(service=><ServiceCart key={service.id} services ={service}></ServiceCart>)
          }
        </div>
        </div>
    );
};

export default Service;