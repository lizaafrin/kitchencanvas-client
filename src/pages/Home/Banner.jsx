import React from "react";
import banner_1 from "../../assets/food_banner_1.jpg";
import banner_2 from "../../assets/food_banner_2.jpg";
import banner_3 from "../../assets/food_banner_3.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner_1}), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,4))`,
        backgroundBlendMode: "overlay",
      }}
      className="bg-cover bg-center min-h-screen text-white"
    >
      <div className="flex justify-between gap-10 w-full container mx-auto py-16 items-center">
        <div className="w-2/5">
          <h2 className="text-white text-6xl leading-tight tracking-tighter font-bold">
            <span className="text-red-800">COOKING </span>IS A PIECE OF CAKE
          </h2>
          <p className="text-white py-7">
            Discover the art of cooking with our expert chefs and culinary
            enthusiasts. From recipes to techniques, our website offers
            everything you need to enhance your culinary skills...
          </p>
          <button className="bg-amber-500 text-black px-6 py-2 rounded-md">
            Contact Us{" "}
            <FaLongArrowAltRight className="inline-block"></FaLongArrowAltRight>{" "}
          </button>
        </div>
        <div className="w-3/5 pb-6">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={banner_3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={banner_2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={banner_3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={banner_2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={banner_3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={banner_2}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
