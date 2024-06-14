"use client";

import { CloseSVG } from "../../assets/images";
import { Button, Img, Heading, Text, Input } from "../../components";
import Footer1 from "../../components/Footer1";
import Header1 from "../../components/Header1";
import React from "react";

export default function BlogPage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");

  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[110px] md:gap-[82px] sm:gap-[55px]">
        <div className="flex w-[94%] flex-col gap-[30px] md:w-full md:p-5">
          <Header1 />
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[156px] md:py-5">
            <div className="container-xs mb-[31px] flex md:p-5">
              <div className="flex w-[14%] flex-col md:w-full">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Blog
                </Heading>
                <div className="relative mt-[-9px] flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px] self-start" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Blog
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div>
            <div className="flex flex-col gap-20 md:gap-[60px] sm:gap-10">
              <div className="flex items-start gap-[30px] md:flex-col">
                <div className="flex flex-1 flex-col gap-20 md:self-stretch">
                  <div className="flex flex-1">
                    <div className="flex w-full flex-col gap-[21px]">
                      <div className="flex flex-col items-start gap-[26px]">
                        <div className="h-[416px] self-stretch rounded-[20px] bg-blue_gray-100" />
                        <div className="flex w-[51%] justify-between gap-5 md:w-full sm:flex-col">
                          <div className="flex flex-1 justify-between gap-5 sm:self-stretch">
                            <div className="flex items-center gap-[5px]">
                              <Img
                                src="img_lock_gray_900_03.svg"
                                width={11}
                                height={16}
                                alt="by_admin"
                                className="h-[16px]"
                              />
                              <Text as="p" className="!text-gray-900_03">
                                By admin
                              </Text>
                            </div>
                            <div className="flex flex-1 items-center gap-[5px]">
                              <Img
                                src="img_lock_gray_900_03.svg"
                                width={11}
                                height={16}
                                alt="october_192022"
                                className="h-[16px]"
                              />
                              <Text as="p" className="!text-gray-900_03">
                                October 19, 2022
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Img
                              src="img_lock_gray_900_03.svg"
                              width={15}
                              height={16}
                              alt="comments05one"
                              className="h-[16px] w-[15px]"
                            />
                            <Text as="p" className="!text-gray-900_03">
                              Comments (05)
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start">
                        <Heading size="3xl" as="h2" className="w-full leading-[60px] !text-black-900_01">
                          Wonders of Ancient Civilizations A Journey Through Egypt
                        </Heading>
                        <Text as="p" className="mt-5 w-full leading-[30px] !text-gray-600">
                          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                          eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                          eros justo, posu Aliquam eros{" "}
                        </Text>
                        <Button
                          size="6xl"
                          shape="round"
                          rightIcon={
                            <Img src="img_save.svg" width={14} height={14} alt="save" className="h-[14px] w-[14px]" />
                          }
                          className="mt-10 min-w-[159px] gap-2.5 font-semibold sm:px-5"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start">
                    <div className="h-[416px] self-stretch rounded-[20px] bg-blue_gray-100" />
                    <div className="mt-[26px] flex w-[51%] gap-[30px] md:w-full sm:flex-col">
                      <div className="flex items-center gap-[5px]">
                        <Img src="img_lock_gray_900_03.svg" width={11} height={16} alt="lock" className="h-[16px]" />
                        <Text as="p" className="!text-gray-900_03">
                          By admin
                        </Text>
                      </div>
                      <div className="flex flex-1 items-center gap-[5px] sm:self-stretch">
                        <Img src="img_lock_gray_900_03.svg" width={11} height={16} alt="lock" className="h-[16px]" />
                        <Text as="p" className="!text-gray-900_03">
                          October 19, 2022
                        </Text>
                      </div>
                      <div className="flex flex-1 items-center gap-1 sm:self-stretch">
                        <Img
                          src="img_lock_gray_900_03.svg"
                          width={15}
                          height={16}
                          alt="lock"
                          className="h-[16px] w-[15px]"
                        />
                        <Text as="p" className="!text-gray-900_03">
                          Comments (05)
                        </Text>
                      </div>
                    </div>
                    <Heading size="3xl" as="h3" className="mt-[21px] w-full leading-[60px] !text-black-900_01">
                      The Road to Adventure Embarking on New Horizons
                    </Heading>
                    <Text as="p" className="mt-5 w-full leading-[30px] !text-gray-600">
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                      eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                      Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                      eros justo, posu Aliquam eros{" "}
                    </Text>
                    <Button
                      size="6xl"
                      shape="round"
                      rightIcon={
                        <Img src="img_save.svg" width={14} height={14} alt="save" className="h-[14px] w-[14px]" />
                      }
                      className="mt-10 min-w-[159px] gap-2.5 font-semibold sm:px-5"
                    >
                      Learn More
                    </Button>
                  </div>
                  <div className="flex flex-1">
                    <div className="flex w-full flex-col items-start">
                      <div className="h-[416px] self-stretch rounded-[20px] bg-blue_gray-100" />
                      <div className="mt-[26px] flex w-[51%] justify-between gap-5 md:w-full sm:flex-col">
                        <div className="flex flex-1 justify-between gap-5 sm:self-stretch">
                          <div className="flex items-center gap-[5px]">
                            <Img
                              src="img_lock_gray_900_03.svg"
                              width={11}
                              height={16}
                              alt="lock"
                              className="h-[16px]"
                            />
                            <Text as="p" className="!text-gray-900_03">
                              By admin
                            </Text>
                          </div>
                          <div className="flex flex-1 items-center gap-[5px]">
                            <Img
                              src="img_lock_gray_900_03.svg"
                              width={11}
                              height={16}
                              alt="lock"
                              className="h-[16px]"
                            />
                            <Text as="p" className="!text-gray-900_03">
                              October 19, 2022
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Img
                            src="img_lock_gray_900_03.svg"
                            width={15}
                            height={16}
                            alt="lock"
                            className="h-[16px] w-[15px]"
                          />
                          <Text as="p" className="!text-gray-900_03">
                            Comments (05)
                          </Text>
                        </div>
                      </div>
                      <Heading size="3xl" as="h4" className="mt-[21px] w-full leading-[60px] !text-black-900_01">
                        Journeys of Discovery Uncovering Hidden Treasures
                      </Heading>
                      <Text as="p" className="mt-5 w-full leading-[30px] !text-gray-600">
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                        eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam
                        eros justo, posu Aliquam eros{" "}
                      </Text>
                      <Button
                        size="6xl"
                        shape="round"
                        rightIcon={
                          <Img src="img_save.svg" width={14} height={14} alt="save" className="h-[14px] w-[14px]" />
                        }
                        className="mt-10 min-w-[159px] gap-2.5 font-semibold sm:px-5"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-[33%] md:w-full">
                  <div className="flex flex-col items-start justify-center rounded-[20px] bg-white-A700 p-[30px] shadow-xs sm:p-5">
                    <Heading as="h5">Search Here </Heading>
                    <div className="mt-[15px] h-px self-stretch rounded-[1px] bg-gray-300" />
                    <Input
                      color="gray_300"
                      variant="outline"
                      shape="round"
                      name="search"
                      placeholder={`Search..`}
                      value={searchBarValue2}
                      onChange={(e) => setSearchBarValue2(e)}
                      suffix={
                        <div className="flex h-[25px] w-[25px] items-center justify-center rounded-[12px]">
                          {searchBarValue2?.length > 0 ? (
                            <CloseSVG
                              onClick={() => setSearchBarValue2("")}
                              height={25}
                              width={25}
                              fillColor="#034833ff"
                            />
                          ) : (
                            <Img
                              src="img_search_teal_900.svg"
                              width={25}
                              height={25}
                              alt="search"
                              className="h-[25px] w-[25px] cursor-pointer"
                            />
                          )}
                        </div>
                      }
                      className="mt-[30px] gap-[35px] self-stretch text-gray-600"
                    />
                  </div>
                  <div className="mt-[31px] flex flex-col items-start justify-center gap-[34px] rounded-[20px] bg-white-A700 p-[30px] shadow-xs sm:p-5">
                    <Heading as="h6">Popular Post</Heading>
                    <div className="flex flex-col gap-5 self-stretch">
                      <div className="flex flex-1">
                        <div className="flex w-full items-center gap-[15px]">
                          <div className="h-[85px] w-[24%] rounded-[20px] bg-blue_gray-100" />
                          <div className="flex flex-1 flex-col">
                            <div className="flex items-center gap-2.5">
                              <Img
                                src="img_checkmark.svg"
                                width={11}
                                height={16}
                                alt="october_192022"
                                className="h-[16px]"
                              />
                              <Text as="p" className="self-end !text-gray-600">
                                October 19, 2022
                              </Text>
                            </div>
                            <Heading size="md" as="h6" className="relative mt-[-3px] leading-7">
                              Find Your Adventure Live Your Passion
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="h-px w-[350px] rounded-[1px] bg-gray-300" />
                      <div className="relative h-[85px] flex-1 md:w-full md:flex-none">
                        <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[71%] items-start gap-[15px]">
                          <div className="h-[85px] w-[34%] rounded-[20px] bg-blue_gray-100" />
                          <div className="flex flex-1 items-center gap-2.5">
                            <Img src="img_checkmark.svg" width={11} height={16} alt="checkmark" className="h-[16px]" />
                            <Text as="p" className="self-end !text-gray-600">
                              October 19, 2022
                            </Text>
                          </div>
                        </div>
                        <Heading
                          size="md"
                          as="h6"
                          className="absolute bottom-[1.00px] right-[0.00px] m-auto w-[73%] leading-7"
                        >
                          Ravel Beyond Your Imagination
                        </Heading>
                      </div>
                      <div className="h-px w-[350px] rounded-[1px] bg-gray-300" />
                      <div className="relative h-[85px] flex-1 md:w-full md:flex-none">
                        <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[71%] items-start gap-[15px]">
                          <div className="h-[85px] w-[34%] rounded-[20px] bg-blue_gray-100" />
                          <div className="flex flex-1 items-center gap-2.5">
                            <Img src="img_checkmark.svg" width={11} height={16} alt="checkmark" className="h-[16px]" />
                            <Text as="p" className="self-end !text-gray-600">
                              October 19, 2022
                            </Text>
                          </div>
                        </div>
                        <Heading
                          size="md"
                          as="h6"
                          className="absolute bottom-[1.00px] right-[0.00px] m-auto w-[73%] leading-7"
                        >
                          Adventure Awaits Around Every Corner
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[29px] flex flex-col items-start justify-center gap-[23px] rounded-[20px] bg-white-A700 p-[30px] shadow-xs sm:p-5">
                    <Heading as="h5">Category</Heading>
                    <div className="h-px self-stretch rounded-[1px] bg-gray-300" />
                    <Text as="p">Flight Booking</Text>
                    <Text as="p">Vacation Packages</Text>
                    <Text as="p">Car Rental Services</Text>
                    <Text as="p">Adventure Travel Planning</Text>
                    <Text as="p">Group Travel Organization</Text>
                    <Text as="p">Insurance Services</Text>
                  </div>
                  <div className="mt-[45px] flex flex-col items-start justify-center gap-[18px] rounded-[20px] bg-white-A700 p-[30px] shadow-xs sm:p-5">
                    <Heading as="h5">Popular Tags</Heading>
                    <div className="h-px self-stretch rounded-[1px] bg-gray-300" />
                    <div className="self-stretch">
                      <div className="flex flex-col gap-2.5">
                        <div className="flex gap-[5px]">
                          <Button color="gray_300" size="sm" variant="outline" className="min-w-[131px] rounded-[20px]">
                            Travel Planning
                          </Button>
                          <Button color="gray_300" size="sm" variant="outline" className="min-w-[127px] rounded-[20px]">
                            Safety Guides
                          </Button>
                        </div>
                        <div className="flex gap-[5px]">
                          <Button color="gray_300" size="sm" variant="outline" className="w-full flex-1 rounded-[20px]">
                            Spa Retreats
                          </Button>
                          <Button color="gray_300" size="sm" variant="outline" className="min-w-[102px] rounded-[20px]">
                            Wine Tours
                          </Button>
                          <Button color="gray_300" size="sm" variant="outline" className="min-w-[104px] rounded-[20px]">
                            Travel Pack
                          </Button>
                        </div>
                        <div className="flex items-center gap-[5px]">
                          <Button
                            color="gray_300"
                            size="lg"
                            variant="outline"
                            className="min-w-[127px] rounded-[20px] sm:px-5"
                          >
                            Solo Travel
                          </Button>
                          <Button color="gray_300" size="sm" variant="outline" className="min-w-[140px] rounded-[20px]">
                            Travel Programs
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-[283px] flex gap-[15px] md:ml-0 sm:flex-col">
                <Button size="4xl" variant="outline" className="min-w-[60px] rounded-[5px] font-bold sm:px-5">
                  1
                </Button>
                <Button
                  color="gray_300"
                  size="4xl"
                  variant="outline"
                  className="min-w-[60px] rounded-[5px] font-bold !text-teal-900 sm:px-5"
                >
                  2
                </Button>
                <Button
                  color="gray_300"
                  size="4xl"
                  variant="outline"
                  className="min-w-[60px] rounded-[5px] font-bold !text-teal-900 sm:px-5"
                >
                  3
                </Button>
                <Button color="gray_300" variant="outline" className="w-[60px] rounded-[5px] px-[17px]">
                  <Img src="img_arrow_left.svg" width={12} height={24} />
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
