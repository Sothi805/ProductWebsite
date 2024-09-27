import React from "react";
import Card from "./Card";

const CardLayout = ({ title1, item1,title2,item2 }: any) => {
  return (
    <div className="min-xl:max-w-[80%] border xl:max-w-[80%] sm:max-w-[100%] rounded-md bg-white pb-4 relative min-xl:-mt-[15rem] xl:-mt-[13rem] md:-mt-[12rem] sm:-mt-0 z-40 mx-auto shadow-md">
      {/* 1 */}
      <Title title={title1} />
      <div className="min-xl:px-[2rem] d-sm:px-[0.5rem] xl:px-[2.2rem] grid min-xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 min-xl:gap-[1.5rem] xl:gap-[2.5rem] lg:gap-[3.5rem] md:gap-[2rem] sm:grid-cols-2 d-sm:gap-2">
        {item1?.map((e: any, index: number) => (
          <div key={index} className="col-span-1">
            <Card />
          </div>
        ))}
      </div>
      {/* 2 */}
      <Title title={title2} />
      <div className="min-xl:px-[2rem] d-sm:px-[0.5rem] xl:px-[2.2rem] grid min-xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 min-xl:gap-[1.5rem] xl:gap-[2.5rem] lg:gap-[3.5rem] md:gap-[2rem] sm:grid-cols-2 d-sm:gap-2">
        {item2?.map((e: any, index: number) => (
          <div key={index} className="col-span-1">
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardLayout;

const Title = ({ title }: any) => {
  return (
    <div className="w-full justify-between px-[2rem] min-dd-sm:px-[2rem] sm:px-[0.5rem] py-[1.5rem] gap-3 flex items-center">
      <h1 className="font-bold min-lg:text-[18px] flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-bookmark-star"
          viewBox="0 0 16 16"
        >
          <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z" />
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
        </svg>{" "}
        {title ?? "Title Here"}
      </h1>
      <h1 className="flex gap-2 text-sm underline text-blue-600 cursor-pointer items-center">
        View All{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </h1>
      {/* <div className=' min-lg:w-[85%] md:w-[75%] d-sm:w-[60%] mt-1 h-[1.2px] bg-gray-300'>

            </div> */}
    </div>
  );
};
