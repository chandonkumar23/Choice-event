/* eslint-disable no-unused-vars */
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const GoogleBtn = () => {
    const { googleLogin} =useContext(AuthContext)
    const location=useLocation();
    const navigate = useNavigate();
   

   const handleGoogleLogin = (google) =>{
    google()
    .then( result =>{
        if(google){
          swal("Done", "", "success");
        }
        navigate(location ?.state ? location.state : '/');
    })
      
    .catch(error => console.log(error))
   }
    return (
        <div>
            <button onClick={()=>handleGoogleLogin(googleLogin)} className="btn outline-1 flex justify-center mx-auto">   <FcGoogle className="text-xl"></FcGoogle> Login With Google</button>
            
        </div>
    );
};

export default GoogleBtn;