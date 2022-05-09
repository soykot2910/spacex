import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import History from "./components/History";
import { Maincontent } from "./components/Maincontent";
import Navbar from "./components/Navbar";
import RocketCards from "./components/RocketCards";
import Sidebar from "./components/Sidebar";
import { getLauncheItems } from "./redux/slice/rocketLaunche";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  
  const launchesData=useSelector(state=>state.launche)

  console.log(launchesData)

  useEffect(() => {
    dispatch(getLauncheItems('random'));
  }, []);



  return (
    <div>
      <Navbar />
      {/* <Hero/> */}
      {/* <History/> */}
      {/* <RocketCards/> */}
      <main className="border-t-2 border-[#EDEDED] flex px-16">
        <Sidebar />
        <Maincontent />
      </main>
    </div>
  );
};

export default App;
