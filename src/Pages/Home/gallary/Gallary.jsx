

const Gallary = () => {
    return (
        <div>
        <div className="p-8">
         <h1 className="text-4xl text-center font-extrabold bg-gradient-to-r from-orange-400 to-orange-700  text-transparent bg-clip-text">Gallary</h1>
           <p className="text-center text-4xl font-extrabold -mt-2 text-orange-500">________</p>
           <p className="text-center font-bold text-gray-400">Our Awasome Photo gallary</p>
         </div>
        <div className="w-11/12 mx-auto p-10 border ">
        <div className="flex-1 items-center gap-3 rounded-md lg:grid  grid-cols-3">
            <img className="h-[350px] w-[450px]  rounded-xl border-4 border-orange-500" src="https://i.ibb.co/RvgF1Jk/product-school-S3hhrq-Lrg-YM-unsplash.jpg" alt="" />
            <img className="h-[350px] w-[450px]  rounded-xl border-4 border-orange-500" src="https://i.ibb.co/ZLBZms2/headway-F2-KRf-Qf-Cqw-unsplash.jpg" alt="" />
            <img className="h-[350px] w-[450px]  rounded-xl border-4 border-orange-500" src="https://i.ibb.co/zVBBvn9/stem-list-EVgs-Ab-L51-Rk-unsplash.jpg" alt="" />
            <img className="h-[350px] w-[450px]  rounded-xl border-4 border-orange-500" src="https://i.ibb.co/H7dGP8M/chuttersnap-Q-Kdj-Kxnt-H8-unsplash.jpg" alt="" />
            <img className="h-[350px] w-[450px]  rounded-xl border-4 border-orange-500 " src="https://i.ibb.co/j86KV11/md-duran-r-E9vg-D-TXg-M-unsplash.jpg" alt="" />
            <img className="h-[350px] w-[450px] rounded-xl border-4 border-orange-500 " src="https://i.ibb.co/PWHs1LD/teemu-paananen-bzdhc5b3-Bxs-unsplash.jpg" alt="" />
        </div>
        </div>
        </div>
    );
};

export default Gallary;