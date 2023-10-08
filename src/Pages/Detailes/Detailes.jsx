import { useLoaderData, useParams } from "react-router-dom";
import DetailesCart from "./DetailesCart";


const Detailes = () => {
    const cards = useLoaderData()
    const {id} = useParams()
   
    const findCard = cards?.find( cart=>cart.id === id )

    return (
        <div>

           <DetailesCart findCard={findCard}></DetailesCart>
        </div>
    )
};

export default Detailes;