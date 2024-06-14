"use client";

import { Text, Heading, Img, Button } from "../../components";
import Footer1 from "../../components/Footer1";
import Header1 from "../../components/Header1";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function FAQPage() {
  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[110px] md:gap-[82px] sm:gap-[55px]">
        <div className="flex w-[94%] flex-col gap-[30px] md:w-full md:p-5">
          <Header1 />
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[151px] md:py-5">
            <div className="container-xs mb-9 flex md:p-5">
              <div className="flex w-[14%] flex-col items-start md:w-full">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  FAQ
                </Heading>
                <div className="relative mt-[-3px] flex flex-wrap items-center gap-[15px] self-stretch">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px] self-start" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    FAQ
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div className="flex flex-col gap-[120px] md:gap-[90px] sm:gap-[60px]">
            <div className="flex items-center gap-[30px] md:flex-col">
              <Accordion preExpanded={[0]} className="flex w-full flex-col gap-[29px]">
                {[...Array(5)].map((_, i) => (
                  <AccordionItem uuid={i} key={`expandablelistw${i}`}>
                    <div className="flex flex-1 flex-col rounded-[20px] bg-light_green-50_01 p-[30px] shadow-xs sm:p-5">
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {(props) => (
                              <>
                                <div className="relative z-[1] flex items-start justify-between gap-5 sm:flex-col">
                                  <Heading size="md" as="h2">
                                    What is the purpose of a visa?
                                  </Heading>
                                  {props?.expanded ? (
                                    <Button size="md" className="w-[40px] rounded-[20px]">
                                      <Img src="img_arrow_up.svg" width={16} height={16} />
                                    </Button>
                                  ) : (
                                    <Button
                                      color="light_green_50_01"
                                      size="md"
                                      shape="round"
                                      className="mr-1.5 w-[40px] !rounded-[20px] sm:mr-0"
                                    >
                                      <Img src="img_arrow_right.svg" width={8} height={16} />
                                    </Button>
                                  )}
                                </div>
                              </>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="relative mt-[-2px] flex w-[84%] md:w-full">
                          <Text as="p" className="w-full leading-[30px] !text-gray-600">
                            Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever
                          </Text>
                        </div>
                      </AccordionItemPanel>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
              <Accordion className="flex w-full flex-col gap-5">
                {[...Array(6)].map((_, i) => (
                  <AccordionItem uuid={i} key={`expandablelisth${i}`}>
                    <AccordionItemHeading className="w-full">
                      <AccordionItemButton>
                        <AccordionItemState>
                          {(props) => (
                            <>
                              <div className="flex flex-1 items-center justify-between gap-5 rounded-[20px] bg-white-A700 p-6 shadow-xs sm:p-5">
                                <Heading size="md" as="h3" className="mb-1.5 ml-1.5 self-end md:ml-0">
                                  How long does it take to process a visa application?
                                </Heading>
                                <Button
                                  color="light_green_50_01"
                                  size="md"
                                  shape="round"
                                  className="mr-1.5 w-[40px] !rounded-[20px] md:mr-0"
                                >
                                  <Img src="img_arrow_right.svg" width={8} height={16} />
                                </Button>
                              </div>
                            </>
                          )}
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div>Dummy Content</div>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
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
            <div>
              <div className="flex gap-[30px] md:flex-col">
                <div className="h-[608px] w-[33%] rounded-[20px] bg-blue_gray-100" />
                <div className="flex flex-1 flex-col gap-[30px] md:self-stretch">
                  <div className="flex items-center rounded-[20px] bg-white-A700 pl-[60px] md:flex-col md:pl-5">
                    <div className="flex flex-1 flex-col items-start gap-[21px] md:self-stretch">
                      <div className="flex flex-col items-center justify-center rounded-[40px] bg-light_green-A700 p-[17px]">
                        <Img
                          src="img_050_worldwide.svg"
                          width={45}
                          height={45}
                          alt="050worldwide"
                          className="h-[45px] w-[45px]"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-[23px] self-stretch">
                        <div className="flex flex-col items-start gap-2.5 self-stretch">
                          <Heading as="h4">Get our best offers quickly</Heading>
                          <Text as="p" className="w-full leading-[30px] !text-gray-600">
                            Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the
                            industry&#39;s standard dummy
                          </Text>
                        </div>
                        <Button
                          color="gray_300"
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
                          className="min-w-[158px] gap-2.5 font-semibold !text-teal-900 sm:px-5"
                        >
                          Contact us
                        </Button>
                      </div>
                    </div>
                    <Img
                      src="img_rectangle_5354.svg"
                      width={317}
                      height={363}
                      alt="image"
                      className="h-[363px] w-[40%] rounded-[20px] md:w-full"
                    />
                  </div>
                  <div className="flex justify-between gap-5 rounded-[20px] bg-light_green-A700 p-[59px] md:flex-col md:p-5">
                    <div className="flex flex-col items-start gap-[9px]">
                      <Heading size="3xl" as="h5" className="!text-white-A700">
                        10k+
                      </Heading>
                      <Text as="p" className="!text-white-A700">
                        Complete project
                      </Text>
                    </div>
                    <div className="flex w-[73%] items-center justify-between gap-5 md:w-full sm:flex-col">
                      <div className="flex flex-col items-start gap-[7px]">
                        <Heading size="3xl" as="h6" className="!text-white-A700">
                          20+
                        </Heading>
                        <Text as="p" className="!text-white-A700">
                          Team member
                        </Text>
                      </div>
                      <div className="flex flex-col items-start gap-[9px]">
                        <Heading size="3xl" as="h1" className="!text-white-A700">
                          5k+
                        </Heading>
                        <Text as="p" className="!text-white-A700">
                          Winning award
                        </Text>
                      </div>
                      <div className="flex flex-col items-start gap-[9px]">
                        <Heading size="3xl" as="h1" className="!text-white-A700">
                          100+
                        </Heading>
                        <Text as="p" className="!text-white-A700">
                          Complete project
                        </Text>
                      </div>
                    </div>
                  </div>
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
