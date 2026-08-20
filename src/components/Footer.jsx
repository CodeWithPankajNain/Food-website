import React from "react";

export default function Footer(){
    return (
        <>
        <footer>
            <div className="footer h-80 w-full bg-gradient-to-r from-red-400  to-red-800 flex justify-evenly items-center">
                <div className="mini mini-foot-1 flex flex-col justify-evenly items-center">
                    <h1 className="text-[34px] text-center font-bold">About Us</h1>
                    <ul className="flex flex-col justify-center items-center h-44  w-44 gap-1">
                        <li>About Us</li>
                        <li>Our Story</li>
                        <li>Meet the Chefs</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="mini mini-foot-2 flex flex-col justify-evenly items-center">
                     <h1 className="text-[34px] text-center font-bold">Explore</h1>
                    <ul className="flex flex-col justify-center items-center h-44  w-44 gap-1">
                        <li>Our Menu</li>   
                        <li>Popular Dishes</li>
                        <li>New Arrivals</li>
                        <li>Offers & Deals</li>
                        <li>Catering</li>
                    </ul>
                </div>
                <div className="mini mini-foot-3 flex flex-col justify-evenly items-center">
                      <h1 className="text-[30px] text-center font-bold">Customer Support</h1>
                    <ul className="flex flex-col justify-center items-center h-44  w-44 gap-1">
                        <li>Help Center</li>   
                        <li>FAQs</li>
                        <li>Delivery Information</li>
                        <li>Returns & Refunds</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="mini mini-foot-4 flex flex-col justify-evenly items-center">
 
                  <h1 className="text-[34px] text-center font-bold">Follow Us</h1>
                    <ul className="flex flex-col justify-center items-center h-44  w-44 gap-1">
                        <li><span><img src="svg/instagram.svg" className="h-6 w-6 inline-block mr-1" alt="" /></span>Instagram</li>   
                        <li><span><img src="svg/facebook.svg" className="h-6 w-6 inline-block mr-1" alt="" /></span>Facebook</li>
                        <li><span><img src="svg/youtube.svg" className="h-6 w-6 inline-block mr-1" alt="" /></span>YouTube</li>
                        <li><span><img src="svg/twitter.svg" className="h-6 w-6 inline-block mr-1" alt="" /></span>Twitter</li>
                        <li>Newsletter Signup</li>
                    </ul>

                </div>
            </div>
            <div className="copyright">
                 <p className="text-center text-[40px] text-white h-16 bg-[rgba(175,24,24,0.8)]">© 2006-2026 Foodie. All Rights Reserved.</p>
            </div>

        </footer>
        </>
    )
}

/* 




 */




