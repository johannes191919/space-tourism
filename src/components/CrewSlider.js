import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./CrewSlider.css";
import CrewData from "../CrewData";
import CrewItem from "./CrewItem";

function CrewSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (<>
    <Swiper
      pagination={pagination}
      modules={[Pagination, EffectCoverflow]}
      className="mySwiper"
      spaceBetween={30}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}>
      {CrewData.map((item) => {
        return <SwiperSlide>
          <CrewItem
            key={item.id}
            bio={item.bio}
            images={item.images}
            name={item.name}
            role={item.role}
          />
        </ SwiperSlide>
      })}
    </Swiper>
  </>
  );
}

export default CrewSlider;