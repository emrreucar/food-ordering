import React from "react";
import Slider from "react-slick";
import Title from '../components/ui/Title';

const ImageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed: 3000,
  };
  return (
      <div className="max-w-full h-[60vh] bg-gradient-to-r from-primary/70 to-white ">
        <Title addClass='text-4xl ml-10 sm:ml-[238px] mt-[-90px] pt-4 '>Galeri</Title>
      <Slider {...settings}>
        <div>
          <img
            className="w-[250px] h-[250px] mt-10 mx-auto rounded-full"
            src="https://images.unsplash.com/photo-1632577237955-f73cb2a054ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1901&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-[250px] h-[250px] mt-10 mx-auto rounded-full"
            src="https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-[250px] h-[250px] mt-10 mx-auto rounded-full"
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-[250px] h-[250px] mt-10 mx-auto rounded-full"
            src="https://images.unsplash.com/photo-1613319300832-a105da5bd34e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-[250px] h-[250px] mt-10 mx-auto rounded-full"
            src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-[250px] h-[250px] mt-10 mx-auto rounded-full"
            src="https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="/"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
