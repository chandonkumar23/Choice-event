import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import swal from 'sweetalert';

const Navbar = () => {
    const{user , logOut } = useContext(AuthContext)

    const handleLogOut =() =>{
        logOut()
        .then(swal({
            title: "Log Out ",
            icon: "success",
            button:"ok"
          }))
        .catch()
    
      
        

    }
    return (
        <div>
            <div className="navbar  shadow-lg bg-orange-300 sticky-top ">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">

        <li><Link to={'/'}>Home</Link></li>

        <li><Link to={'/login'}>Login</Link></li>

        <li><Link to={'/register'}>Ragister</Link></li>

     
         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
     
         <div className="w-10 rounded-full ">
       <img src="" alt="" />
        
          </div>
      
        </label>
     
      <ul tabIndex={0} >
        
        
        <li>
        {
    user ? 
    <Link onClick={handleLogOut}> Logout </Link>
    :
              <Link to={'/login'}>Login</Link>
              
 }
        </li>
      </ul>

      </ul>
    </div>
    <a className="btn btn-ghost normal-case font-extrabold text-4xl">CHOICE <span className="text-orange-600 ">Events</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

      {/* <li><Link to={'/'}>Home</Link></li> */}

     <li><NavLink  to="/"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-red-400 " : ""
                        }>
                            Home
          </NavLink>
          </li> 


       {/* <li><Link to={'/login'}>Login</Link></li> */}

     <li><NavLink  to="/login"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-red-400  " : ""
                        }>
                            Login
          </NavLink>
          </li>  

       {/* <li><Link to={'/register'}>Ragister</Link></li> */}

       <li>  <NavLink  to="/register"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-red-400 " : ""
                        }>
                            Register
          </NavLink>
          </li>  
           

       
       

    </ul>
  </div>
  <div className="navbar-end">
 {/* {
    user ? 
    <button onClick={handleLogOut} className="btn btn-error"> Logout </button>
    :
    <button className="btn btn-error"> <Link to={'/login'}>Login</Link></button>
 } */}

<div className=" hidden md:block lg:block ">
    <div className="flex items-center">
             
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      
         <div className="w-10 rounded-full">
       <img src="" alt="" />
       </div>
       
      </label>
      <ul tabIndex={0} className=" bg-red-400 p-2  rounded-xl shadow-xl">
        
        
        <li className="font-bold">
        {
    user ? 
    <Link  onClick={handleLogOut}> Logout </Link>
    :
              <Link to={'/login'}>Login</Link>
 }
        </li>
      </ul>

    </div>
    </div>





  </div>
</div>
        </div>
    );
};

export default Navbar;