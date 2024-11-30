import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export default function Swiperrr() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[80%] h-[400px] rounded mb- max-lg:h-[350px] max-md:h-[300px]  max-sm:h-[250px]"
        loop={true}
      >
        <SwiperSlide className=" ">
          <img
            src={img2}
            alt=""
            className="bg-no-repeat bg-center bg-cover h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <img
            src={img3}
            alt=""
            className="bg-no-repeat bg-center bg-cover h-full w-full"
          />
        </SwiperSlide>{" "}
        <SwiperSlide className="bg-red-900">
          <img
            src={img1}
            alt=""
            className="bg-no-repeat bg-center bg-cover h-full w-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
