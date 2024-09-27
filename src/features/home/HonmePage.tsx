import SlideShow from "@/components/SlideShow";
import React from "react";
import CardLayout from "./component/CardLayout";

const HonmePage = () => {
  const card1 = [{}, {}, {}, {},];
  const card2 = [{}, {}, {}, {}];

  return (
    <div className="max-w-[1350px] mx-auto">
      <div className="">
        <SlideShow />
      </div>
      <div>
        <CardLayout
          title1="BEST SELLERS"
          item1={card1}
          title2="Time Dea"
          item2={card2}
        />
      </div>
    </div>
  );
};

export default HonmePage;
