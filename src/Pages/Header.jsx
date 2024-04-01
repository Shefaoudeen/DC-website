import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center text-2xl">
      <div className="flex justify-between w-[80%] border-b-4 border-black py-10">
        <div>DC</div>
        <div className="flex w-[25%] justify-around">
          <div>Home</div>
          <div>Work</div>
          <div>Shop</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
