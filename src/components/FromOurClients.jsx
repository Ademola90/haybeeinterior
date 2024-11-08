import React, { useRef } from "react";
import wallunit from "../assets/haybeeseven.jpg";
import cus from "../assets/cus.jpg";
import rooms from "../assets/herohaybee.jpg";
import roomone from "../assets/roomone.jpg";
import roomtwo from "../assets/roomtwo.jpg";
import roomthree from "../assets/roomthree.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const FromOurClients = () => {
  const fromOurClients = [
    {
      text: "I am absolutely thrilled with the work Haybee Interior did for my living room. They transformed a simple space into an elegant haven with their creative vision. The blend of modern and traditional African elements is simply stunning",
      name: "Ojo Muhammed",
      img: cus,
    },
    {
      text: "Haybee Interior captured the essence of my heritage while bringing a fresh, contemporary feel to my home. Their attention to detail and quality design exceeded my expectations. I highly recommend their services.",
      name: "Adesina Abiola ",
      img: cus,
    },
    {
      text: "Working with Haybee Interior was an amazing experience. They truly listened to my ideas and helped me create a cozy, yet sophisticated space that reflects my personal style and culture.",
      name: "Salam Opeyemi ",
      img: cus,
    },
    {
      text: "Working with Haybee Interior was an amazing experience. They truly listened to my ideas and helped me create a cozy, yet sophisticated space that reflects my personal style and culture.",
      name: "Salis Olawale",
      img: cus,
    },
    {
      text: "Haybee Interior understands the balance between tradition and modernity. They helped me design my apartment with timeless elegance, incorporating elements of Egyptian art and sleek, minimalist furnishings.",
      name: "Ayeni Joshua",
      img: cus,
    },
    {
      text: "I am so grateful for the team at Haybee Interior! They transformed my space into a tranquil oasis using earthy tones and natural materials that perfectly capture the beauty of East African design.",
      name: "Hassan Tolani ",
      img: cus,
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="lg:px-16 md:px-8 px-5 py-12 bg-main">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-white font-bold uppercase Poppins mb-4">
          From <span className="text-white uppercase"> Our Clients</span>
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-10">
          Discover the range of projects we’ve worked on and see how we bring
          our clients' visions to life with exceptional design and quality.
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
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {fromOurClients.map((clients, index) => (
            <SwiperSlide key={index} className="px-4">
              <div className="relative group overflow-hidden px-4 bg-white rounded-lg shadow-md grid h-[300px] ">
                <div className=" flex items-center  gap-2">
                  <div className=" ">
                    <img className="w-[450px]" src={clients.img} alt="" />
                  </div>
                  <div>
                    <p className=" text-start text-base Satoshi text-[#606060]">
                      {clients.text}
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" Sora">{clients.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-4 space-x-4">
          <button
            ref={prevRef}
            className="text-white border border-teal-500 px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition"
          >
            Previous
          </button>
          <button
            ref={nextRef}
            className="text-white border border-teal-500 px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default FromOurClients;
