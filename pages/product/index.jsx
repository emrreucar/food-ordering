import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";

const Index = () => {
  return (
    <div className="flex flex-wrap items-center h-screen gap-20 py-20">
      <div className="relative md:flex-1 w-[80%] h-[80%] mx-20">
        <Image src="/images/f1.png" alt="/" fill objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl ">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-4 my-4 inline-block">
          $10
        </span>
        <p className="text-sm my-4 md:pr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in,
          deleniti, maxime neque non, dicta suscipit nisi omnis nobis enim eos
          error delectus at veritatis quisquam a accusamus facere sequi totam?
          Aliquam unde id dolore nostrum itaque aperiam. Reiciendis, corrupti.
        </p>
        <div>
          <h4 className="text-[20px] font-bold ">Choose the size</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div className="relative w-8 h-8">
              <Image src="/images/size.png" alt="/" fill />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium ">
                Small
              </span>
            </div>
            <div className="relative w-12 h-12">
              <Image src="/images/size.png" alt="/" fill />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium ">
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16">
              <Image src="/images/size.png" alt="/" fill />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium ">
                Large
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 mt-4 md:justify-start justify-center">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">Ketçap</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">Mayonez</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">Acı Sos</span>
          </label>
        </div>
        <button className="btn-primary mt-6">Add to Cart</button>
      </div>
    </div>
  );
};

export default Index;
