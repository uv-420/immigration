import { Text } from "./..";
import React from "react";

export default function TeamDetailsRow({ powerdesign = "Power Design", sixty = "60%", ...props }) {
  return (
    <div {...props} className={`${props.className} flex items-center flex-1`}>
      <div className="flex w-full flex-col gap-1.5">
        <div className="flex flex-wrap justify-between gap-5">
          <Text as="p" className="!text-gray-600">
            {powerdesign}
          </Text>
          <Text as="p" className="!text-gray-600">
            {sixty}
          </Text>
        </div>
        <div className="flex rounded bg-gray-300">
          <div className="h-[8px] w-[68%] rounded bg-light_green-A700" />
        </div>
      </div>
    </div>
  );
}
