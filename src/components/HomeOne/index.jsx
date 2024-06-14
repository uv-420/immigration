import { Text, Img, Heading } from "./..";
import React from "react";

export default function HomeOne({
  country = "Canada",
  mistakestoavoidtext = "Mistakes To Avoid",
  yourstartuptext = "Your Startup",
  knewaboutfontstext = "Knew About Fonts",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start justify-center w-full gap-[21px] p-[29px] sm:p-5 border-gray-300 border border-solid shadow-xs rounded-[20px]`}
    >
      <div className="mt-2.5 h-[70px] w-[29%] rounded-[35px] border border-solid border-light_green-A700 bg-blue_gray-100" />
      <Heading as="h5">{country}</Heading>
      <div className="mb-2.5 flex w-[70%] flex-col gap-2.5">
        <div className="flex items-center gap-3.5">
          <Img src="img_arrow_left.svg" width={14} height={16} alt="mistakes_to" className="h-[16px]" />
          <Text as="p" className="!text-gray-600">
            {mistakestoavoidtext}
          </Text>
        </div>
        <div className="flex items-center gap-3.5">
          <Img src="img_arrow_left.svg" width={14} height={16} alt="image" className="h-[16px]" />
          <Text as="p" className="self-end !text-gray-600">
            {yourstartuptext}
          </Text>
        </div>
        <div className="flex items-center gap-3.5">
          <Img src="img_arrow_left.svg" width={14} height={16} alt="knew_about" className="h-[16px]" />
          <Text as="p" className="!text-gray-600">
            {knewaboutfontstext}
          </Text>
        </div>
      </div>
    </div>
  );
}
