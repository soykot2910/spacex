import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import History from "./components/History";
import { Maincontent } from "./components/Maincontent";
import Navbar from "./components/Navbar";
import RocketCards from "./components/RocketCards";
import Sidebar from "./components/Sidebar";
import { getlancheItems, launchSuccess } from "./redux/slice/lanches";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const [ls, setLs] = useState("");
  const dispatch = useDispatch();

  let data = useSelector((state) => state.launches);
  useEffect(() => {
    dispatch(getlancheItems());
    console.log(data)
  }, [dispatch]);
  useEffect(() => {
    dispatch(launchSuccess());
    console.log(data)
  }, [ls]);

  return (
    <div>
      <Navbar />
      {/* <Hero/> */}
      {/* <History/> */}
      {/* <RocketCards/> */}
      <main className="border-t-2 border-[#EDEDED] flex px-16">
        <Sidebar />
        <div className="bg-[#F1F9F9] w-full lg:w-[70%]  border-l-2 border-[#EDEDED] px-12 pt-2">
          <div className="flex justify-between items-center">
            <p className="font-medium text-[#30545B]"> Results</p>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-[#30545B] text-lg">Sort by</h3>
              <div className="px-3">
                <select
                  id=""
                  class="p-3 rounded-md font-medium outline-none  borders-2 border-[#EDEDED]"
                >
                  <option>Last week</option>
                </select>
              </div>
              <div className="">
                <select
                  id=""
                  value="true"
                  class="p-3 rounded-md font-medium outline-none  borders-2 border-[#EDEDED]"
                  onChange={(e) => setLs(e.target.value)}
                >
                  <option>Launch Status</option>
                </select>
              </div>
              <div className="px-3">
                <input
                  type="checkbox"
                  className=" borders-2 border-[#EDEDED] rounded-md mr-2"
                />
                <label className="font-medium">is it upcomming</label>
              </div>
            </div>
          </div>
          <div className="">
            {data.items.map((item) => (
              <div key={item.flight_number}>
                <h2>{item.rocket.rocket_name}</h2>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
