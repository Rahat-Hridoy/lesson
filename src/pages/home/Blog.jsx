import React from "react";
import SectionHeader from "../../components/SectionHeader";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  return (
    <section className="bg-[#FFFCF4] py-[96px] h-[870px] ">
      <div className="container mx-auto">
        <SectionHeader
          mainHead={"Out Blog"}
          subHead={
            "Read our regular travel blog and know the latest update  of tour and travel"
          }
          Align="text-center"
          Width=" max-w-[470px] mx-auto "
        />
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
