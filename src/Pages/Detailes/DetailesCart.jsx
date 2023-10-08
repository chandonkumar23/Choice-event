
const DetailesCart = ({findCard}) => {
    const {  title , image ,decscription,price} = findCard || {};
    return (
        <div className="p-8">
            <div className="w-2/4 mx-auto bg-gradient-to-r from-orange-300 to-orange-50 rounded-sm p-10">
                <img className="h-[400px] rounded-md" src={image} alt="" />
                <div>
                    <div className="flex justify-between items-center p-3 ">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="text-xl bg-red-300 rounded-md p-3">Price: {price}</p>
                    </div>
                </div>
                <p>{decscription}</p>
            </div>
        </div>
    );
};

export default DetailesCart;