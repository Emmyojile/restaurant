"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "Always fresh & always cripsy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "We deliver your order wherever you are",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "The Best Pizzas to shaer with your family",
    image: "/slide3.jpg",
  },
];
const Slider = () => {
  const [currentSLide, setCurrentSlide] = useState(2);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //     2000
  //   );

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-blue-700 font-bold ">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSLide].title}
        </h1>
        <button className="bg-blue-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative ">
        <Image
          src={data[currentSLide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
