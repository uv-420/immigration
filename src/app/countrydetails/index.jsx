"use client";

import { Img, Heading, Text, Button } from "../../components";
import Footer from "../../components/Footer";
import MegaMenu1 from "../../components/MegaMenu1";
import Link from "next/link";
import React from "react";

export default function CountrydetailsPage() {
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
                  Countries Details
                </Heading>
                <div className="flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px]" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Countries Details
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div>
            <div className="flex items-start gap-[30px] md:flex-col">
              <div className="flex flex-1 flex-col items-start md:self-stretch">
                <div className="flex flex-col items-start self-stretch">
                  <div className="flex flex-col gap-5 self-stretch">
                    <Heading size="3xl" as="h2" className="leading-[60px] !text-black-900_01">
                      Wonders of Ancient Civilizations: A Journey Through Egypt
                    </Heading>
                    <Text as="p" className="leading-[30px] !text-gray-600">
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                      eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                      eros justo, posu
                    </Text>
                  </div>
                  <Heading size="xl" as="h3" className="mt-8 capitalize !text-black-900_01">
                    Why to choose Egypt?
                  </Heading>
                  <Text as="p" className="mt-[15px] w-full leading-[30px] !text-gray-600">
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam
                    eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                    posu
                  </Text>
                  <Heading size="md" as="h4" className="mt-[34px]">
                    Passport Assistance:
                  </Heading>
                  <Text as="p" className="mt-2.5 w-full leading-[30px] !text-gray-600">
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er
                  </Text>
                  <Heading size="md" as="h5" className="mt-[22px]">
                    Car Rental Services:
                  </Heading>
                  <Text as="p" className="mt-3 w-full leading-[30px] !text-gray-600">
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er
                  </Text>
                  <Heading size="md" as="h6" className="mt-6">
                    Travel Organization:
                  </Heading>
                  <Text as="p" className="mt-2.5 w-full leading-[30px] !text-gray-600">
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er
                  </Text>
                </div>
                <Heading size="xl" as="h3" className="mt-[51px] capitalize !text-black-900_01">
                  Our Service For Egypt
                </Heading>
                <Heading size="md" as="h6" className="mt-[29px]">
                  Cultural Immersion Experiences
                </Heading>
                <Text as="p" className="mt-2.5 w-[87%] leading-[30px] !text-gray-600 md:w-full">
                  Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                  justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra
                </Text>
                <Heading size="md" as="h6" className="mt-6">
                  Educational Travel Programs
                </Heading>
                <Text as="p" className="mt-2.5 w-[87%] leading-[30px] !text-gray-600 md:w-full">
                  Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                  justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra
                </Text>
                <Heading size="md" as="h6" className="mt-6">
                  Volunteer and Service Travel Opportunities
                </Heading>
                <Text as="p" className="mt-2.5 w-[87%] leading-[30px] !text-gray-600 md:w-full">
                  Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                  justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra
                </Text>
              </div>
              <div className="w-[33%] md:w-full">
                <div className="rounded-[20px] border border-solid border-gray-300 bg-white-A700 pb-[42px] md:pb-5">
                  <div className="flex flex-col items-start gap-[23px]">
                    <Heading
                      as="h5"
                      className="rounded-tl-[20px] rounded-tr-[20px] bg-light_green-50_01 pb-7 pl-[30px] pr-[35px] pt-[13px] sm:px-5 sm:pb-5"
                    >
                      Plan Your Trip Now
                    </Heading>
                    <div className="ml-[30px] flex w-[62%] md:ml-0 md:w-full">
                      <div className="flex w-full flex-col">
                        <div className="flex items-center gap-[19px]">
                          <Img src="img_checkmark.svg" width={16} height={22} alt="checkmark" className="h-[22px]" />
                          <Text as="p" className="self-end">
                            (629) 555-0129
                          </Text>
                        </div>
                        <div className="mt-[29px] flex items-start gap-5">
                          <Img
                            src="img_checkmark.svg"
                            width={16}
                            height={16}
                            alt="checkmark"
                            className="h-[16px] w-[16px]"
                          />
                          <Text as="p">info@example.com</Text>
                        </div>
                        <div className="mt-[25px] flex items-center gap-5">
                          <Img src="img_checkmark.svg" width={12} height={22} alt="checkmark" className="h-[22px]" />
                          <Text as="p" className="self-end">
                            6391 Elgin St. Celina, 10299
                          </Text>
                        </div>
                        <div className="mt-11 flex items-center gap-1.5">
                          <Link href="#" className="self-end">
                            <Heading size="xs" as="p" className="!text-black-900_01">
                              Contact Us
                            </Heading>
                          </Link>
                          <Img
                            src="img_arrow_left_teal_900.svg"
                            width={21}
                            height={24}
                            alt="arrowleft"
                            className="h-[24px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-24 flex flex-col items-start gap-5">
                  <Heading size="md" as="h6">
                    Find Country
                  </Heading>
                  <div className="flex items-center justify-between gap-5 self-stretch rounded-[20px] border-2 border-solid border-gray-300 bg-white-A700 p-4">
                    <Text as="p" className="ml-[13px] self-end !text-gray-600 md:ml-0">
                      Select country name
                    </Text>
                    <Img
                      src="img_arrow_left.svg"
                      width={10}
                      height={20}
                      alt="arrowright"
                      className="mr-[13px] h-[20px] md:mr-0"
                    />
                  </div>
                </div>
                <div className="mt-[30px] rounded-bl-[20px] rounded-br-[20px] bg-white-A700 p-10 shadow-xs sm:p-5">
                  <div className="flex flex-col gap-5">
                    <div>
                      <div className="flex flex-col gap-5">
                        <div className="flex items-start justify-between gap-5">
                          <Heading as="h5" className="!text-black-900_01">
                            Asia
                          </Heading>
                          <Img
                            src="img_arrow_left.svg"
                            width={7}
                            height={14}
                            alt="arrowright"
                            className="mt-[5px] h-[14px]"
                          />
                        </div>
                        <div className="h-px bg-gray-300" />
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-5">
                      <Heading as="h5" className="!text-black-900_01">
                        Europe
                      </Heading>
                      <Img src="img_arrow_left.svg" width={7} height={14} alt="arrowright" className="h-[14px]" />
                    </div>
                    <div className="h-px bg-gray-300" />
                    <div className="flex items-start justify-between gap-5">
                      <Heading as="h5" className="!text-light_green-A700">
                        North America
                      </Heading>
                      <Img
                        src="img_arrow_left.svg"
                        width={7}
                        height={14}
                        alt="arrowright"
                        className="mt-[5px] h-[14px]"
                      />
                    </div>
                    <div>
                      <div className="flex flex-col gap-5">
                        <div className="h-px bg-gray-300" />
                        <div className="flex items-start justify-between gap-5">
                          <Heading as="h5" className="!text-black-900_01">
                            Australia
                          </Heading>
                          <Img
                            src="img_arrow_left.svg"
                            width={7}
                            height={14}
                            alt="arrowright"
                            className="mt-[5px] h-[14px]"
                          />
                        </div>
                        <div className="h-px bg-gray-300" />
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-5">
                      <Heading as="h5" className="!text-black-900_01">
                        Latine America
                      </Heading>
                      <Img
                        src="img_arrow_left.svg"
                        width={7}
                        height={14}
                        alt="arrowright"
                        className="mt-[5px] h-[14px]"
                      />
                    </div>
                    <div>
                      <div className="flex flex-col gap-5">
                        <div className="h-px bg-gray-300" />
                        <div className="flex items-start justify-between gap-5">
                          <Heading as="h5" className="!text-black-900_01">
                            Africa
                          </Heading>
                          <Img
                            src="img_arrow_left.svg"
                            width={7}
                            height={14}
                            alt="arrowright"
                            className="mt-[5px] h-[14px]"
                          />
                        </div>
                      </div>
                    </div>
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
