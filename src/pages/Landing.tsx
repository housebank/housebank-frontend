import React from "react";
import {Button} from "antd";


const LandingPage = ()=>{
    return(
        <div className={`h-100 w-[95%] mx-auto my-[0rem]`}>
           <div className={`w-full mb-[2rem] pt-[2rem] min-h-[30%] h-[80vh] 
           bg-[url("https://firebasestorage.googleapis.com/v0/b/housebank-dev.appspot.com/o/a-quaint-brick-cottage.jpg?alt=media&token=ce8fdcd8-711d-4714-bae7-83d49135e746")]
           bg-contain bg-center`}>
                   <p data-testid="main-title" className={`text-shadow-sm font-extrabold w-[55%] text-white text-6xl py-[12%] 
               absolute top-[6vw] right-[36vw] 2xl:top-[4vw]`}>DISCOVER YOUR NEXT DREAM PROPERTIES
                       AND PAY WITH
                       EASE</p>
                   <p className={`text-shadow-sm font-medium w-[55%] text-white text-base py-[12%] 
               absolute top-[20vw] right-[36vw] 2xl:top-[10vw]`}>It is a long established fact that
                       a reader
                       will be distracted by the readable content of a page when looking
                       at its layout.</p>
                   <Button type="primary" data-testid="explore-button" size="large" className={`border-[1px] font-medium text-white 
                   border-blue bg-blue rounded-[10px] py-[0.5rem] px-[2rem] hover:bg-white hover:text-blue 
                   absolute top-[38vw] right-[71vw] w-[20%] 2xl:top-[26vw] 2xl:right-[76vw] 2xl:w-[15%]`}>Explore Now</Button>
           </div>
        </div>
    )
}

export  default LandingPage;