"use client";

import { Img, Heading, Text, Button, TextArea, Input } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function ContactPage() {
  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center">
        <div className="flex w-[94%] flex-col items-center gap-[98px] md:w-full md:gap-[73px] md:p-5 sm:gap-[49px]">
          <div className="flex flex-col gap-[30px] self-stretch">
            <Header className="md:flex-col" />
            <div className="flex flex-col items-center justify-center rounded-[50px] bg-teal-900_cc py-[148px] md:py-5">
              <div className="container-xs mb-[39px] flex flex-col items-start md:p-5">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Contact
                </Heading>
                <div className="flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px]" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Contact
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xs">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <Img src="img_image.svg" width={600} height={671} alt="image" className="h-[671px] w-[47%] md:w-full" />
              <div className="flex w-[49%] flex-col items-start gap-10 md:w-full">
                <div className="flex w-[86%] flex-col gap-[7px] md:w-full">
                  <div className="flex items-start gap-2.5">
                    <Heading size="xs" as="h4" className="uppercase tracking-[1.40px]">
                      Contact Information
                    </Heading>
                    <Img src="img_object.svg" width={13} height={12} alt="object" className="h-[12px] w-[13px]" />
                  </div>
                  <Heading size="3xl" as="h5" className="leading-[60px]">
                    Let Your Wanderlust Guide You
                  </Heading>
                </div>
                <div className="self-stretch rounded-[20px] bg-light_green-50_01 p-10 sm:p-5">
                  <div className="mt-[5px] flex flex-col items-start">
                    <div className="flex w-[68%] flex-wrap justify-between gap-5 md:w-full">
                      <Text as="p">Your Email</Text>
                      <Text as="p">Your Phone</Text>
                    </div>
                    <div className="mt-2 flex gap-[30px] self-stretch sm:flex-col">
                      <Input
                        shape="round"
                        type="email"
                        name="email"
                        placeholder={`Your Email`}
                        suffix={
                          <div className="flex h-[19px] w-[14px] items-center justify-center">
                            <Img
                              src="img_arrow_left.svg"
                              width={14}
                              height={19}
                              alt="arrow_right"
                              className="h-[19px] w-[14px]"
                            />
                          </div>
                        }
                        className="w-full gap-[35px] !rounded-[30px] border border-solid border-gray-300 sm:w-full"
                      />
                      <Input
                        shape="round"
                        type="number"
                        name="phone"
                        placeholder={`Your Phone`}
                        suffix={
                          <div className="flex h-[19px] w-[14px] items-center justify-center">
                            <Img
                              src="img_arrow_left.svg"
                              width={14}
                              height={19}
                              alt="arrow_right"
                              className="h-[19px] w-[14px]"
                            />
                          </div>
                        }
                        className="w-full gap-[35px] !rounded-[30px] border border-solid border-gray-300 sm:w-full"
                      />
                    </div>
                    <Text as="p" className="mt-[25px]">
                      Your Address
                    </Text>
                    <Input
                      shape="round"
                      name="address"
                      placeholder={`Your Address`}
                      suffix={
                        <div className="flex h-[19px] w-[11px] items-center justify-center">
                          <Img
                            src="img_arrow_left.svg"
                            width={11}
                            height={19}
                            alt="arrow_right"
                            className="h-[19px] w-[11px]"
                          />
                        </div>
                      }
                      className="mt-2 gap-[35px] self-stretch !rounded-[30px] border border-solid border-gray-300"
                    />
                    <Text as="p" className="mt-[27px]">
                      Message
                    </Text>
                    <TextArea
                      variant="tarOutlineGray300"
                      name="arrowright"
                      placeholder={`Write Message..`}
                      className="mt-1.5 flex gap-[35px] self-stretch rounded-[30px] !border-gray-300 text-teal-900_99 sm:pb-5"
                    />
                    <Button size="6xl" shape="round" className="mt-5 w-full font-semibold sm:px-5">
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs mt-[118px] md:p-5">
          <Tabs
            className="flex flex-col items-center gap-[60px] sm:gap-[30px]"
            selectedTabClassName="!text-white-A700 bg-light_green-A700 rounded-[20px]"
            selectedTabPanelClassName="relative tab-panel--selected"
          >
            <div className="flex w-[61%] flex-col items-center gap-[30px] md:w-full">
              <div className="flex w-[66%] flex-col items-center gap-[7px] md:w-full">
                <Heading size="xs" as="h2" className="uppercase tracking-[1.40px] !text-light_green-A700">
                  Contact Information
                </Heading>
                <Heading size="3xl" as="h3" className="w-full text-center leading-[60px]">
                  Let Your Wanderlust Guide You
                </Heading>
              </div>
              <TabList className="flex flex-wrap gap-[30px]">
                <Tab className="px-10 py-[17px] text-[22px] font-bold text-teal-900 sm:px-5">Asia</Tab>
                <Tab className="px-10 py-[17px] text-[22px] font-bold text-teal-900 sm:px-5">Europe</Tab>
                <Tab className="px-10 py-[17px] text-[22px] font-bold text-teal-900 sm:px-5">North America</Tab>
                <Tab className="px-10 py-[17px] text-[22px] font-bold text-teal-900 sm:px-5">Australia</Tab>
              </TabList>
            </div>
            {[...Array(4)].map((_, index) => (
              <TabPanel key={`tab-panel${index}`} className="absolute justify-center self-stretch">
                <div className="w-full self-stretch">
                  <div className="flex justify-between gap-5 rounded-[20px] bg-white-A700 p-[60px] shadow-xs md:flex-col md:p-5">
                    <div className="flex w-[48%] items-center justify-between gap-5 md:w-full sm:flex-col">
                      <div className="flex w-[52%] flex-col gap-[26px] self-end sm:w-full">
                        <div className="flex w-[65%] items-start gap-[29px] md:w-full">
                          <Img
                            src="img_checkmark.svg"
                            width={25}
                            height={35}
                            alt="checkmark"
                            className="mt-1.5 h-[35px]"
                          />
                          <div className="flex flex-1 flex-col gap-2.5">
                            <Text as="p" className="!text-gray-600">
                              Requesting A Call:
                            </Text>
                            <Heading size="md" as="h4">
                              (629) 555-0129
                            </Heading>
                          </div>
                        </div>
                        <div className="flex w-[77%] items-start gap-[30px] md:w-full">
                          <Img
                            src="img_checkmark.svg"
                            width={25}
                            height={25}
                            alt="checkmark"
                            className="mt-[13px] h-[25px] w-[25px]"
                          />
                          <div className="flex flex-1 flex-col items-start gap-[13px]">
                            <Text as="p" className="!text-gray-600">
                              E-mail
                            </Text>
                            <Heading size="md" as="h5">
                              info@example.com
                            </Heading>
                          </div>
                        </div>
                        <div className="flex items-start gap-[30px]">
                          <Img
                            src="img_checkmark.svg"
                            width={19}
                            height={35}
                            alt="checkmark"
                            className="mt-[22px] h-[35px]"
                          />
                          <div className="flex flex-1 flex-col items-start gap-2">
                            <Text as="p" className="!text-gray-600">
                              Location
                            </Text>
                            <Heading size="md" as="h6" className="w-full leading-7">
                              6391 Elgin St. Celina, Delaware 10299
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="w-[40%] sm:w-full">
                        <div className="flex items-center justify-between gap-5">
                          <div className="h-full w-px bg-gray-300" />
                          <div className="flex w-[63%] flex-col gap-[21px]">
                            <div className="flex flex-col items-start gap-[5px]">
                              <Text as="p" className="!text-gray-600">
                                Monday
                              </Text>
                              <div className="flex items-center gap-3.5 self-stretch">
                                <Img
                                  src="img_checkmark.svg"
                                  width={20}
                                  height={28}
                                  alt="checkmark"
                                  className="h-[28px]"
                                />
                                <Heading size="md" as="h6" className="self-end">
                                  9 am - 8 pm
                                </Heading>
                              </div>
                            </div>
                            <div className="flex flex-col items-start gap-[7px]">
                              <Text as="p" className="!text-gray-600">
                                Tuesday-Friday
                              </Text>
                              <div className="flex items-center gap-3.5 self-stretch">
                                <Img
                                  src="img_checkmark.svg"
                                  width={20}
                                  height={28}
                                  alt="checkmark"
                                  className="h-[28px]"
                                />
                                <Heading size="md" as="h6" className="self-end">
                                  12 am - 9 pm
                                </Heading>
                              </div>
                            </div>
                            <div className="flex flex-col items-start gap-[5px]">
                              <Text as="p" className="!text-gray-600">
                                Saturday
                              </Text>
                              <div className="flex items-center gap-3.5 self-stretch">
                                <Img
                                  src="img_checkmark.svg"
                                  width={20}
                                  height={28}
                                  alt="checkmark"
                                  className="h-[28px]"
                                />
                                <Heading size="md" as="h6" className="self-end">
                                  8 am - 3 pm
                                </Heading>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[257px] w-[39%] rounded-[20px] bg-blue_gray-100 md:p-5" />
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
        <div className="mt-[190px] self-stretch">
          <div className="flex justify-center bg-blue_gray-100 py-[292px] md:py-5">
            <div className="container-xs flex justify-center px-[621px] md:p-5 md:px-5">
              <Img src="img_arrow_left.svg" width={48} height={89} alt="arrowright" className="h-[89px] w-[96%]" />
            </div>
          </div>
          <Footer1 />
        </div>
      </div>
    </div>
  );
}
