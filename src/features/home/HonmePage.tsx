import SlideShow from "@/components/SlideShow";
import CardLayout from "./component/CardLayout";

const HonmePage = () => {
  const card1 = [{}, {}, {}, {}, {}];
  const card2 = [{}, {}, {}, {}, {}];

  return (
   
     <>
      <div className="max-w-[1590px] mx-auto">
      <div className="min-sm:max-w-[91%] sm:max-w-[100%] mx-auto">
        <SlideShow />
      </div>
      <div>
        <CardLayout
          title1="BEST SELLERS"
          item1={card1}
          title2="Time Deal"
          item2={card2}
        />
      </div>
      <div className="grid grid-cols-2 gap-[3rem] w-full px-[4.5rem] mt-3">
        <img className="h-[23rem]" src="https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fb9330deb-f188-4644-acc0-4ded3ec104b0.png&w=1920&q=100" />
        <img className="h-[23rem]" src="https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F3a9c3150-64cf-4f13-8cbd-cf7d733b2f4f.png&w=1920&q=100" alt="" />
      </div>
     
    </div>
     <div className="h-[30rem] mt-5 w-full bg-black">
     a
     </div>
     </>
  );
};

export default HonmePage;
