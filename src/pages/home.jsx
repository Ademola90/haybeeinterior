import React from "react";
import hero from "../assets/hero.jpeg";
import Button from "../components/buttons";
import Navbar from "../components/navbar/index";
import { useNavigate } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { RiPriceTagFill } from "react-icons/ri";
import { FaPeopleRoof } from "react-icons/fa6";
import intpaint from "../assets/intpaint.jpg";
import epoxyimg from "../assets/epoxyimg.jpg";
import outdoor from "../assets/outdoor.jpg";
import wall from "../assets/wall.jpg";

import RecentWorks from "../components/RecentWorks";
import FromOurClients from "../components/FromOurClients";
import Footer from "../components/Footer";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className=" lg:pl-16 lg:pr-0 md:px-8 px-5 lg:flex md:grid grid justify-center items-center bg-gradient-to-br mt-8 gap-10 ">
      <div className=" lg:w-1/2">
        <div>
          <div className=" grid ">
            <p className="  font-semibold text-[#000] Sora text-6xl">
              Make Your Interior More Minimaistic & Modern
            </p>
          </div>

          <div className=" grid mt-5">
            <p className="  text-[#606060]  lg:w-[450px]">
              Bringing interiors to life, understanding the person or people
              living in a home is far greater need in design.
            </p>
          </div>

          <div className=" lg:flex md:flex block items-center gap-10 mt-10 ">
            {/* <Button
              css={"Soralight cursor-pointer text-main text-base"}
              text="Login"
            /> */}
            <Button
              onClick={() => navigate("/register")}
              text="Sign up"
              css={
                "Soralight cursor-pointer text-base text-[#fff] bg-main px-4 py-2 rounded-md"
              }
            />
          </div>
        </div>
      </div>
      <div className=" lg:w-1/2 ">
        <img className=" rounded-tl-[200px]" src={hero} alt="" />
      </div>
    </div>
  );
};

const WhyHaybee = () => {
  return (
    <div className=" lg:px-16 md:px-8 px-5 mt-16 ">
      <div className=" grid justify-center ">
        <div className=" justify-center grid items-center">
          <p className=" text-center Poppins text-4xl text-[#000] font-black  ">
            Why Choosing Us
          </p>
        </div>
        <div className=" justify-center grid items-center mt-2">
          <p className=" text-center Soralight text-base text-[#606060]  lg:w-[700px] ">
            At Haybee, we transform spaces with precision, style, and
            dedication, bringing your vision to life with expert craftsmanship,
            quality materials, and attention to detail.
          </p>
        </div>
      </div>

      <div className=" grid justify-center items-center mt-5">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {/* Professional */}
          <div className="bg-white grid rounded-lg shadow-md p-8 text-center">
            <div className="text-5xl text-[#000] justify-center grid items-center mb-4">
              <FaUserCheck size={48} />
              {/* Replace with an icon component or SVG */}
            </div>
            <h3 className="text-xl Satoshi font-bold mb-2">
              Professional Expertise
            </h3>
            <p className="text-[#606060] Satoshi mb-4">
              Our team consists of skilled painters and interior designers with
              years of experience, ensuring precision and quality in every
              stroke.
            </p>
            <div className=" justify-center grid">
              <button className="text-main border border-main w-[143px] py-2 rounded hover:bg-main hover:text-white transition">
                READ MORE
              </button>
            </div>
          </div>

          {/* Passionate */}
          <div className="bg-white grid rounded-lg shadow-md p-8 text-center">
            <div className="text-5xl text-[#000] grid justify-center items-center mb-4">
              <RiPriceTagFill size={48} />
              {/* Replace with an icon component or SVG */}
            </div>
            <h3 className="text-xl font-bold Satoshi mb-2">
              Affordable Pricing
            </h3>
            <p className="text-[#606060] Satoshi  mb-4">
              We offer competitive rates without compromising on quality,
              providing exceptional value for your investment.
            </p>
            <div className=" justify-center grid">
              <button className="text-main border border-main w-[143px] py-2 rounded hover:bg-teal-500 hover:text-white transition">
                READ MORE
              </button>
            </div>
          </div>

          {/* Friendly */}
          <div className="bg-white grid rounded-lg shadow-md p-8 text-center">
            <div className="text-5xl text-[#000] grid justify-center items-center mb-4">
              <FaPeopleRoof size={48} />
              {/* Replace with an icon component or SVG */}
            </div>
            <h3 className="text-xl font-bold Satoshi mb-2">
              Customer Satisfaction
            </h3>
            <p className="text-[#606060] Satoshi mb-4">
              Your satisfaction is our top priority. We strive to exceed
              expectations on every project, providing a smooth and enjoyable
              experience.
            </p>
            <div className=" justify-center grid">
              <button className="text-main border border-main w-[143px] py-2 rounded hover:bg-teal-500 hover:text-white transition">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurService = () => {
  const services = [
    {
      title: "Interior & Exterior Painting",
      description:
        "Transform your space with expert interior and exterior painting, enhancing aesthetics and durability.",
      image: intpaint,
    },
    {
      title: "2 Pack Epoxy Floor Finishes",
      description:
        "Achieve a high-gloss, durable finish with 2-pack epoxy, ideal for heavy-traffic areas and long-lasting protection.",
      image: epoxyimg,
    },
    {
      title: "Outdoor Decking Coating",
      description:
        "Protect and beautify your outdoor spaces with our specialized decking coatings, designed to withstand the elements.",
      image: outdoor,
    },
    {
      title: "Wallpaper Hanging",
      description:
        "Add style to your walls with precision wallpaper hanging, providing a seamless, professional finish.",
      image: wall,
    },
  ];

  return (
    <section className="lg:px-16 md:px-8 px-5 py-12 bg-teal-600 text-white mt-16">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-3xl Poppins font-bold mb-4">OUR SERVICES</h2>
        <p className="text-white max-w-2xl Satoshi mx-auto mb-10 text-center lg:w-[800px]">
          We are ready to help you build and also realize the room design that
          you dream of, with our experts and also the best category
          recommendations from us.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white relative grid rounded-lg shadow-md p-6 text-center text-dark"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold Satoshi mb-2">
                {service.title}
              </h3>
              <p className="text-[#606060] mb-4">{service.description}</p>
              <div className=" justify-center grid">
                {" "}
                <button className="text-teal-500 border border-teal-500 w-[143px] py-2 rounded hover:bg-teal-500 hover:text-white transition">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <WhyHaybee />
      <OurService />
      <RecentWorks />
      <FromOurClients />
      <Footer />
    </div>
  );
};

export default Home;
