import React from "react";
import CommonSection from "../../components/CommonSection";
import Button from "../../components/Button";

const SignUp = () => {
  return (
    <section className="pb-[200px] ">
      <CommonSection
        img={<img src="/src/assets/image1.jpg" />}
        title={"Learner outcomes through our awesome platform"}
        description={
          "87% of people learning for professional development report career benefits like getting a promotion, a raise, or starting a new career."
        }
        period={"Lesson Impact Report (2022)"}
        direction="ltr"
        btntext={"Sign Up"}
        btnAlign={"text-left"}
      />
    </section>
  );
};

export default SignUp;
