"use client";

import { Button, Img, Text, Heading } from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
import React from "react";

export default function PricingtablesPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [menuOpen3, setMenuOpen3] = React.useState(false);
  const [menuOpen4, setMenuOpen4] = React.useState(false);
  const [menuOpen5, setMenuOpen5] = React.useState(false);
  const [menuOpen6, setMenuOpen6] = React.useState(false);

  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[110px] md:gap-[82px] sm:gap-[55px]">
        <div className="flex w-[94%] flex-col gap-[30px] md:w-full md:p-5">
          <header className="relative flex items-center justify-between gap-5 md:flex-col">
            <Img
              src="img_header_logo.png"
              width={157}
              height={41}
              alt="headerlogo"
              className="h-[41px] w-[157px] object-contain"
            />
            <div className="flex w-[40%] justify-center md:w-full">
              <div className="relative h-[26px] w-full md:h-auto">
                <Img
                  src="img_arrow_left.svg"
                  width={8}
                  height={10}
                  alt="arrowright"
                  className="ml-[55px] h-[10px] md:ml-0"
                />
                <ul className="absolute bottom-0 left-0 right-0 top-0 !m-auto flex h-max w-max items-center gap-[34px] md:relative md:flex-col">
                  <li
                    onMouseLeave={() => {
                      setMenuOpen(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen(true);
                    }}
                  >
                    <div className="flex w-[51px] cursor-pointer text-[15px] font-bold uppercase tracking-[1.40px] text-teal-900">
                      Home
                    </div>
                    {menuOpen ? <MegaMenu1 /> : null}
                  </li>
                  <li
                    onMouseLeave={() => {
                      setMenuOpen1(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen1(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center gap-1">
                      <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
                        About Us
                      </Heading>
                      <Img
                        src="img_arrow_left.svg"
                        width={8}
                        height={10}
                        alt="arrowright"
                        className="h-[10px] w-[8px]"
                      />
                    </div>
                    {menuOpen1 ? <MegaMenu1 /> : null}
                  </li>
                  <li
                    onMouseLeave={() => {
                      setMenuOpen2(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen2(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center gap-1">
                      <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
                        Services
                      </Heading>
                      <Img
                        src="img_arrow_left.svg"
                        width={8}
                        height={10}
                        alt="arrowright"
                        className="h-[10px] w-[8px]"
                      />
                    </div>
                    {menuOpen2 ? <MegaMenu1 /> : null}
                  </li>
                  <li
                    onMouseLeave={() => {
                      setMenuOpen3(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen3(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center gap-1">
                      <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
                        Projects
                      </Heading>
                      <Img
                        src="img_arrow_left.svg"
                        width={8}
                        height={10}
                        alt="arrowright"
                        className="h-[10px] w-[8px]"
                      />
                    </div>
                    {menuOpen3 ? <MegaMenu1 /> : null}
                  </li>
                  <li
                    onMouseLeave={() => {
                      setMenuOpen4(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen4(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center gap-1">
                      <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
                        Blog
                      </Heading>
                      <Img
                        src="img_arrow_left.svg"
                        width={8}
                        height={10}
                        alt="arrowright"
                        className="h-[10px] w-[8px]"
                      />
                    </div>
                    {menuOpen4 ? <MegaMenu1 /> : null}
                  </li>
                  <li
                    onMouseLeave={() => {
                      setMenuOpen5(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen5(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center gap-1">
                      <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
                        Page
                      </Heading>
                      <Img
                        src="img_arrow_left.svg"
                        width={8}
                        height={10}
                        alt="arrowright"
                        className="h-[10px] w-[8px]"
                      />
                    </div>
                    {menuOpen5 ? <MegaMenu1 /> : null}
                  </li>
                  <li
                    onMouseLeave={() => {
                      setMenuOpen6(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen6(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center gap-1">
                      <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
                        Contact
                      </Heading>
                      <Img
                        src="img_arrow_left.svg"
                        width={8}
                        height={10}
                        alt="arrowright"
                        className="h-[10px] w-[8px]"
                      />
                    </div>
                    {menuOpen6 ? <MegaMenu1 /> : null}
                  </li>
                </ul>
              </div>
            </div>
            <Button
              size="6xl"
              shape="round"
              rightIcon={<Img src="img_save.svg" width={14} height={16} alt="save" className="h-[16px] w-[14px]" />}
              className="min-w-[223px] gap-2.5 font-semibold sm:px-5"
            >
              Get An Appointment
            </Button>
          </header>
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[156px] md:py-5">
            <div className="container-xs mb-[31px] flex md:p-5">
              <div className="flex flex-col items-start">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Pricing Tables
                </Heading>
                <div className="relative mt-[-9px] flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px] self-start" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Pricing Tables
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div className="grid grid-cols-3 justify-center gap-[30px] md:grid-cols-2 sm:grid-cols-1">
            <div className="flex w-full cursor-pointer flex-col items-start rounded-[20px] border border-solid border-gray-300 bg-white-A700 pb-10 hover:shadow-xs sm:pb-5">
              <div className="flex justify-center self-stretch rounded-tl-[20px] rounded-tr-[20px] bg-light_green-50_01 p-7 sm:p-5">
                <Heading size="xl" as="h2" className="capitalize">
                  Stater Plan
                </Heading>
              </div>
              <div className="mt-[29px] flex flex-wrap items-center gap-[5px] self-center">
                <Heading size="3xl" as="h3">
                  $19
                </Heading>
                <Heading as="h4" className="self-end">
                  /mo
                </Heading>
              </div>
              <div className="mt-[27px] h-px w-[80%] self-center bg-gray-300" />
              <div className="ml-[39px] mt-[29px] flex w-[45%] flex-col gap-2.5 md:ml-0 md:w-full md:p-5">
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="mistakes_to" className="h-[16px]" />
                  <Text as="p">Mistakes To Avoid</Text>
                </div>
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="image" className="h-[16px]" />
                  <Text as="p" className="self-end">
                    Your Startup
                  </Text>
                </div>
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="knew_about" className="h-[16px]" />
                  <Text as="p">Knew About Fonts</Text>
                </div>
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="knew_about" className="h-[16px]" />
                  <Text as="p">Knew About Fonts</Text>
                </div>
              </div>
              <Button
                size="6xl"
                variant="outline"
                shape="round"
                rightIcon={
                  <Img
                    src="img_arrow_left.svg"
                    width={14}
                    height={14}
                    alt="arrow_right"
                    className="h-[14px] w-[14px]"
                  />
                }
                className="ml-10 mt-10 min-w-[142px] gap-2.5 font-semibold md:ml-0 sm:px-5"
              >
                Buy Plan
              </Button>
            </div>
            <div className="flex w-full cursor-pointer flex-col items-start rounded-[20px] border border-solid border-gray-300 bg-white-A700 pb-[39px] shadow-xs hover:shadow-xs sm:pb-5">
              <div className="flex justify-center self-stretch rounded-tl-[20px] rounded-tr-[20px] bg-light_green-50_01 p-7 sm:p-5">
                <Heading size="xl" as="h5" className="capitalize">
                  Basic Plan
                </Heading>
              </div>
              <div className="mt-[29px] flex flex-wrap items-center gap-[5px] self-center">
                <Heading size="3xl" as="h6">
                  $29
                </Heading>
                <Heading as="h5" className="self-end">
                  /mo
                </Heading>
              </div>
              <div className="mt-[27px] h-px w-[80%] self-center bg-gray-300" />
              <div className="ml-[39px] mt-[29px] flex w-[45%] flex-col gap-2.5 md:ml-0 md:w-full md:p-5">
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p">Mistakes To Avoid</Text>
                </div>
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p" className="self-end">
                    Your Startup
                  </Text>
                </div>
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p">Knew About Fonts</Text>
                </div>
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p">Knew About Fonts</Text>
                </div>
              </div>
              <Button
                size="6xl"
                shape="round"
                rightIcon={<Img src="img_save.svg" width={14} height={14} alt="save" className="h-[14px] w-[14px]" />}
                className="ml-10 mt-10 min-w-[142px] gap-2.5 font-semibold md:ml-0 sm:px-5"
              >
                Buy Plan
              </Button>
            </div>
            <div className="flex w-full cursor-pointer flex-col rounded-[20px] border border-solid border-gray-300 bg-white-A700 hover:shadow-xs">
              <div className="mb-[38px] flex flex-col items-start">
                <Heading
                  size="xl"
                  as="h3"
                  className="rounded-tl-[20px] rounded-tr-[20px] bg-light_green-50_01 px-[35px] py-[29px] capitalize sm:p-5"
                >
                  Premium Plan
                </Heading>
                <div className="mt-[29px] flex flex-wrap items-center gap-[5px] self-center">
                  <Heading size="3xl" as="h1">
                    $89
                  </Heading>
                  <Heading as="h5" className="self-end">
                    /mo
                  </Heading>
                </div>
                <div className="ml-[38px] mt-[57px] flex w-[45%] flex-col gap-2.5 md:ml-0 md:w-full">
                  <div className="flex items-center gap-3.5">
                    <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                    <Text as="p">Mistakes To Avoid</Text>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                    <Text as="p" className="self-end">
                      Your Startup
                    </Text>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                    <Text as="p">Knew About Fonts</Text>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                    <Text as="p">Knew About Fonts</Text>
                  </div>
                </div>
                <Button
                  size="6xl"
                  variant="outline"
                  shape="round"
                  rightIcon={
                    <Img
                      src="img_arrow_left.svg"
                      width={14}
                      height={14}
                      alt="arrow_right"
                      className="h-[14px] w-[14px]"
                    />
                  }
                  className="ml-[38px] mt-10 min-w-[142px] gap-2.5 font-semibold md:ml-0 sm:px-5"
                >
                  Buy Plan
                </Button>
              </div>
            </div>
            <div className="flex w-full cursor-pointer flex-col items-start rounded-[20px] border border-solid border-gray-300 bg-white-A700 pb-10 hover:shadow-xs sm:pb-5">
              <div className="flex justify-center self-stretch rounded-tl-[20px] rounded-tr-[20px] bg-light_green-50_01 p-[25px] sm:p-5">
                <Heading size="xl" as="h3" className="mt-[7px] capitalize">
                  Popular Plan
                </Heading>
              </div>
              <div className="mt-[29px] flex flex-wrap items-center gap-[5px] self-center">
                <Heading size="3xl" as="h1">
                  $49
                </Heading>
                <Heading as="h5" className="self-end">
                  /mo
                </Heading>
              </div>
              <div className="mt-[27px] h-px w-[80%] self-center bg-gray-300" />
              <div className="ml-[39px] mt-[29px] flex w-[45%] flex-col gap-2.5 md:ml-0 md:w-full md:p-5">
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p">Mistakes To Avoid</Text>
                </div>
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p" className="self-end">
                    Your Startup
                  </Text>
                </div>
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p">Knew About Fonts</Text>
                </div>
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p">Knew About Fonts</Text>
                </div>
              </div>
              <Button
                size="6xl"
                variant="outline"
                shape="round"
                rightIcon={
                  <Img
                    src="img_arrow_left.svg"
                    width={14}
                    height={14}
                    alt="arrow_right"
                    className="h-[14px] w-[14px]"
                  />
                }
                className="ml-10 mt-10 min-w-[142px] gap-2.5 font-semibold md:ml-0 sm:px-5"
              >
                Buy Plan
              </Button>
            </div>
            <div className="flex w-full cursor-pointer flex-col items-start gap-8 rounded-[20px] border border-solid border-gray-300 bg-white-A700 pb-[39px] shadow-xs hover:shadow-xs sm:pb-5">
              <div className="flex justify-center self-stretch rounded-tl-[20px] rounded-tr-[20px] bg-light_green-50_01 p-7 sm:p-5">
                <Heading size="xl" as="h3" className="capitalize">
                  Master Plan
                </Heading>
              </div>
              <div className="flex w-[80%] flex-col items-center gap-[27px] self-center md:w-full md:p-5">
                <div className="flex flex-wrap items-center gap-[5px]">
                  <Heading size="3xl" as="h1">
                    $57
                  </Heading>
                  <Heading as="h5" className="self-end">
                    /mo
                  </Heading>
                </div>
                <div className="h-px w-full self-stretch bg-gray-300" />
              </div>
              <div className="ml-[39px] flex w-[45%] flex-col gap-2.5 md:ml-0 md:w-full md:p-5">
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p">Mistakes To Avoid</Text>
                </div>
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p" className="self-end">
                    Your Startup
                  </Text>
                </div>
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p">Knew About Fonts</Text>
                </div>
                <div className="flex items-center gap-3.5">
                  <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p">Knew About Fonts</Text>
                </div>
              </div>
              <Button
                size="6xl"
                variant="outline"
                shape="round"
                rightIcon={
                  <Img
                    src="img_arrow_left.svg"
                    width={14}
                    height={14}
                    alt="arrow_right"
                    className="h-[14px] w-[14px]"
                  />
                }
                className="ml-10 min-w-[142px] gap-2.5 font-semibold md:ml-0 sm:px-5"
              >
                Buy Plan
              </Button>
            </div>
            <div className="flex w-full cursor-pointer flex-col rounded-[20px] border border-solid border-gray-300 bg-white-A700 hover:shadow-xs">
              <div className="mb-[38px] flex flex-col items-start">
                <Button
                  color="light_green_50_01"
                  size="8xl"
                  className="w-full rounded-tl-[20px] rounded-tr-[20px] font-semibold capitalize !text-teal-900 sm:px-5"
                >
                  Gold Plan
                </Button>
                <div className="mt-[29px] flex flex-wrap items-center gap-[5px] self-center">
                  <Heading size="3xl" as="h1">
                    $99
                  </Heading>
                  <Heading as="h5" className="self-end">
                    /mo
                  </Heading>
                </div>
                <div className="ml-[38px] mt-[57px] flex w-[45%] flex-col gap-2.5 md:ml-0 md:w-full">
                  <div className="flex items-center gap-3.5">
                    <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                    <Text as="p">Mistakes To Avoid</Text>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                    <Text as="p" className="self-end">
                      Your Startup
                    </Text>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                    <Text as="p">Knew About Fonts</Text>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                    <Text as="p">Knew About Fonts</Text>
                  </div>
                </div>
                <Button
                  size="6xl"
                  variant="outline"
                  shape="round"
                  rightIcon={
                    <Img
                      src="img_arrow_left.svg"
                      width={14}
                      height={14}
                      alt="arrow_right"
                      className="h-[14px] w-[14px]"
                    />
                  }
                  className="ml-[38px] mt-10 min-w-[142px] gap-2.5 font-semibold md:ml-0 sm:px-5"
                >
                  Buy Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="self-stretch" />
      </div>
    </div>
  );
}
