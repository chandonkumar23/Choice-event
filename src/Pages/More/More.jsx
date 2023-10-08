import { useLoaderData, useParams} from "react-router-dom";
import MoreCart from "./MoreCart";

const More = () => {
   
    const cards = useLoaderData()
    const {id} = useParams()
   
    const findCard = cards?.find( cart=>cart.id === id )

    return (
        <div>

           <MoreCart findCard={findCard}></MoreCart>
        </div>
    );
};

export default More;