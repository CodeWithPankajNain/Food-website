import React from 'react'

export default function Main(props) {
  return (
    <>
     <div className="h-[90vh] w-full  flex justify-between  bg-cover bg-center bg-no-repeat object-cover bg-white opacity-85">
      
   <div className="ml-3 mt-3 main-1 h-[70vh] w-[20vw]  flex justify-between flex-col">
     <h1 className="ad capitalize tracking-tight leading-18 h-80 text-[55px]  font-bold">delicious <span className='text-red-600'> Fast Food</span> for every Moment</h1>
     <p className=''>{props.text}</p>
     <div className="main-btn">

   <div className="btn-boss flex gap-2 mb-3">

     <button className="h-14 w-44  rounded-4xl bg-linear-to-bl from-red-500 to-red-800 text-white font-semibold"> <span><img src="/svg/knife.svg" className="h-8 w-8 inline-block invert" alt="" /></span> Explore Menu</button>
     <button className="h-14 w-44 border rounded-4xl 
     font-semibold"> <span><img src="/svg/play-pink.svg" className="h-6 w-6 inline " alt="" /></span>Watch Our Story</button>
   </div>

     </div>
   </div>
   <div className="main-2 h-[400px] w-[400px] mt-24 border mr-16 rounded-[50%] ">

 <img src="/Food-website/public/images/burger.jpg" alt="" className=" burger object-contain h-[400px] w-[400px] rounded-[50%]" />

    <div className="card-1 absolute z-4 bg-white top-50 h-18 border text-center rounded-2xl w-32">
       <h1 className="font-extrabold"><span><img src="/svg/fire.svg" alt="" className="inline-block h-4 w-4"/></span>Hot Meal</h1>
       <p>Offer Till <span className="font-semibold ">5 days</span></p>
    </div>
    <div className=" absolute  bg-white right-[30px] bottom-96 card-2 h-18 border text-center rounded-2xl w-32">
       <h1 className="font-extrabold"><span><img src="/svg/clock.svg" alt="" className="inline-block h-4 w-4"/></span >20 min</h1>
       <p>Home Delievery</p>
    </div>
    <div className="absolute  bg-white right-[30px] bottom-72 card-3 h-18 border text-center rounded-2xl w-32">
       <h1 className="font-extrabold"><span><img src="/svg/star.svg" alt="" className="inline-block h-4 w-4"/></span> 4.5/5</h1>
       <p>Customer review</p>
    </div>
    

   </div>
    </div> 
    <hr/>
    </>
  )
}
