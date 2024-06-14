import { Text, Heading, Img } from "./..";
import React from "react";

export default function SuccessStoryCard({
  description = "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
  name = "Albert Flores",
  jobtitle = "Medical Assistant",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-start w-full p-10 sm:p-5 bg-light_green-50_01 cursor-pointer rounded-[20px] hover:shadow-xs`}
    >
      <div className="mb-10 flex w-full flex-col">
        <Img src="img_frame_light_green_a700.svg" width={72} height={55} alt="image" className="h-[55px] w-[13%]" />
        <Text size="lg" as="p" className="mt-5 leading-[50px] !text-gray-600">
          {description}
        </Text>
        <div className="mt-10 flex w-[41%] items-center gap-5 md:w-full">
          <div className="h-[70px] w-[34%] rounded-[35px] bg-blue_gray-100" />
          <div className="flex flex-1 flex-col gap-2.5">
            <Heading as="h5">{name}</Heading>
            <Text as="p" className="!text-teal-900_b2">
              {jobtitle}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
