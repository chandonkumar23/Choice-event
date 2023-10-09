/* eslint-disable react/prop-types */


const MoreCart = ({findCard}) => {
  const {  title , image ,decscription} = findCard || {};
    return (
        <div className="p-10">
            <div className="w-4/5 mx-auto flex-1 gap-4">
                <img className="h-[400px] rounded-md "data-aos="fade-up" src={image} alt="" />
               
                <div data-aos="fade-left">
                   
                    <h1 className="text-2xl mb-3 font-bold">{title}</h1>
                    <hr />
                     <p className=" font-bold">
                    {decscription}
                </p>
                </div>
                
            </div>
        </div>
    );
};

export default MoreCart;