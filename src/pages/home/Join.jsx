import React from "react";
import CommonSection from "../../components/CommonSection";

const Join = () => {
  return (
    <section className=" pb-[100px]  md:pb-[200px] ">
      <CommonSection
        img={<img src="/image/image2.jpg" />}
        title={
          "Take the next step toward your personal and professional goals with Lesson"
        }
        description={
          "Take the next step toward. Join now to receive personalized  and more recommendations from the full Coursera catalog."
        }
        period={null}
        direction="rtl"
        btntext={"Join Now"}
        btnAlign={"text-left"}
      />
    </section>
  );
};

export default Join;
