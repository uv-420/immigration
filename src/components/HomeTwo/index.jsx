import { Text, Heading, Img } from "./..";
import React from "react";

export default function HomeTwo({
  image = "img_050_worldwide.svg",
  text = "Food and Wine Tours",
  text1 = "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full p-10 sm:p-5 border-black-900_19 border border-solid rounded-[20px]`}
    >
      <div className="mt-2.5 flex flex-col items-center rounded-[50px] bg-light_green-A700 p-[27px] sm:p-5">
        <Img src={image} width={45} height={45} alt="050worldwide" className="h-[45px] w-[45px]" />
      </div>
      <Heading as="h5" className="mt-[41px]">
        {text}
      </Heading>
      <Text as="p" className="mb-[29px] mt-5 w-full leading-[30px] !text-gray-600">
        {text1}
      </Text>
    </div>
  );
}
