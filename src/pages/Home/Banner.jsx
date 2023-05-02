import React from "react";
import pasta_banner from "../../../public/pasta_banner.jpg";
import dumplings from "../../../public/dumpling.jpg";
import soup from "../../../public/hotnSourSoup.jpg";
import chicken from "../../../public/kungfaoChicken.jpg";
import pancake from "../../../public/scallionPancakes.jpg";
import broccoli from "../../../public/beefandbroccoli.jpg";
import tofu from "../../../public/mapoTofu.jpg";
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
        backgroundImage: `url(${pasta_banner}), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,4))`,
        backgroundBlendMode: "overlay",
      }}
      className="bg-cover bg-center min-h-screen text-white"
    >
      <div className="flex justify-between gap-10 w-full container mx-auto py-16 items-center">
        <div className="w-2/5">
          <h2 className="text-white text-6xl leading-tight tracking-tighter font-bold">
            <span className="text-green-500">COOKING </span>IS A PIECE OF CAKE
          </h2>
          <p className="text-white py-7">
            From classic dishes to innovative new recipes, our website is your
            ultimate guide to the world of cooking. Our expert chefs share their
            knowledge and passion for food, giving you the confidence to create
            unforgettable meals in your own kitchen.
          </p>
          <button className="bg-green-500 text-black px-6 py-2 rounded-md hover:bg-green-600">
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
                src={chicken}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={tofu}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={dumplings}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={soup}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={pancake}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={broccoli}
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
