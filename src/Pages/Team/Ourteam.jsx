

const Ourteam = () => {
    return (
        <div>
            <div className="p-8">
            <h1 className="text-4xl text-center font-extrabold bg-gradient-to-r from-orange-400 to-orange-700  text-transparent bg-clip-text">Our Team.</h1>
           <p className="text-center text-4xl font-extrabold -mt-2 text-orange-500">________</p>
         </div>

         <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto bg-slate-100 p-8 mb-5">
            <div className="flex items-center gap-2 bg-white rounded-xl p-3 ">
                <div><img className="h-[100px] w-[100px] rounded-full border-4 border-orange-500"  src="https://i.ibb.co/1qX2WKb/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash.jpg" alt="" /></div>
                <div>
                <h2 className="font-bold">John Doe</h2>
                <p>CEO & Founder</p>
                </div>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl p-3 ">
                <div><img className="h-[100px] w-[100px] rounded-full border-4 border-orange-500"  src="https://i.ibb.co/yPpx21x/christina-wocintechchat-com-0-Zx1b-Dv5-BNY-unsplash.jpg" alt="" /></div>
                <div>
                <h2 className="font-bold">Jane Smith</h2>
                <p>Products Manger</p>
                </div>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl p-3 ">
              <div> <img className="h-[100px] w-[100px] rounded-full border-4 border-orange-500"  src="https://i.ibb.co/hZScjH5/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg" alt="" /></div>
                <div>
                <h2 className="font-bold">alice Johnson</h2>
                <p>Deracter</p>
                </div>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl p-3 ">
               <div> <img className="h-[100px] w-[100px] rounded-full border-4 border-orange-500"  src="https://i.ibb.co/ZHsQjn1/naim-ahmed-8-Bc-VHm-AHtlw-unsplash.jpg" alt="" /></div>
               <div>
               <h2 className="font-bold">Bob Wilson</h2>
                <p>Accounting Manger</p>
               </div>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl p-3 ">
               <div> <img className="h-[100px] w-[100px] rounded-full border-4 border-orange-500"  src="https://i.ibb.co/SwkjQMp/olawale-munna-o-Xzy-Pakqs-A0-unsplash.jpg" alt="" /></div>
              <div>
              <h2 className="font-bold">Micheal Davis</h2>
                <p>Advicer</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl p-3 ">
               <div> <img className="h-[100px] w-[100px] rounded-full border-4 border-orange-500" src="https://i.ibb.co/6tg2kYz/sergio-de-paula-c-Gmwf-HBDzk-unsplash.jpg" alt="" /></div>
              <div>
              <h2 className="font-bold">amily Brown</h2>
                <p>Cameraman</p>
              </div>
            </div>
            
         </div>


        </div>
    );
};

export default Ourteam;