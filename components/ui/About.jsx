import React from "react";
import Image from "next/image";
import Title from "./Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 sm:flex-auto justify-center flex-wrap-reverse ">
        <div>
          <div className="relative sm:w-[445px] w-[300px] sm:h-[600px] h-[445px] ">
            <Image src="/images/about-img.png" alt="/" fill />
          </div>
        </div>
        <div className="md:w-1/2">
          <Title addClass="text-4xl">We Are Feane</Title>
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            impedit officiis vero est cupiditate neque esse laudantium facere
            deserunt veniam ratione exercitationem numquam itaque iusto incidunt
            a magnam similique, nam maiores laborum libero deleniti nostrum aut?
            Animi error minus asperiores pariatur reiciendis repudiandae
            molestiae officiis dolorum eos. Suscipit, maxime neque!
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
