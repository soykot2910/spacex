import React from "react";

const Navbar = () => {
  return (
    <nav class="py-4 ">
      <div class="container flex flex-wrap justify-between items-center">
        <a href="" class="flex items-center">
          <img src="/images/logo.png" class="mr-3 h-6 sm:h-9" alt="Logo" />
        </a>
        <div className="flex justify-start items-center">
          <input
            placeholder="Search Rocket"
            className="p-3 w-[300px] rounded-md outline-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
