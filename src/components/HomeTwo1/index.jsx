import { Text, Img, Heading, Button } from "./..";
import React from "react";

export default function HomeTwo1({
  dynamicproperty2 = "Passport Plus",
  dynamicproperty4 = "Beyond Border Immigration",
  dynamicproperty6 = "Worldwide Visa Assistance",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-full p-[26px] sm:p-5 border-gray-300 border border-solid rounded-[20px]`}
    >
      <div className="flex w-full flex-col gap-5">
        <div className="flex items-center gap-5">
          <Button shape="round" className="w-[60px] px-[15px]">
            <Img src="img_006_browser.svg" width={30} height={30} />
          </Button>
          <Heading as="h5" className="mb-[13px] self-end">
            {dynamicproperty2}
          </Heading>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-3.5">
            <Img src="img_checkmark.svg" width={14} height={16} alt="image" className="h-[16px]" />
            <Text as="p" className="self-end !text-gray-600">
              {dynamicproperty4}
            </Text>
          </div>
          <div className="flex items-center gap-3.5">
            <Img src="img_checkmark.svg" width={14} height={16} alt="image" className="h-[16px]" />
            <Text as="p" className="!text-gray-600">
              {dynamicproperty6}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
