"use client";

import { Img, Button, Text, Heading } from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
import React from "react";

export default function StorydetailsPage() {
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
              <div className="flex w-full flex-col items-center">
                <ul className="flex items-center gap-8 md:flex-col">
                  <li
                    onMouseLeave={() => {
                      setMenuOpen(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen(true);
                    }}
                  >
                    <div className="flex cursor-pointer items-center gap-1">
                      <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
                        Home
                      </Heading>
                      <Img
                        src="img_arrow_left.svg"
                        width={8}
                        height={10}
                        alt="arrowright"
                        className="h-[10px] w-[8px]"
                      />
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
                    <div className="flex w-[84px] cursor-pointer text-[15px] font-bold uppercase tracking-[1.40px] text-teal-900">
                      Services
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
                    <div className="flex w-[87px] cursor-pointer text-[15px] font-bold uppercase tracking-[1.40px] text-teal-900">
                      Projects
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
                    <div className="flex w-[48px] cursor-pointer text-[15px] font-bold uppercase tracking-[1.40px] text-teal-900">
                      Blog
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
                <div className="relative mt-[-26px] flex w-[43%] justify-between gap-5 md:w-full">
                  <div className="flex flex-1 gap-6">
                    <div className="flex w-full justify-end py-[7px]">
                      <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowright" className="h-[10px]" />
                    </div>
                    <div className="flex w-full justify-end py-[7px]">
                      <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowright" className="h-[10px]" />
                    </div>
                  </div>
                  <div className="flex py-[7px]">
                    <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowright" className="h-[10px]" />
                  </div>
                </div>
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
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[157px] md:py-5">
            <div className="container-xs mb-[31px] flex md:p-5">
              <div className="flex flex-col items-start">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Story Details
                </Heading>
                <div className="relative mt-[-9px] flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px] self-start" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Story Details
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <div className="mt-[5px] flex w-[54%] flex-col items-start gap-[21px] md:w-full">
              <Heading size="3xl" as="h2">
                Visa Got Approved for Eygpt{" "}
              </Heading>
              <div className="flex w-[90%] flex-col md:w-full">
                <Img src="img_thumbs_up.svg" width={95} height={75} alt="thumbsup" className="h-[75px] w-[15%]" />
                <Text as="p" className="mt-[30px] leading-[30px] !text-gray-600">
                  Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                  justo, posuere lobortis viverra laoreet augue mattis fmentum ullamco rper viverra laoreet Aliquam eros
                  justo, posuere loborti viverra laoreet matti ullamc orper posuere viverra .Aliquam eros justo, posu
                  Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                  justo, posuere lobo rtis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros
                  justo, posuere loborti viverra laoreet matti ullamcorper posuere
                </Text>
                <div className="mt-5 flex flex-wrap items-center gap-[21px]">
                  <Heading size="md" as="h3">
                    Visa Applied:
                  </Heading>
                  <Text as="p" className="!text-gray-600">
                    Visa Special
                  </Text>
                </div>
                <div className="mt-[22px] flex flex-wrap items-center gap-5">
                  <Heading size="md" as="h4">
                    Visa Type:
                  </Heading>
                  <Text as="p" className="!text-gray-600">
                    10 years +
                  </Text>
                </div>
                <div className="mt-[21px] flex flex-wrap items-center gap-[21px]">
                  <Heading size="md" as="h5">
                    Approval:
                  </Heading>
                  <Text as="p" className="!text-gray-600">
                    adbs@gmail.com
                  </Text>
                </div>
                <div className="mt-[41px] flex gap-[30px]">
                  <Button
                    size="6xl"
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
                    className="min-w-[180px] gap-2.5 font-semibold !text-teal-900 sm:px-5"
                  >
                    Apply For Visa
                  </Button>
                  <Button size="6xl" variant="outline" shape="round" className="min-w-[186px] font-semibold sm:px-5">
                    Read More Stories
                  </Button>
                </div>
              </div>
            </div>
            <Img
              src="img_image_blue_gray_100.svg"
              width={528}
              height={591}
              alt="image"
              className="h-[591px] w-[41%] md:w-full"
            />
          </div>
        </div>
        <Footer1 className="self-stretch" />
      </div>
    </div>
  );
}
