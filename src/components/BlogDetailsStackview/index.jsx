import { Heading, Text, Img } from "./..";
import React from "react";

export default function BlogDetailsStackview({
  datetext = "October 19, 2022",
  findyourtext = "Find Your Adventure Live  Your Passion",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} h-[85px] md:w-full flex-1 relative md:flex-none`}>
      <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[71%] items-start gap-[15px]">
        <div className="h-[85px] w-[34%] rounded-[20px] bg-blue_gray-100" />
        <div className="flex flex-1 items-center gap-2.5">
          <Img src="img_checkmark.svg" width={11} height={16} alt="october_192022" className="h-[16px]" />
          <Text as="p" className="self-end !text-gray-600">
            {datetext}
          </Text>
        </div>
      </div>
      <Heading size="md" as="h6" className="absolute bottom-[1.00px] right-[0.00px] m-auto w-[73%] leading-7">
        {findyourtext}
      </Heading>
    </div>
  );
}
