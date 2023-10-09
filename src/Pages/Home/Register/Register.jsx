import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import swal from 'sweetalert';
import GoogleBtn from "../Login/GoogleLogin/GoogleBtn";


const Register = () => {
     
    const{RegisterUser} = useContext(AuthContext)
    const [Sinerror,setSinError] = useState('');
    const handleRegister = e =>{
     
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
       const nameFirst = form.get('nameFirst');
       const imageURL= form.get('nameLast');
       const email = form.get('email');
       const password = form.get('password');
       console.log(nameFirst,imageURL , email , password);
        if(password.length < 6){
          setSinError("password must be 6 characters")
          return;
        } else if (!/[A-Z]/.test(password)){
          setSinError("don't have a capital letter")
          return
        } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
          setSinError("don't have a special character")
          return
        }

       setSinError('')
       
       RegisterUser(email , password)
       .then(result =>{
        console.log(result.user)
        
        if(RegisterUser){
            swal("Thank You", "Successfully Registered", "success");
        }
       })
        .catch(error =>{
            console.error(error)
            setSinError(error.message)
            
        })


    

    }
    return (
        <div>
            <div className="hero min-h-screen">
  <div className="space-y-8">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      <p></p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" name="nameFirst" placeholder="First" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="imageURL" placeholder="PhotoURL" className="input input-bordered" required />
        </div>
        
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        {
          Sinerror && <p className="text-red-700">{Sinerror}</p>
        }
        <div className="form-control mt-6">
          <button  className="btn btn-error flex justify-center">Sign up</button>
        </div>
        <p>Already have an account <Link  className="text-orange-400 font-bold" to={'/login'}>Login</Link></p>
      </form>
      <GoogleBtn></GoogleBtn>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;