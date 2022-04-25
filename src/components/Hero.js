import React from "react";

const Hero = () => {
  return (
    <section
      style={{ background: ` url("/images/earth.jpg")` }}
      className="!bg-center !bg-no-repeat h-[100vh] !bg-cover"
    >
      <div className="container text-white">
      <div class="flex flex-wrap justify-between items-center py-8">
        <a href="" class="flex items-center">
          <img src="/images/logo.png" class="mr-3 h-6 sm:h-9" alt="Logo" />
        </a>
        <div className="flex justify-start items-center">
          
        </div>
      </div>
        <div className="flex items-center justify-center flex-col pt-24">
          <h3 className="font-bold text-4xl mb-8 font-poppins tracking-[5px]">COUNTDOWN TO THE NEXT LAUNCH</h3>
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-col px-14 border-red-700 border-r-2">
              <p className="text-2xl tracking-[3px]">DAYS</p>
              <h2 className="text-9xl tracking-[10px]">17</h2>
            </div>
            <div className="flex items-center flex-col px-14 border-red-700 border-r-2">
              <p className="text-2xl tracking-[3px]">HOURS</p>
              <h2 className="text-9xl tracking-[10px]">11</h2>
            </div>
            <div className="flex items-center flex-col px-14">
              <p className="text-2xl tracking-[3px]">MINUTES</p>
              <h2 className="text-9xl tracking-[10px]">21</h2>
            </div>
          </div>
          <p className="py-8 text-xl tracking-[5px]">DATE: JUNE 10.2020 - 8:10 A.M EASTERN</p>
          <div className="text-center py-14">
              <h3 className="text-6xl font-bold tracking-[3px]">THE FALCON SPACEX 9</h3>
              <p className="text-3xl font-regular py-4 tracking-[6px] italic text-[#dcdcdc]">MISSION LAUNCH OF EXPEDITION 48 CREW</p>
              <button className="border-2 border-white font-bold tracking-[5px] hover:bg-black hover:text-white transition text-lg px-12 py-3 leading-10 mt-3">LIVE WEB CAST</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
