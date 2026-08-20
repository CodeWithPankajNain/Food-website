import React from "react";

export default function  Navbar(){
    return(
        <>
        
        <nav>
            <div className="nav nav-1 h-24 bg-white border flex justify-between items-center">
                <div className="nav-box  h-12 w-60 ">
                    <div className="fork flex gap-3">
                       <div><img src="/Food-website/svg/spoon-fork.svg" className="fork h-10 w-10"  alt="" /></div>
                       <p className="text-[36px] font-bold">Sar<span className="text-red-500 py-2">ab</span></p>
                    </div>
                </div>
                <div className="nav-box  h-16 w-[40vw]">
                    <ul className="mm flex justify-evenly items-center capitalize font-bold text-[18px] cursor-pointer">
                        <li>Home</li>
                        <li>about</li>
                        <li>menu</li>
                        <li>chefs</li>
                        <li>reservation</li>
                        <li>reviews</li>
                        <li>contact</li>
                    </ul>
                </div>

                <div className="nav-box   h-16 w-56 flex gap-4 justify-center items-center mr-4">
                    <div className="search">
                        <img src="/Food-website/svg/search.svg" className="h-6 w-6" alt="" />
                    </div>
                    <div className="btt">
                  
                    <button className="h-10 w-28 cursor-pointer hover:opacity-100 text-center border opacity-90 bg-linear-to-bl from-red-400 to-red-700 rounded-[7px] text-white font-semibold shadow-[0_2px_8px_rgb(255, 220, 220)] ">
                        <span> <img src="Food-website/svg/hand.svg" className="h-4 w-4 inline-block invert "  alt="" /></span>
                        &nbsp; Order Now</button>
                    </div>
                </div>
            </div>
        </nav>
        
        </>
    )
}
