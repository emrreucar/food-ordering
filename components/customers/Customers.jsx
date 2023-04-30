import React from "react";
import CustomerItem from "./CustomerItem";
import Title from "../ui/Title";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Customers = () => {
  const NextBtn = ({ onClick }) => {
    return (
      <button className="absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 text-white rounded-full text-2xl ml-2" onClick={onClick}>
        <IoIosArrowForward />
      </button>
    );
  };

  const PrevBtn = ({ onClick }) => {
    return (
      <button className="absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 text-white rounded-full text-2xl" onClick={onClick}>
        <IoIosArrowBack />
      </button>
    );
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoPlay: true,
    autoSpeed: 3500,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div>
      <div className="container mx-auto my-20">
        <Title addClass="text-[40px] text-center">What Says Our Customer</Title>
        <Slider {...settings}>
          <CustomerItem
            imgSrc="/images/client1.jpg"
            name="Moana Michell"
            job="magna aliqua"
          />

          <CustomerItem
            imgSrc="/images/client2.jpg"
            name="Emre Uçar"
            job="Software Developer"
          />

          <CustomerItem
            imgSrc="/images/client1.jpg"
            name="Moana Michell"
            job="magna aliqua"
          />

          <CustomerItem
            imgSrc="/images/client2.jpg"
            name="Emre Uçar"
            job="Software Developer"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Customers;
