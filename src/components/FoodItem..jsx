import React from "react";

export default  function FoodItem(){
    return(
     <>
    
        <ul className=" items flex justify-evenly bg-red-500 hover:cursor-pointer">
            <li>chicken</li>
            <li>Gourment Cugers</li>
            <li>Artisan Pizza</li>
            <li>fresh wraps & rolls</li>
            <li>Loaded Fries</li>
            <li>Ice Cream Shakes</li>
            <li>Grilled sandwiches</li>
            <li>crispy fried chicken</li>
        </ul>
    

     
     <div className="mt-3 display h-56 w-96 flex justify-evenly flex-col items-center relative left-[35%]">
 
      <p className="cursive text-red-500 text-[26px]">What We Offer</p>
      <h1 className="text-[32px] font-extrabold">Browse by <span className="text-red-600">Category</span></h1>
      <p className="h-12 w-96 pl-4 font-semibold text-zinc-700">From sizzling burgers to exotic world cusines -find your favourite in our menu</p>
         
     </div>

<div className="food-item">
     <div className="food food-1 flex justify-center items-center flex-col">
         <div className="b1 h-16 w-16 ">
             <img src="/images/burger.jpg" alt="" />
         </div>
         <h1>Burger</h1>
         <p> 24 Items</p>
     </div>

     <div className="food food-2 flex justify-center items-center flex-col ">
   <div className="b1 h-16 w-16 ">
         <img src="/images/pizza.avif" alt="" />
     </div>
         <h1>Pizza</h1>
         <p> 18 Items</p>
     </div>

     <div className="food food-3 flex justify-center items-center flex-col ">
   <div className="b1 h-16 w-16 ">
         <img src="/images/fried-chicken.jpg" alt="" />
     </div>
         <h1>fried chicken</h1>
         <p> 15 Items</p>
     </div>

     <div className="food food-4 flex justify-center items-center flex-col ">
   <div className="b1 h-16 w-16 ">
         <img src="/images/wraps.jpg" alt="" />
     </div>
         <h1>Wraps</h1>
         <p> 12 Items</p>
     </div>

     <div className="food food-5 flex justify-center items-center flex-col ">
   <div className="b1 h-16 w-16 ">
         <img src="/images/cheery.jpg" alt="" />
     </div>
         <h1>Desserts</h1>
         <p> 20 Items</p>
     </div>

     <div className="food food-6 flex justify-center items-center flex-col ">
   <div className="b1 h-16 w-16 ">
         <img src="/images/momos.jpg" alt="" />
     </div>
         <h1>Momos</h1>
         <p> 25 Items</p>
     </div>

     <div className="food food-6 flex justify-center items-center flex-col ">
   <div className="b1 h-16 w-16 ">
         <img src="/images/spring.jpg" alt="" />
     </div>
         <h1>Spring Roll</h1>
         <p> 05 Items</p>
     </div>
     

     
</div>

     </>

    )
}