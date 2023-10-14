import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"


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
      <div className="w-1/2 mx-auto my-10">
        <Slider {...settings}>
          {images.map((image:any, index:number) => (
            count++,
            <div key={index}>
              <p className="text-center text-2xl font-bold">Step {count}</p>
              <AlertDialog>
                <AlertDialogTrigger className="cursor-pointer">
                  <Image
                    src={image}
                    alt="Steps"
                    className="mx-auto"
                  />
                </AlertDialogTrigger>
                <AlertDialogContent className="">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Step {count}</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogDescription>
                    <Image
                      src={image}
                      alt="Steps"
                      className="mx-auto w-screen"
                    />
                  </AlertDialogDescription>
                  <AlertDialogFooter>
                    <AlertDialogCancel>
                      <Button variant='destructive'>Gotcha!</Button>
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}