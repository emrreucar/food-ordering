import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto flex flex-col items-center mb-16">
      <Title addClass="text-[40px]">Our Menu</Title>
      {/* buttons start */}
      <div className="mt-10">
        <button className="px-4 py-2 bg-secondary rounded-3xl text-white">
          All
        </button>
        <button className="px-4 py-2 rounded-3xl ">Burger</button>
        <button className="px-4 py-2 rounded-3xl ">Pizza</button>
        <button className="px-4 py-2 rounded-3xl ">Drink</button>
      </div>
      {/* buttons end */}

      {/* menu item start */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
      {/* menu item end */}

      {/* view more button */}
      <div className="mt-10">
        <button className="btn-primary">View More</button>
      </div>
    </div>
  );
};

export default MenuWrapper;
