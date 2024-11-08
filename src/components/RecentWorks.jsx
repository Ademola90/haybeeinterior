import React, { useRef } from "react";
import wallunit from "../assets/haybeeseven.jpg";
import room from "../assets/haybeefive.jpg";
import rooms from "../assets/herohaybee.jpg";
import roomone from "../assets/roomone.jpg";
import roomtwo from "../assets/roomtwo.jpg";
import roomthree from "../assets/roomthree.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const RecentWorks = () => {
  const recentWorks = [
    { title: "Wallunit Hanging", image: wallunit },
    { title: "Living Room Design", image: room },
    { title: "Room Design", image: rooms },
    { title: "Room Design", image: roomone },
    { title: "Wall Painting", image: roomtwo },
    { title: "Wall Painting", image: roomthree },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="lg:px-16 md:px-8 px-5 py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          OUR <span className="text-teal-500">RECENT WORKS</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Discover our latest projects that showcase our commitment to quality
          and attention to detail.
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {recentWorks.map((work, index) => (
            <SwiperSlide key={index} className="px-4">
              <div className="relative group overflow-hidden rounded-lg shadow-md">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-[400px] object-cover transform transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal-500 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                  <button className="text-white font-semibold px-4 py-2 bg-teal-600 rounded hover:bg-teal-700">
                    Done
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-teal-500 text-white text-center py-2">
                  {work.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-4 space-x-4">
          <button
            ref={prevRef}
            className="text-teal-500 border border-teal-500 px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition"
          >
            Previous
          </button>
          <button
            ref={nextRef}
            className="text-teal-500 border border-teal-500 px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition"
          >
            Next
          </button>
        </div>

        <div className="mt-10">
          <button className="text-teal-500 border border-teal-500 px-6 py-2 rounded hover:bg-teal-500 hover:text-white transition">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
