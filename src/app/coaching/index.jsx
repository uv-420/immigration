"use client";

import { Img, Heading, Button } from "../../components";
import CoachingRowview from "../../components/CoachingRowview";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
import React, { Suspense } from "react";

export default function CoachingPage() {
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
              <div className="w-full">
                <div className="flex flex-col items-center">
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
                  <div className="relative mt-[-26px] flex py-[7px]">
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
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[156px] md:py-5">
            <div className="container-xs mb-[31px] flex md:p-5">
              <div className="flex flex-col items-start">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Coaching
                </Heading>
                <div className="relative mt-[-9px] flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px] self-start" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Coaching
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div className="flex flex-col gap-[120px] md:gap-[90px] sm:gap-[60px]">
            <div className="grid grid-cols-3 justify-center gap-[30px] md:grid-cols-2 sm:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {[...Array(9)].map((d, index) => (
                  <CoachingRowview key={"coaching" + index} />
                ))}
              </Suspense>
            </div>
            <div className="flex justify-between gap-5 md:flex-col">
              <Img
                src="img_company_logo_green_400.svg"
                width={171}
                height={48}
                alt="companylogo"
                className="h-[48px] w-[13%] md:w-full"
              />
              <Img
                src="img_company_logo_gray_900.svg"
                width={108}
                height={48}
                alt="companylogo"
                className="h-[48px] w-[8%] md:w-full"
              />
              <Img
                src="img_company_logo_blue_gray_800.svg"
                width={114}
                height={48}
                alt="companylogo"
                className="h-[48px] w-[9%] md:w-full"
              />
              <div className="flex w-[10%] items-end justify-center gap-1.5 md:w-full">
                <Img src="img_lock_red_300.svg" width={26} height={24} alt="lock" className="mb-[9px] mt-3 h-[24px]" />
                <Img
                  src="img_settings_black_900.svg"
                  width={92}
                  height={17}
                  alt="settings"
                  className="mb-3 h-[17px] w-[78%]"
                />
              </div>
              <Img
                src="img_company_logo_cyan_700.svg"
                width={144}
                height={48}
                alt="companylogo"
                className="h-[48px] w-[11%] md:w-full"
              />
            </div>
          </div>
        </div>
        <Footer1 className="self-stretch" />
      </div>
    </div>
  );
}
