import React from "react";
import Title from "../ui/Title";
import { BiCurrentLocation, BiPhoneCall, BiMailSend } from "react-icons/bi";
import { AiFillFacebook, AiOutlineTwitter, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="bg-secondary text-white pt-[25px] pb-[24px] ">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between text-center my-20">
          <div>
            <Title addClass="text-[30px] ">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-4">
              <div>
                <span className="flex gap-x-2 justify-center items-center hover:text-primary">
                  <BiCurrentLocation /> Location
                </span>
              </div>
              <div>
                <span className="flex gap-x-2 justify-center items-center hover:text-primary">
                  <BiPhoneCall/> Call +45 9123123
                </span>
              </div>
              <div>
                <span className="flex gap-x-2 justify-center items-center hover:text-primary">
                  <BiMailSend /> Email
                </span>
              </div>
            </div>
          </div>
          <div>
            <Title addClass="text-[30px] ">Feane</Title>
            <div className="flex flex-col gap-y-2 mt-4">
              <div className="md:max-w-[500px] ">
                <span className="gap-x-2 items-center text-center ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex explicabo magnam officiis distinctio quae blanditiis commodi deserunt odit. Sint, aperiam?
                </span>
              </div>
              <div>
                <span className="gap-x-2 flex items-center text-center mt-2 justify-center cursor-pointer">
                  {/* icons */}
                  <div className="bg-white rounded-full w-8 h-8 text-center flex items-center justify-center">
                    <AiFillFacebook size={20} className="text-secondary" />
                  </div>
                  <div className="bg-white rounded-full w-8 h-8 text-center flex items-center justify-center">
                    <AiOutlineTwitter size={20} className="text-secondary" />
                  </div>
                  <div className="bg-white rounded-full w-8 h-8 text-center flex items-center justify-center">
                    <AiFillLinkedin size={20} className="text-secondary" />
                  </div>
                  <div className="bg-white rounded-full w-8 h-8 text-center flex items-center justify-center">
                    <AiOutlineInstagram size={20} className="text-secondary" />
                  </div>
                  <div className="bg-white rounded-full w-8 h-8 text-center flex items-center justify-center">
                    <BsPinterest size={20} className="text-secondary" />
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div>
            <Title addClass="text-[30px] ">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-4">
              <div>
                <span className="gap-x-2 items-center text-center">
                  Everyday
                </span>
              </div>
              <div>
                <span className="gap-x-2 items-center text-center">
                  10.00 AM - 10.00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center mt-10">
            Copyright &copy; 2023 Made with ❤ by <span className="text-primary">EMRE UÇAR</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
