
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner/Banner";
import Service from "./Service/Service";
import Gallary from "./gallary/Gallary";



const Home = () => {
    
    return (
        <div> 
           
            <Banner></Banner>  
            <Service></Service>
           <Gallary></Gallary>
           <Testimonial></Testimonial>
         
        </div>
    );
};

export default Home;