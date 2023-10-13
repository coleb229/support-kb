import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function ImageTabs({images}:any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  let count = 0

  return (
    <div className="w-full rounded-lg bg-slate-300 my-4">
      <div className="w-2/3 mx-auto my-10">
        <Slider {...settings}>
          {images.map((image:any, index:number) => (
            count++,
            <div key={index}>
              <p className="text-center text-2xl font-bold">Step {count}</p>
              <Image
                src={image}
                alt="Meal Period"
                width={700}
                className="mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}