import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import GoogleBtn from "./GoogleLogin/GoogleBtn";



 

const Login = () => {

       const {SignIN} = useContext(AuthContext);
       const location = useLocation();
       const navigate = useNavigate();
       console.log(location)


const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email,password);
    SignIN (email ,password)
    .then( result =>{
      console.log(result.user);
      navigate(location ?.state ? location.state : '/');
    }
      
    )
    .catch(error =>{
        console.error(error);
    })
}

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="space-y-8">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
          <label className="label">
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-error">Login</button>
        </div>
        <p> Do not have an account <Link className="text-orange-500 font-bold" to={'/register'}>Register</Link></p>
        <p className="text-center">___________or__________</p>
      </form>
      
      <GoogleBtn></GoogleBtn>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;