import { Img, Button, Text, Heading } from "./..";
import React from "react";

export default function HomeTwo2({
  businessvisa = "Business Visa",
  etpurusduis = "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu ",
  image = "img_group_1000009657.svg",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-full p-5 border-gray-300 border border-solid rounded-[20px]`}
    >
      <div className="flex w-full items-center justify-between gap-5 sm:flex-col">
        <div className="h-[251px] w-[45%] rounded-[20px] bg-blue_gray-100" />
        <div className="flex w-[46%] flex-col items-start sm:w-full">
          <Heading as="h5">{businessvisa}</Heading>
          <Text as="p" className="mt-2.5 w-full leading-[30px] !text-gray-600">
            {etpurusduis}
          </Text>
          <div className="mt-[26px] flex items-start justify-between gap-5 self-stretch">
            <Button variant="outline" className="w-[60px] rounded-[20px] px-[13px]">
              <Img src="img_arrow_left_light_green_a700.svg" width={26} height={31} />
            </Button>
            <Img src={image} width={55} height={55} alt="image" className="h-[55px] w-[55px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
