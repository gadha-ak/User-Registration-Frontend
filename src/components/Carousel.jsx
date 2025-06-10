import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ImageCarousel = () => {
  return (
    <div className="w-3/4 mt-8 mx-auto">
      {/* Carousel Box */}
      <div className="rounded shadow-md overflow-hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/ksmart11.png" alt="Team" className="w-full h-auto object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/ksmart12.png" alt="Office" className="w-full h-auto object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/ksmart13.png" alt="Services" className="w-full h-auto object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Separate Sentence Below */}
      <p className="text-sm text-center mt-4 text-gray-600 px-4">
        One integrated platform for all the services you need
      </p>
    </div>
  );
};

export default ImageCarousel;
