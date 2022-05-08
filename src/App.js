import React from "react";
import Hero from "./components/Hero";
import History from "./components/History";
import { Maincontent } from "./components/Maincontent";
import Navbar from "./components/Navbar";
import RocketCards from "./components/RocketCards";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero/> */}
      {/* <History/> */}
      {/* <RocketCards/> */}
      <main className="border-t-2 border-[#EDEDED] flex px-16">
        <Sidebar />
        <Maincontent/>
      </main>
    </div>
  );
};

export default App;
