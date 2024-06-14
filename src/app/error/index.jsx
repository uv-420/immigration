"use client";

import { CloseSVG } from "../../assets/images";
import { Img, Button, Input, Text, Heading } from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
import Link from "next/link";
import React from "react";

export default function ErrorPage() {
  const [searchBarValue12, setSearchBarValue12] = React.useState("");
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
            <div className="flex items-center gap-2.5">
              <Link href="#">
                <Img src="img_objects_teal_900.svg" width={40} height={32} alt="objects" className="h-[32px]" />
              </Link>
              <Heading size="2xl" as="h2" className="tracking-[-1.44px]">
                RouteX
              </Heading>
            </div>
            <div className="flex w-[70%] items-center justify-between gap-5 md:w-full md:flex-col">
              <ul className="flex gap-[34px] md:flex-col">
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
                    <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowright" className="h-[10px] w-[8px]" />
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
                    <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowright" className="h-[10px] w-[8px]" />
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
                    <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowright" className="h-[10px] w-[8px]" />
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
                    <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowright" className="h-[10px] w-[8px]" />
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
                    <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowright" className="h-[10px] w-[8px]" />
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
                    <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowright" className="h-[10px] w-[8px]" />
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
                    <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowright" className="h-[10px] w-[8px]" />
                  </div>
                  {menuOpen6 ? <MegaMenu1 /> : null}
                </li>
              </ul>
              <Button
                size="6xl"
                shape="round"
                rightIcon={<Img src="img_save.svg" width={14} height={16} alt="save" className="h-[16px] w-[14px]" />}
                className="min-w-[223px] gap-2.5 font-semibold sm:px-5"
              >
                Get An Appointment
              </Button>
            </div>
          </header>
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[148px] md:py-5">
            <div className="container-xs mb-[39px] flex md:p-5">
              <div className="flex flex-col items-start">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  404 Error
                </Heading>
                <div className="flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px]" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    404 Error
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs flex flex-col items-center gap-20 md:gap-[60px] md:p-5 sm:gap-10">
          <div className="flex w-[62%] flex-col items-center gap-[60px] md:w-full sm:gap-[30px]">
            <div className="flex flex-col items-center gap-[21px] self-stretch">
              <Heading size="3xl" as="h2" className="w-full text-center leading-[60px]">
                Oopps!Check Your Connection and Try Again
              </Heading>
              <div className="flex w-[89%] flex-col items-center gap-10 md:w-full">
                <Text as="p" className="w-full text-center leading-[30px] !text-gray-600">
                  Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                  posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra
                </Text>
                <Input
                  color="light_green_50_01"
                  shape="round"
                  name="search"
                  placeholder={`Search Here`}
                  value={searchBarValue12}
                  onChange={(e) => setSearchBarValue12(e)}
                  suffix={
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[50%] bg-light_green-A700">
                      {searchBarValue12?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue12("")} height={22} width={16} />
                      ) : (
                        <Img
                          src="img_save.svg"
                          width={16}
                          height={22}
                          alt="save"
                          className="h-[22px] w-[16px] cursor-pointer"
                        />
                      )}
                    </div>
                  }
                  className="w-[88%] gap-[35px] !rounded-[30px] text-gray-600 sm:pl-5"
                />
              </div>
            </div>
            <Button size="6xl" shape="round" className="min-w-[155px] font-semibold sm:px-5">
              Back to Home
            </Button>
          </div>
          <Img
            src="img_frame_blue_gray_100.svg"
            width={1292}
            height={790}
            alt="image"
            className="h-[790px] w-full md:h-auto"
          />
        </div>
        <Footer1 className="self-stretch" />
      </div>
    </div>
  );
}
