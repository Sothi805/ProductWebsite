import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const SlideShow = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner min-xl:h-[30rem] xl:h-[25rem] lg:h-[23rem] md:h-[20rem] sm:h-[17rem] d-sm:h-[14rem]">
        <div className="carousel-item active">
          <img
            src="https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff5797ace-79b5-4baf-a92f-f7a77664bf36.webp&w=3840&q=100"
            className="w-full min-xl:h-[30rem] xl:h-[25rem] lg:h-[23rem] md:h-[20rem] sm:h-[17rem] d-sm:h-[14rem]"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F7088f7fb-fe04-414a-b05f-46248b06a5fe.jpg&w=3840&q=100"
            className="w-full min-xl:h-[30rem] xl:h-[25rem] lg:h-[23rem] md:h-[20rem] sm:h-[17rem] d-sm:h-[14rem]"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F7674ed15-ad71-43cf-9a7b-e0ab0c774a25.webp&w=3840&q=100"
            className="w-full min-xl:h-[30rem] xl:h-[25rem] lg:h-[23rem] md:h-[20rem] sm:h-[17rem] d-sm:h-[14rem]"
            alt="..."
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="sm:w-[100px] min-sm:w-[100px] text-white bi bi-chevron-compact-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"
          />
        </svg>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="sm:w-[100px]  min-sm:w-[100px] text-white bi bi-chevron-compact-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"
          />
        </svg>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SlideShow;
