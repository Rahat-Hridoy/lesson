import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const company = ["Home", "Features", "Our pricings", "Latest News"];
const support = ["FAQ's", "Terms & Conditions", "Privacy Policy", "Contact Us"];

const Footer = () => {
  return (
    <footer className="bg-[#2E2100] ">
      <div className="container mx-auto">
        <div className="wrapper flex flex-col  md:flex-row lg:justify-between lg:items-start pt-[50px] lg:pt-[96px] pb-[18px] lg:pb-[38px] px-[30px] lg:px-0 ">
          {/* Lesson */}
          <div>
            <div className="w-[84px] h-[34px] ">
              <img src="/public/image/lightlogo.png" alt="Logo" />
            </div>
            <p className="font-pop font-normal text-sm text-[#BFBCB2] leading-[26px] max-w-[250px] text-justify py-[18px] ">
              Need to help for your dream Career? trust us. With Lesson, study
              becomes a lot easier with us.
            </p>
            <div className="flex justify-between items-center text-white max-w-[110px] ">
              <FaTwitter className="duration-200 hover:cursor-pointer hover:text-white/70" />
              <FaFacebookF className="duration-200 hover:cursor-pointer hover:text-white/70" />
              <FaLinkedinIn className="duration-200 hover:cursor-pointer hover:text-white/70" />
              <FaInstagram className="duration-200 hover:cursor-pointer hover:text-white/70" />
            </div>
          </div>
          {/* company */}
          <div className="pt-[40px] lg:pt-0 ">
            <h3 className="font-pop font-semibold text-[16px] text-white leading-[28px]  ">
              Company
            </h3>
            <div className="w-[130px] h-[1px] bg-[#59554B] mt-[14px] mb-[28px] "></div>
            {company.map((item, index) => (
              <ul className="flex flex-col  " key={index}>
                <li className="font-pop font-normal text-sm text-[#BFBCB2] leading-[26px] pb-[12px] hover:text-[#BFBCB2]/80  ">
                  <a href="/"> {item}</a>
                </li>
              </ul>
            ))}
          </div>
          {/* support */}
          <div className="pt-[40px] lg:pt-0 ">
            <h3 className="font-pop font-semibold text-[16px] text-white leading-[28px]  ">
              Support
            </h3>
            <div className="w-[130px] h-[1px] bg-[#59554B] mt-[14px] mb-[28px] "></div>
            {support.map((item, index) => (
              <ul className="flex flex-col  " key={index}>
                <li className="font-pop font-normal text-sm text-[#BFBCB2] leading-[26px] pb-[12px]  hover:text-[#BFBCB2]/80 ">
                  <a href="/"> {item}</a>
                </li>
              </ul>
            ))}
          </div>
          {/* Address */}
          <div className="max-w-[230px] pt-[40px] lg:pt-0 ">
            <h3 className="font-pop font-semibold text-[16px] text-white leading-[28px]  ">
              Address
            </h3>
            <div className="w-[130px] h-[1px] bg-[#59554B] mt-[14px] mb-[28px] "></div>
            <ul className="flex flex-col  ">
              <li className="font-pop font-normal text-sm text-[#BFBCB2] leading-[26px] pb-[12px]   ">
                <p>
                  <span className="font-pop font-semibold text-sm text-white">
                    Location:
                  </span>{" "}
                  27 Division St, New York, NY 10002, USA
                </p>
              </li>
              <li className="font-pop font-normal text-sm text-[#BFBCB2] leading-[26px] pb-[12px]   ">
                <p>
                  <span className="font-pop font-semibold text-sm text-white">
                    Email:{" "}
                  </span>{" "}
                  email@gmail.com
                </p>
              </li>
              <li className="font-pop font-normal text-sm text-[#BFBCB2] leading-[26px] pb-[12px]   ">
                <p>
                  <span className="font-pop font-semibold text-sm text-white">
                    Phone:{" "}
                  </span>{" "}
                  + 000 1234 567 890
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#59554B]  "></div>
        <div>
          <p className="font-pop font-normal text-sm text-[#807D74] leading-[26px] py-[28px] text-center ">
            Copyright ©2022 webdesign.gdn All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
