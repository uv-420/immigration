"use client";

import { Heading, Text, Img, Button } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function VisadetailsPage() {
  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[115px] md:gap-[86px] sm:gap-[57px]">
        <div className="flex w-[94%] flex-col gap-[30px] md:w-full md:p-5">
          <Header className="md:flex-col" />
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[148px] md:py-5">
            <div className="container-xs mb-[39px] flex md:p-5">
              <div className="flex flex-col items-start">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Visa Details
                </Heading>
                <div className="flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px]" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Visa Details
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div>
            <div className="flex items-start gap-[30px] md:flex-col">
              <div className="flex flex-1 flex-col gap-8 md:self-stretch">
                <div className="flex flex-col items-start">
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
                  <div className="mt-5 flex flex-wrap items-end gap-[21px]">
                    <Heading size="md" as="h4">
                      Flight Booking:
                    </Heading>
                    <Text as="p" className="!text-gray-600">
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                    </Text>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-5">
                    <Heading size="md" as="h5">
                      Car Rental Services:
                    </Heading>
                    <Text as="p" className="self-end !text-gray-600">
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                    </Text>
                  </div>
                  <div className="mt-5 flex flex-wrap items-end gap-[21px]">
                    <Heading size="md" as="h6">
                      Travel Planning:
                    </Heading>
                    <Text as="p" className="!text-gray-600">
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[55px] sm:gap-[27px]">
                  <Heading size="xl" as="h3" className="capitalize !text-black-900_01">
                    frequently asked questions
                  </Heading>
                  <Accordion preExpanded={[0]} className="flex flex-col gap-5 self-stretch">
                    {[...Array(4)].map((_, i) => (
                      <AccordionItem uuid={i} key={`expandablelistw${i}`}>
                        <div className="flex flex-1 flex-col items-start gap-5 rounded-[20px] bg-white-A700 pb-7 shadow-xs sm:pb-5">
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {(props) => (
                                  <>
                                    <div className="flex items-center justify-between gap-5 self-stretch rounded-[20px] border border-solid border-gray-300 p-[30px] sm:p-5">
                                      <Heading size="md" as="h6" className="self-end">
                                        Where Wanderlust Meets Reality?
                                      </Heading>
                                      {props?.expanded ? (
                                        <Button
                                          size="xs"
                                          shape="round"
                                          className="mr-2.5 w-[30px] !rounded-[15px] md:mr-0"
                                        >
                                          <Img src="img_save.svg" width={12} height={14} />
                                        </Button>
                                      ) : (
                                        <Button
                                          color="light_green_50_01"
                                          size="xs"
                                          shape="round"
                                          className="w-[30px] !rounded-[15px]"
                                        >
                                          <Img src="img_arrow_left.svg" width={14} height={16} />
                                        </Button>
                                      )}
                                    </div>
                                  </>
                                )}
                              </AccordionItemState>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="ml-[30px] flex w-[70%] md:ml-0 md:w-full md:p-5">
                              <Text as="p" className="w-full leading-[30px] !text-gray-600">
                                It is a long established fact that a reader will be distr acted bioiiy the rea dablea
                                content of a page when looking at its layout Thoiie point of using.It is a long this
                                established fact that a reader
                              </Text>
                            </div>
                          </AccordionItemPanel>
                        </div>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
              <div className="flex w-[33%] flex-col gap-[30px] md:w-full">
                <div className="flex flex-col gap-5 rounded-[20px] bg-light_green-50_01 p-10 sm:p-5">
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
                  <div className="flex flex-col gap-5">
                    <div className="h-px bg-gray-300" />
                    <div className="flex items-start justify-between gap-5">
                      <Heading as="h5" className="!text-black-900_01">
                        Europe
                      </Heading>
                      <Img src="img_arrow_left.svg" width={7} height={14} alt="arrowright" className="h-[14px]" />
                    </div>
                    <div className="h-px bg-gray-300" />
                  </div>
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
                <div className="flex flex-col items-center justify-center rounded-[20px] bg-light_green-50_01 p-[38px] sm:p-5">
                  <Heading as="h5">GET TOUCH</Heading>
                  <Img src="img_call.svg" width={96} height={96} alt="image" className="mt-[30px] h-[96px] w-[96px]" />
                  <Text as="p" className="mt-[35px]">
                    For fast service
                  </Text>
                  <Heading as="h5" className="mt-[17px]">
                    (+888) 123 456 765
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="self-stretch" />
      </div>
    </div>
  );
}
