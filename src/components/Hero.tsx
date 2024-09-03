// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        // zoom={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href={"/#product"}>
            <div className="w-full">
              <img
                src="/banner-4.png"
                className="w-full lg:h-[90dvh] h-[50dvh]"
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/#product"}>
            <div className="w-full">
              <img
                src="/banner-2.jpg"
                className="w-full lg:h-[90dvh] h-[50dvh]"
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/#product"}>
            <div className="w-full">
              <img
                src="/banner-3.jpg"
                className="w-full lg:h-[90dvh] h-[50dvh]"
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/#product"}>
            <div className="w-full">
              <img
                src="/banner-1.png"
                className="w-full lg:h-[90dvh] h-[50dvh]"
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/#product"}>
            <div className="w-full">
              <img
                src="/banner-5.png"
                className="w-full lg:h-[90dvh] h-[50dvh]"
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/#product"}>
            <div className="w-full">
              <img
                src="/banner-6.png"
                className="w-full lg:h-[90dvh] h-[50dvh]"
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/#product"}>
            <div className="w-full">
              <img
                src="/banner-7.jpg"
                className="w-full lg:h-[90dvh] h-[50dvh]"
                alt=""
              />
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
