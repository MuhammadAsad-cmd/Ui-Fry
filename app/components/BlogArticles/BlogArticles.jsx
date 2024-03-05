import { News } from "@/app/Data";
import React from "react";
import BlogDropdown from "./BlogDropdown";

const BlogArticles = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 xl:mx-20 mt-[100px]">
        <div>
          <p className="text-[42px] leading-normal font-bold text-[#011632]">
            Articles
          </p>
          <img src="/images/ArticleVector.svg" alt="" className="-mt-3" />
        </div>
        <div className="text-end">
          <BlogDropdown />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 mt-10 px-5 xl:mx-20">
          {News.map((article) => (
            <div
              key={article.id}
              className="bg-[#E6F6FE] p-5 h-full rounded-xl"
            >
              <img src={article.imageUrl} alt="" className="w-full" />
              <button className="mt-[22px] w-[97px] h-[35px] bg-[#011632] text-base font-medium text-[#FFFFFF] rounded-lg">
                {article.button}
              </button>

              <p className="text-[#011632] text-lg font-medium mt-[14px]">
                {article.title}
              </p>
              <p className="text-[#3C4959] text-lg font-normal mt-[10px]">
                {article.description}
              </p>
              <div>
                <p className="text-end text-[#011632] text-base font-normal mt-[2px]">
                  {article.writer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center  mt-[50px]">
        <button className="bg-[#1376F8]  w-[186px] rounded-xl h-[55px] text-base font-semibold text-white">
          Check out more
        </button>
      </div>
    </>
  );
};

export default BlogArticles;
