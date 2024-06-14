import { Img, Button, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";
import React from "react";

export default function VisaPage() {
  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[110px] md:gap-[82px] sm:gap-[55px]">
        <div className="flex w-[94%] flex-col gap-[30px] md:w-full md:p-5">
          <Header1 />
          <div className="flex flex-col items-center justify-center rounded-[50px] bg-teal-900_cc py-[149px] md:py-5">
            <div className="container-xs mb-[38px] flex flex-col items-start md:p-5">
              <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                Visa
              </Heading>
              <div className="relative mt-[-1px] flex flex-wrap items-center gap-[15px]">
                <Heading size="md" as="h2" className="!text-white-A700">
                  Home
                </Heading>
                <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px]" />
                <Heading size="md" as="h3" className="!text-white-A700">
                  Visa
                </Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div>
            <div className="grid grid-cols-2 gap-[30px] gap-y-[33px] md:grid-cols-1">
              <div className="flex w-full items-center justify-between gap-5 rounded-[20px] bg-white-A700 p-5 shadow-xs sm:flex-col">
                <div className="h-[251px] w-[45%] rounded-[20px] bg-blue_gray-100 sm:p-5" />
                <div className="mr-5 flex w-[46%] flex-col gap-[26px] md:mr-0 sm:w-full">
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading as="h2">Business Visa</Heading>
                    <Text as="p" className="w-full leading-[30px] !text-gray-600">
                      Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu{" "}
                    </Text>
                  </div>
                  <div className="flex items-start justify-between gap-5">
                    <Button variant="outline" className="w-[60px] rounded-[20px] px-[13px]">
                      <Img src="img_arrow_left_light_green_a700.svg" width={26} height={31} />
                    </Button>
                    <Img
                      src="img_group_1000009657.svg"
                      width={55}
                      height={55}
                      alt="image"
                      className="h-[55px] w-[55px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-5 rounded-[20px] bg-white-A700 p-5 shadow-xs sm:flex-col">
                <div className="h-[251px] w-[45%] rounded-[20px] bg-blue_gray-100 sm:p-5" />
                <div className="mb-[11px] mr-5 flex w-[46%] justify-center self-end md:mr-0 sm:w-full">
                  <div className="flex w-full flex-col gap-[26px]">
                    <div className="flex flex-col items-start gap-[7px]">
                      <Heading as="h3">Working Visa</Heading>
                      <Text as="p" className="w-full leading-[30px] !text-gray-600">
                        Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu{" "}
                      </Text>
                    </div>
                    <div className="flex items-start justify-between gap-5">
                      <Button className="w-[60px] rounded-[20px] px-[13px]">
                        <Img src="img_arrow_left_teal_900.svg" width={26} height={31} />
                      </Button>
                      <Img
                        src="img_group_1000009657_light_green_50_01.svg"
                        width={55}
                        height={55}
                        alt="image"
                        className="h-[55px] w-[55px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-5 rounded-[20px] bg-white-A700 p-5 shadow-xs sm:flex-col">
                <div className="h-[251px] w-[45%] rounded-[20px] bg-blue_gray-100 sm:p-5" />
                <div className="mr-5 flex w-[46%] flex-col gap-[26px] md:mr-0 sm:w-full">
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading as="h4">Student Visa</Heading>
                    <Text as="p" className="w-full leading-[30px] !text-gray-600">
                      Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu{" "}
                    </Text>
                  </div>
                  <div className="flex items-start justify-between gap-5">
                    <Button variant="outline" className="w-[60px] rounded-[20px] px-[13px]">
                      <Img src="img_arrow_left_light_green_a700.svg" width={26} height={31} />
                    </Button>
                    <Img
                      src="img_group_1000009657_teal_900.svg"
                      width={55}
                      height={55}
                      alt="image"
                      className="h-[55px] w-[55px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-5 rounded-[20px] bg-white-A700 p-5 shadow-xs sm:flex-col">
                <div className="h-[251px] w-[45%] rounded-[20px] bg-blue_gray-100 sm:p-5" />
                <div className="mr-5 flex w-[46%] flex-col items-start md:mr-0 sm:w-full">
                  <Heading as="h5">Tourist Visa</Heading>
                  <Text as="p" className="mt-2.5 w-full leading-[30px] !text-gray-600">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu{" "}
                  </Text>
                  <div className="mt-[26px] flex items-start justify-between gap-5 self-stretch">
                    <Button variant="outline" className="w-[60px] rounded-[20px] px-[13px]">
                      <Img src="img_arrow_left_light_green_a700.svg" width={26} height={31} />
                    </Button>
                    <Img src="img_music.svg" width={55} height={55} alt="music" className="h-[55px] w-[55px]" />
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-5 rounded-[20px] bg-white-A700 p-5 shadow-xs sm:flex-col">
                <div className="h-[251px] w-[45%] rounded-[20px] bg-blue_gray-100 sm:p-5" />
                <div className="mr-5 flex w-[46%] flex-col items-start md:mr-0 sm:w-full">
                  <Heading as="h6">Guide Visa</Heading>
                  <Text as="p" className="mt-2.5 w-full leading-[30px] !text-gray-600">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu{" "}
                  </Text>
                  <div className="mt-[26px] flex items-start justify-between gap-5 self-stretch">
                    <Button variant="outline" className="w-[60px] rounded-[20px] px-[13px]">
                      <Img src="img_arrow_left_light_green_a700.svg" width={26} height={31} />
                    </Button>
                    <Img src="img_music.svg" width={55} height={55} alt="music" className="h-[55px] w-[55px]" />
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-5 rounded-[20px] bg-white-A700 p-5 shadow-xs sm:flex-col">
                <div className="h-[251px] w-[45%] rounded-[20px] bg-blue_gray-100 sm:p-5" />
                <div className="mr-5 flex w-[46%] flex-col items-start md:mr-0 sm:w-full">
                  <Heading as="h5">Poor Visa</Heading>
                  <Text as="p" className="mt-2.5 w-full leading-[30px] !text-gray-600">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu{" "}
                  </Text>
                  <div className="mt-[26px] flex items-start justify-between gap-5 self-stretch">
                    <Button variant="outline" className="w-[60px] rounded-[20px] px-[13px]">
                      <Img src="img_arrow_left_light_green_a700.svg" width={26} height={31} />
                    </Button>
                    <Img src="img_menu.svg" width={55} height={55} alt="menu" className="h-[55px] w-[55px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
