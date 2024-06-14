import { Text, Heading, Img } from "./..";
import React from "react";

export default function CoachingDetailsColumnsafety({
  safetyguidestext = "Safety Guides",
  loremipsumtext = "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit",
  safetyguidestext1 = "Safety Guides",
  loremipsumtext1 = "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full sm:w-full gap-[34px]`}>
      <div className="flex flex-col gap-2.5 self-stretch">
        <div className="flex items-start gap-2.5">
          <Img src="img_checkmark.svg" width={14} height={16} alt="safety_guides" className="h-[16px]" />
          <Heading size="md" as="h6">
            {safetyguidestext}
          </Heading>
        </div>
        <Text as="p" className="leading-[30px] !text-gray-600">
          {loremipsumtext}
        </Text>
      </div>
      <div className="flex flex-col gap-2.5 self-stretch">
        <div className="flex items-start gap-2.5">
          <Img src="img_checkmark.svg" width={14} height={16} alt="safety_guides" className="h-[16px]" />
          <Heading size="md" as="h6">
            {safetyguidestext1}
          </Heading>
        </div>
        <Text as="p" className="leading-[30px] !text-gray-600">
          {loremipsumtext1}
        </Text>
      </div>
    </div>
  );
}
