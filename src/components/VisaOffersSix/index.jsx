import { Button, Img, Text, Heading } from "./..";
import React from "react";

export default function VisaOffersSix({
  countrytext = "Bangladesh",
  descriptiontext = "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
  applybutton = "Apply Now",
  button3 = "$300.00",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full`}>
      <div className="flex self-stretch rounded-tl-[20px] rounded-tr-[20px] bg-blue_gray-100 p-[30px] sm:p-5">
        <div className="mb-[152px] h-[80px] w-[14%] rounded-[20px] bg-blue_gray-100" />
      </div>
      <div className="flex items-start justify-between gap-5 self-stretch rounded-bl-[20px] rounded-br-[20px] bg-white-A700 p-10 shadow-xs sm:flex-col sm:p-5">
        <div className="flex w-[53%] flex-col items-start sm:w-full">
          <Heading as="h5">{countrytext}</Heading>
          <Text as="p" className="mt-[7px] w-full leading-[30px] !text-gray-600">
            {descriptiontext}
          </Text>
          <Button
            color="white_A700"
            size="6xl"
            shape="round"
            rightIcon={
              <Img src="img_arrow_left.svg" width={14} height={14} alt="arrow_left" className="h-[14px] w-[14px]" />
            }
            className="mt-[30px] min-w-[158px] gap-2.5 border border-solid border-light_green-A700 font-semibold text-teal-900 sm:px-5"
          >
            {applybutton}
          </Button>
        </div>
        <Button
          color="gray_300"
          size="7xl"
          variant="outline"
          className="min-w-[139px] rounded-[20px] font-bold !text-teal-900"
        >
          {button3}
        </Button>
      </div>
    </div>
  );
}
