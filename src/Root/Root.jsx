

import Footer from '../Pages/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';






const Root = () => {
    return (
        <div className='w-full'>
       
             <Navbar></Navbar>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Root;