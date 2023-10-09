/* eslint-disable react/prop-types */

const DetailesCart = ({findCard}) => {
    const {  title , image ,decscription,price} = findCard || {};
    return (
        <div className="p-8">
            <div className="w-full mx-auto bg-gradient-to-r from-orange-300 to-orange-50 rounded-sm p-10">
                <img className="h-[400px] rounded-md" data-aos="zoom-out-right" src={image} alt="" />
                <div>
                    <div className="flex-1 justify-between items-center p-3" data-aos="zoom-out-left">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="text-xl  rounded-md p-3 ">Price: {price}</p>
                    </div>
                </div>
                <p className="mx-3">{decscription}</p>
            </div>
        </div>
    );
};

export default DetailesCart;