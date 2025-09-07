import React from "react";
import SectionHeader from "../../components/SectionHeader";
import CourseCard from "../../components/CourseCard";

const Courses = () => {
  return (
    <>
      <section className="py-[200px] ">
        <div className="container mx-auto ">
          {/* Section-title */}
          <SectionHeader
            mainHead={"Our popular courses"}
            subHead={
              "Build new skills with new trendy courses and shine for the next future career."
            }
            Align="text-center  md:text-left"
            Width="max-w-[458px]"
          />
          {/* Section-cards */}
          <CourseCard />
        </div>
      </section>
    </>
  );
};

export default Courses;
