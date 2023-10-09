
const Testimonial = () => {
    return (
        <div>
            <div className="p-8" data-aos="fade-up-right" >
            <h1 className="text-4xl text-center font-extrabold bg-gradient-to-r from-orange-400 to-orange-700  text-transparent bg-clip-text">Tesimonial</h1>
           <p className="text-center text-4xl font-extrabold -mt-2 text-orange-500">________</p>
           <p className="text-center font-bold text-gray-400">Customer Review</p>
         </div>
         <div    className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto bg-slate-100 p-8 mb-5">
            <div className="flex items-center gap-2 bg-white rounded-xl p-3 " data-aos="flip-left">
                <div><img className="h-[100px] w-[100px] rounded-full"  src="https://i.ibb.co/nRXSbbq/jake-nackos-IF9-TK5-Uy-KI-unsplash.jpg" alt="" /></div>
                <div>
                <h2 className="font-bold">John Doe</h2>
                <p>i have good exprience with choice events team</p>
                </div>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl p-3 "data-aos="flip-left">
                <div><img className="h-[100px] w-[100px] rounded-full"  src="https://i.ibb.co/DzwDJDg/vicky-hladynets-C8-Ta0gw-Pb-Qg-unsplash.jpg" alt="" /></div>
                <div>
                <h2 className="font-bold">Jane Smith</h2>
                <p>i have good exprience with choice events team</p>
                </div>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl p-3 "data-aos="flip-left">
              <div> <img className="h-[100px] w-[100px] rounded-full"  src="https://i.ibb.co/b5vG9p5/ethan-hoover-0-YHIlxe-Cuhg-unsplash.jpg" alt="" /></div>
                <div>
                <h2 className="font-bold">alice Johnson</h2>
                <p>i have good exprience with choice events team</p>
                </div>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl p-3 "data-aos="flip-left">
               <div> <img className="h-[100px] w-[100px] rounded-full"  src="https://i.ibb.co/bbghJ6V/craig-mckay-jm-URdhtm7-Ng-unsplash.jpg" alt="" /></div>
               <div>
               <h2 className="font-bold">Bob Wilson</h2>
                <p>i have good exprience with choice events team</p>
               </div>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl p-3 "data-aos="flip-left">
               <div> <img className="h-[100px] w-[100px] rounded-full"  src="https://i.ibb.co/tJMpdjG/jonas-kakaroto-mj-Rwhvq-EC0-U-unsplash.jpg" alt="" /></div>
              <div>
              <h2 className="font-bold">Micheal Davis</h2>
                <p>i have good exprience with choice events team</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl p-3 "data-aos="flip-left">
               <div> <img className="h-[100px] w-[100px] rounded-full" src="https://i.ibb.co/tzDW316/stefan-stefancik-QXev-Dflbl8-A-unsplash.jpg" alt="" /></div>
              <div>
              <h2 className="font-bold">amily Brown</h2>
                <p>i have good exprience with choice events team</p>
              </div>
            </div>
            
         </div>
        </div>
    );
};

export default Testimonial;