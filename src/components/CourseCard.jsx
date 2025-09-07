import React from "react";
import Button from "./Button";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const cardItem = [
  {
    image: <img src="/public/image/image.jpg" alt="Image" />,
    title: "Basic web design",
    story:
      "Get the best course, gain knowledge and shine for your future career.",
    price: "$120.75",
  },
  {
    image: <img src="/public/image/image.jpg" alt="Image" />,
    title: "Basic web design",
    story:
      "Get the best course, gain knowledge and shine for your future career.",
    price: "$120.75",
  },
  {
    image: <img src="/public/image/image.jpg" alt="Image" />,
    title: "Basic web design",
    story:
      "Get the best course, gain knowledge and shine for your future career.",
    price: "$120.75",
  },
];

const CourseCard = () => {
  return (
    <div className="relative">
      <div className="pt-[55px] grid grid-cols-1 md:grid-cols-3 space-x-3 space-y-4 ">
        {/* Card */}

        {cardItem.map((card, index) => (
          <div
            key={index}
            className="max-w-[370px] shadow-md rounded-2xl duration-300 hover:cursor-pointer  hover:shadow-xl "
          >
            <div className="max-w-[370px] w-full max-h-[278px]  ">
              {card.image}
            </div>
            <div className="p-[22px] ">
              <h4 className="font-pop font-semibold text-lg text-cdark leading-[30px] ">
                {card.title}
              </h4>
              <p className="font-sen font-normal text-sm text-cgray leading-[26px] pt-[6px] pb-[22px] ">
                {card.story}
              </p>
              <div className="flex justify-between items-center">
                <p className="font-pop font-semibold text-lg text-cdark leading-[30px]">
                  {card.price}
                </p>
                <Button buttonText={"Book Now"} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block absolute -top-[30px] right-0 ">
        <div className="flex item-conter justify-center  space-x-2 ">
          <button className="w-[40px] h-[40px] border-1 border-transparent bg-secondary text-white text-2xl rounded-full flex justify-center items-center duration-300 hover:cursor-pointer hover:border-secondary hover:text-secondary hover:bg-transparent  ">
            <GrFormPrevious />
          </button>
          <button className="w-[40px] h-[40px] border-1 border-transparent bg-secondary text-white text-2xl rounded-full flex justify-center items-center duration-300 hover:cursor-pointer hover:border-secondary hover:text-secondary hover:bg-transparent  ">
            {" "}
            <GrFormNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
