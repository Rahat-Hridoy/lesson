import React from "react";
import Button from "./Button";

const cardItem = [
  {
    image: <img src="/public/image/image.jpg" alt="Image" />,
    date: "21 November 2021",
    title: "How to become a pro web designer in 2022 and get remot job?",
  },
  {
    image: <img src="/public/image/image.jpg" alt="Image" />,
    date: "21 November 2021",
    title: "How to become a pro web designer in 2022 and get remot job?",
  },
  {
    image: <img src="/public/image/image.jpg" alt="Image" />,
    date: "21 November 2021",
    title: "How to become a pro web designer in 2022 and get remot job?",
  },
];

const BlogCard = () => {
  return (
    <div>
      <div className="pt-[55px] grid grid-cols-1 md:grid-cols-3 space-x-3 space-y-4 ">
        {/* Card */}

        {cardItem.map((card, index) => (
          <div
            key={index}
            className="max-w-[370px] bg-white shadow-md rounded-2xl duration-300 hover:cursor-pointer  hover:shadow-xl "
          >
            <div className="max-w-[370px] w-full max-h-[278px]  ">
              {card.image}
            </div>
            <div className="flex flex-col items-start gap-y-3 p-[20px] ">
              <div className="flex items-center justify-start gap-x-2 ">
                <div className="w-[6px] h-[6px] bg-secondary rounded-full "></div>
                <p> {card.date} </p>
              </div>
              <div className="w-[160px] h-[1px] bg-[#E2DFDA]  "></div>
              <h3 className="font-pop font-semibold text-[16px] text-cdark  leading-[28px]  ">
                {card.title}
              </h3>
              <Button buttonText={"Read More"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
