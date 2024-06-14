"use client";

import { Img, Heading, Text, Slider, Button } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import HomeOne from "../../components/HomeOne";
import HomeRow from "../../components/HomeRow";
import HomeTwo from "../../components/HomeTwo";
import HomeTwo1 from "../../components/HomeTwo1";
import HomeTwo2 from "../../components/HomeTwo2";
import Link from "next/link";
import React, { Suspense } from "react";

const data = [
  { visavoyage: "Visa Voyage Agency" },
  { visavoyage: "International Access Visas" },
  { visavoyage: "Gateway to Global Citizenship" },
];

export default function Home1Page() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef(null);
  const [sliderState3, setSliderState3] = React.useState(0);
  const sliderRef3 = React.useRef(null);

  return (
    <div className="w-full bg-light_green-50 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center">
        <div className="flex w-[97%] flex-col items-center md:w-full md:p-5">
          <div className="flex flex-col gap-[30px] self-stretch">
            <Header className="w-[97%] md:w-full md:flex-col" />
            <div className="relative h-[801px] md:h-auto">
              <div className="flex w-full items-center justify-center md:flex-col">
                <Img
                  src="img_frame_1000009715.svg"
                  width={452}
                  height={534}
                  alt="image"
                  className="relative z-[1] h-[534px] w-[20%] self-end md:w-full"
                />
                <div className="relative ml-[-392px] h-[801px] flex-1 rounded-[50px] bg-teal-900 px-[115px] pt-[115px] md:ml-0 md:w-full md:flex-none md:self-stretch md:px-5 md:pt-5">
                  <div className="absolute bottom-0 right-[10%] top-0 my-auto h-[686px] w-[48%]">
                    <Img
                      src="img_frame_1000009753.svg"
                      width={638}
                      height={469}
                      alt="image"
                      className="absolute bottom-[1.17px] left-[4%] m-auto h-[469px] w-[85%]"
                    />
                    <Img
                      src="img_frame_1000009716.svg"
                      width={452}
                      height={534}
                      alt="image"
                      className="absolute bottom-[0.17px] right-[0.00px] m-auto h-[534px] w-[60%]"
                    />
                    <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[684px] w-[79%] rotate-[180deg] bg-blue_gray-100" />
                  </div>
                  <div className="absolute bottom-1/4 left-1/4 m-auto flex items-center gap-2.5">
                    <Button color="white_A700_19" size="3xl" className="w-[54px] rounded-[27px]">
                      <Img src="img_overflow_menu.svg" width={39} height={39} />
                    </Button>
                    <Heading size="md" as="h1" className="!text-white-A700">
                      Watch Our Videos
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-[17%] top-0 z-[2] my-auto flex h-max w-[40%] flex-col items-start gap-10">
                <Heading size="4xl" as="h2" className="w-full capitalize leading-[90px] !text-white-A700">
                  <span className="text-white-A700">Visa Made Easy&nbsp;</span>
                  <span className="text-white-A700">Dreams Made Possible</span>
                </Heading>
                <Button
                  color="white_A700"
                  size="6xl"
                  variant="outline"
                  shape="round"
                  rightIcon={<Img src="img_save.svg" width={14} height={14} alt="save" className="h-[14px] w-[14px]" />}
                  className="min-w-[157px] gap-2.5 font-semibold sm:px-5"
                >
                  Read More{" "}
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-[30px] flex w-[95%] gap-[30px] md:w-full md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {[...Array(3)].map((d, index) => (
                <HomeTwo key={"card" + index} />
              ))}
            </Suspense>
          </div>
          <div className="container-xs mt-[120px] flex flex-col gap-[120px] md:gap-[90px] sm:gap-[60px]">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex w-[45%] items-center justify-center gap-[22px] md:w-full sm:flex-col">
                <div className="flex w-full flex-col items-end gap-[38px] sm:w-full">
                  <div className="relative h-[368px] self-stretch">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[357px] w-[97%] rounded-[20px] bg-blue_gray-100" />
                    <div className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[346px] w-[95%] rounded-[20px] border border-solid border-light_green-A700" />
                  </div>
                  <div className="mr-[26px] w-[82%] rounded-[103px] border-2 border-solid border-teal-900_4c p-4 md:mr-0 md:w-full">
                    <div>
                      <div className="flex flex-wrap items-start">
                        <Text size="xs" as="p" className="mt-[50px] rotate-[69deg] !text-[11.48px]">
                          A
                        </Text>
                        <Text size="xs" as="p" className="relative mb-[13px] ml-[-3px] rotate-[60deg] !text-[11.48px]">
                          g
                        </Text>
                        <Text size="xs" as="p" className="relative ml-[-4px] rotate-[50deg] !text-[11.48px]">
                          e
                        </Text>
                        <Text size="xs" as="p" className="mt-[18px] rotate-[40deg] !text-[11.48px]">
                          n
                        </Text>
                        <Text size="xs" as="p" className="mt-2.5 rotate-[30deg] !text-[11.48px]">
                          c
                        </Text>
                        <Text size="xs" as="p" className="mt-1.5 rotate-[21deg] !text-[11.48px]">
                          y
                        </Text>
                        <Text size="xs" as="p" className="ml-[17px] !text-[11.48px]">
                          W
                        </Text>
                        <Text size="xs" as="p" className="rotate-[-10deg] !text-[11.48px]">
                          o
                        </Text>
                        <Text size="xs" as="p" className="ml-[5px] mt-1.5 rotate-[-21deg] !text-[11.48px]">
                          r
                        </Text>
                        <Text size="xs" as="p" className="ml-1.5 mt-2.5 rotate-[-30deg] !text-[11.48px]">
                          l
                        </Text>
                        <Text size="xs" as="p" className="mt-[18px] h-[12px] w-[12px] rotate-[-40deg] !text-[11.48px]">
                          d
                        </Text>
                        <Text size="xs" as="p" className="relative mb-[25px] ml-[-3px] rotate-[-50deg] !text-[11.48px]">
                          w
                        </Text>
                        <Text size="xs" as="p" className="relative mb-[13px] ml-[-2px] rotate-[-60deg] !text-[11.48px]">
                          i
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="relative ml-[-4px] h-[13px] w-[12px] rotate-[-69deg] !text-[11.48px]"
                        >
                          d
                        </Text>
                      </div>
                      <div className="relative mt-[-4px] flex items-end justify-between gap-5">
                        <div className="flex flex-col items-center">
                          <Text size="xs" as="p" className="relative z-[3] rotate-[90deg] !text-[11.48px]">
                            n
                          </Text>
                          <Text size="xs" as="p" className="relative mt-[-1px] rotate-[100deg] !text-[11.48px]">
                            o
                          </Text>
                        </div>
                        <Img src="img_search.svg" width={45} height={45} alt="search" className="h-[45px] w-[45px]" />
                        <div className="flex flex-col items-start gap-3">
                          <Text size="xs" as="p" className="rotate-[-80deg] !text-[11.48px]">
                            e
                          </Text>
                          <Text size="xs" as="p" className="rotate-[-100deg] self-center !text-[11.48px]">
                            A
                          </Text>
                        </div>
                      </div>
                      <div className="relative mt-[-3px] flex flex-wrap items-end">
                        <Text size="xs" as="p" className="relative z-[4] rotate-[111deg] !text-[11.48px]">
                          i
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="relative z-[5] ml-[-3px] mt-[13px] rotate-[120deg] !text-[11.48px]"
                        >
                          t
                        </Text>
                        <Text size="xs" as="p" className="relative ml-[-1px] mt-6 rotate-[130deg] !text-[11.48px]">
                          a
                        </Text>
                        <Text size="xs" as="p" className="mb-[18px] mt-8 rotate-[140deg] !text-[11.48px]">
                          r
                        </Text>
                        <Text size="xs" as="p" className="mb-3 rotate-[150deg] !text-[11.48px]">
                          g
                        </Text>
                        <Text size="xs" as="p" className="ml-1 rotate-[159deg] !text-[11.48px]">
                          i
                        </Text>
                        <Text size="xs" as="p" className="rotate-[170deg] !text-[11.48px]">
                          m
                        </Text>
                        <Text size="xs" as="p" className="rotate-[-180deg] !text-[11.48px]">
                          m
                        </Text>
                        <Text size="xs" as="p" className="ml-2 rotate-[-170deg] !text-[11.48px]">
                          I
                        </Text>
                        <Text size="xs" as="p" className="mb-[9px] ml-[18px] rotate-[-150deg] !text-[11.48px]">
                          s
                        </Text>
                        <Text size="xs" as="p" className="relative z-[6] mb-[17px] rotate-[-140deg] !text-[11.48px]">
                          s
                        </Text>
                        <Text size="xs" as="p" className="relative z-[7] rotate-[-130deg] !text-[11.48px]">
                          e
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="relative z-[8] ml-[-1px] mt-[13px] rotate-[-120deg] !text-[11.48px]"
                        >
                          c
                        </Text>
                        <Text size="xs" as="p" className="relative ml-[-3px] rotate-[-111deg] !text-[11.48px]">
                          c
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[23px] sm:w-full">
                  <div className="flex items-center justify-center gap-5 rounded-[20px] bg-light_green-A700 p-[30px] sm:p-5">
                    <Heading size="3xl" as="h3" className="self-end !text-white-A700">
                      25
                    </Heading>
                    <Heading size="md" as="h4" className="w-[65%] leading-7 !text-white-A700">
                      Years Of experience
                    </Heading>
                  </div>
                  <div className="h-[464px] rounded-[20px] bg-blue_gray-100" />
                </div>
              </div>
              <div className="flex w-[49%] flex-col gap-[35px] md:w-full">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2.5">
                    <Img src="img_frame.svg" width={20} height={20} alt="image" className="h-[20px] w-[20px]" />
                    <Heading size="xs" as="h5" className="uppercase tracking-[1.40px]">
                      Why Choose Us
                    </Heading>
                  </div>
                  <Heading size="3xl" as="h6" className="mt-2.5 leading-[60px]">
                    <span className="text-gray-900_01">Where Wanderlust Meets&nbsp;</span>
                    <span className="text-teal-900">Dream Destinations &nbsp;</span>
                  </Heading>
                  <Text as="p" className="mt-5 leading-[30px] !text-gray-600">
                    <span className="text-gray-600">
                      Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu
                      massa&nbsp;
                    </span>
                    <span className="text-gray-600">
                      Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et
                      purus duis sollicitudin dignissim habitant. Egestas nulla
                    </span>
                  </Text>
                </div>
                <div>
                  <div className="flex flex-col gap-[42px]">
                    <div className="flex gap-[30px] md:flex-col">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {[...Array(2)].map((d, index) => (
                          <HomeTwo1 key={"list006Browser" + index} />
                        ))}
                      </Suspense>
                    </div>
                    <div className="flex w-[63%] items-center justify-between gap-5 md:w-full">
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
                        className="min-w-[157px] gap-2.5 font-semibold sm:px-5"
                      >
                        Read More
                      </Button>
                      <div className="flex w-[50%] justify-center">
                        <div className="flex w-full items-center justify-center gap-[15px]">
                          <Button size="3xl" className="w-[55px] rounded-[27px]">
                            <Img src="img_save.svg" width={16} height={22} />
                          </Button>
                          <div className="flex flex-1 flex-col items-start gap-1.5 self-end">
                            <Text as="p">Need help?</Text>
                            <Heading size="md" as="h6">
                              (808) 555-0111
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-5 md:flex-col">
              <Img
                src="img_company_logo.svg"
                width={171}
                height={48}
                alt="companylogo"
                className="h-[48px] w-[13%] md:w-full"
              />
              <Img
                src="img_company_logo_teal_900.svg"
                width={108}
                height={48}
                alt="companylogo"
                className="h-[48px] w-[8%] md:w-full"
              />
              <Img
                src="img_company_logo_teal_900_48x114.svg"
                width={114}
                height={48}
                alt="companylogo"
                className="h-[48px] w-[9%] md:w-full"
              />
              <div className="flex w-[10%] items-end justify-center gap-1.5 md:w-full">
                <Img src="img_lock.svg" width={26} height={24} alt="lock" className="mb-[9px] mt-3 h-[24px]" />
                <Img src="img_settings.svg" width={92} height={17} alt="settings" className="mb-3 h-[17px] w-[78%]" />
              </div>
              <Img
                src="img_company_logo_teal_900_48x144.svg"
                width={144}
                height={48}
                alt="companylogo"
                className="h-[48px] w-[11%] md:w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-[120px] flex w-[94%] flex-col items-center justify-center rounded-[50px] bg-teal-900 py-[114px] md:w-full md:p-5 md:py-5">
          <div className="container-xs mb-1.5 flex flex-col gap-[60px] sm:gap-[30px]">
            <div>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <Img
                    src="img_frame_white_a700.svg"
                    width={20}
                    height={20}
                    alt="image"
                    className="h-[20px] w-[20px]"
                  />
                  <Heading size="xs" as="h2" className="uppercase tracking-[1.40px] !text-white-A700">
                    Our Countries
                  </Heading>
                </div>
                <div className="flex items-center justify-between gap-5 md:flex-col">
                  <Heading size="3xl" as="h3" className="w-[49%] leading-[60px] !text-white-A700 md:w-full">
                    Making Memories Around World Unforgettable
                  </Heading>
                  <div className="flex gap-5 self-end">
                    <Button
                      onClick={() => {
                        sliderRef3?.current?.slidePrev();
                      }}
                      shape="square"
                      className="w-[60px]"
                    >
                      <Img src="img_group_6.svg" width={60} height={60} />
                    </Button>
                    <Button
                      onClick={() => {
                        sliderRef3?.current?.slideNext();
                      }}
                      shape="round"
                      className="w-[60px] px-[21px] sm:px-5"
                    >
                      <Img src="img_save.svg" width={14} height={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-[1292px]">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                disableDotsControls
                activeIndex={sliderState3}
                onSlideChanged={(e) => {
                  setSliderState3(e?.item);
                }}
                ref={sliderRef3}
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex gap-[30px] md:flex-col">
                      <div className="flex flex-1 flex-col items-end rounded-[20px] bg-blue_gray-100 p-[30px] md:self-stretch sm:p-5">
                        <div className="mb-[302px] h-[60px] w-[46%] rounded-[30px] border border-solid border-light_green-A700 bg-blue_gray-100" />
                      </div>
                      <div className="flex w-[33%] flex-col items-end gap-[81px] rounded-[20px] bg-blue_gray-100 p-3 md:w-full md:gap-[60px] sm:gap-10">
                        <div className="mr-[18px] mt-[18px] h-[60px] w-[16%] rounded-[30px] border border-solid border-light_green-A700 bg-blue_gray-100 md:mr-0" />
                        <div className="flex flex-col items-start self-stretch rounded-[20px] bg-light_green-A700 p-7 sm:p-5">
                          <Heading as="h4" className="mt-[7px] !text-white-A700">
                            Working Visa
                          </Heading>
                          <Text as="p" className="mt-[7px] w-[88%] leading-[30px] !text-white-A700 md:w-full">
                            Lorem Ipsum is simply dummy text the printing and provide best visa ever
                          </Text>
                          <Button
                            color="white_A700"
                            size="6xl"
                            variant="outline"
                            shape="round"
                            rightIcon={
                              <Img src="img_save.svg" width={14} height={14} alt="save" className="h-[14px] w-[14px]" />
                            }
                            className="mt-5 min-w-[158px] gap-2.5 font-semibold sm:px-5"
                          >
                            Apply Now
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-end rounded-[20px] bg-blue_gray-100 p-5 md:self-stretch">
                        <div className="mb-[316px] mt-1.5 h-[60px] w-[40%] rounded-[30px] border border-solid border-light_green-A700 bg-blue_gray-100" />
                      </div>
                      <div className="flex flex-1 flex-col items-end rounded-[20px] bg-blue_gray-100 p-5 md:self-stretch">
                        <div className="mb-[316px] mt-1.5 h-[60px] w-[40%] rounded-[30px] border border-solid border-light_green-A700 bg-blue_gray-100" />
                      </div>
                      <div className="flex flex-1 flex-col items-end rounded-[20px] bg-blue_gray-100 p-5 md:self-stretch">
                        <div className="mb-[316px] mt-1.5 h-[60px] w-[40%] rounded-[30px] border border-solid border-light_green-A700 bg-blue_gray-100" />
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
        <div className="container-xs mt-[120px] md:p-5">
          <div className="flex flex-col gap-[119px] md:gap-[89px] sm:gap-[59px]">
            <div className="flex flex-col items-center gap-[60px] sm:gap-[30px]">
              <div className="flex w-[49%] flex-col items-center gap-2.5 md:w-full">
                <div className="flex items-center gap-2.5">
                  <Img src="img_frame.svg" width={20} height={20} alt="image" className="h-[20px] w-[20px]" />
                  <Heading size="xs" as="h2" className="uppercase tracking-[1.40px]">
                    Visa Category
                  </Heading>
                </div>
                <Heading size="3xl" as="h3" className="w-full text-center leading-[60px]">
                  Seeking Adventure Thrills and Excitement Await
                </Heading>
              </div>
              <div className="self-stretch">
                <div className="grid grid-cols-2 gap-[30px] gap-y-[33px] md:grid-cols-1">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {[...Array(4)].map((d, index) => (
                      <HomeTwo2 key={"home" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[60px] sm:gap-[30px]">
              <div>
                <div className="flex flex-col gap-[7px]">
                  <div className="flex w-[19%] items-start gap-2.5 md:w-full">
                    <Heading size="xs" as="h4" className="uppercase tracking-[1.40px]">
                      Available Countries
                    </Heading>
                    <Img src="img_objects.svg" width={52} height={9} alt="objects" className="h-[9px] w-[22%]" />
                  </div>
                  <div className="flex items-center justify-between gap-5 md:flex-col">
                    <Heading size="3xl" as="h5" className="w-[49%] leading-[60px] md:w-full">
                      Urban Escapes City Hopping Adventures
                    </Heading>
                    <Button
                      size="6xl"
                      shape="round"
                      rightIcon={
                        <Img src="img_save.svg" width={14} height={14} alt="save" className="h-[14px] w-[14px]" />
                      }
                      className="min-w-[156px] gap-2.5 self-end font-semibold sm:px-5"
                    >
                      View More{" "}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-[30px] md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {[...Array(4)].map((d, index) => (
                    <HomeOne key={"card1" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
            <div className="flex gap-[30px] md:flex-col">
              <div className="h-[608px] w-[33%] rounded-[20px] bg-blue_gray-100" />
              <div className="flex flex-1 flex-col gap-[30px] md:self-stretch">
                <div className="rounded-[20px] bg-white-A700 pl-[60px] md:pl-5">
                  <div className="flex items-center md:flex-col">
                    <div className="flex flex-1 flex-col gap-[21px] md:self-stretch">
                      <div className="w-[17%] md:w-full">
                        <div className="flex flex-col items-center justify-center rounded-[40px] bg-light_green-A700 p-[17px]">
                          <Img
                            src="img_050_worldwide.svg"
                            width={45}
                            height={45}
                            alt="050worldwide"
                            className="h-[45px] w-[45px]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-[23px]">
                        <div className="flex flex-col items-start gap-2.5 self-stretch">
                          <Heading as="h6">Get our best offers quickly</Heading>
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
                </div>
                <div className="flex justify-between gap-5 rounded-[20px] bg-light_green-A700 p-[59px] md:flex-col md:p-5">
                  <div className="flex flex-col items-start gap-[9px]">
                    <Heading size="3xl" as="h1" className="!text-white-A700">
                      10k+
                    </Heading>
                    <Text as="p" className="!text-white-A700">
                      Complete project
                    </Text>
                  </div>
                  <div className="flex w-[73%] items-center justify-between gap-5 md:w-full sm:flex-col">
                    <div className="flex flex-col items-start gap-[7px]">
                      <Heading size="3xl" as="h1" className="!text-white-A700">
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
            <div className="flex flex-col gap-[60px] sm:gap-[30px]">
              <div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <Img src="img_frame.svg" width={20} height={20} alt="image" className="h-[20px] w-[20px]" />
                    <Heading size="xs" as="p" className="uppercase tracking-[1.40px]">
                      supporting Coaching
                    </Heading>
                  </div>
                  <div className="flex items-center justify-between gap-5 md:flex-col">
                    <Heading size="3xl" as="h1" className="w-[49%] leading-[60px] md:w-full">
                      A Tapestry of Experiences Cultural Encounters{" "}
                    </Heading>
                    <div className="flex gap-5 self-end">
                      <Button
                        onClick={() => {
                          sliderRef2?.current?.slidePrev();
                        }}
                        shape="square"
                        className="w-[60px]"
                      >
                        <Img src="img_close_gray_300.svg" width={60} height={60} />
                      </Button>
                      <Button
                        onClick={() => {
                          sliderRef2?.current?.slideNext();
                        }}
                        shape="round"
                        className="w-[60px] px-[21px] sm:px-5"
                      >
                        <Img src="img_save.svg" width={14} height={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto flex w-full max-w-[1290px] gap-[30px] md:mx-0 md:flex-col">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 3 } }}
                  disableDotsControls
                  activeIndex={sliderState2}
                  onSlideChanged={(e) => {
                    setSliderState2(e?.item);
                  }}
                  ref={sliderRef2}
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="px-[15px]">
                        <div className="flex">
                          <div className="w-full">
                            <div className="h-[323px] rounded-[20px] bg-blue_gray-100" />
                            <div className="relative mt-[-75px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] bg-white-A700 p-[30px] shadow-xs sm:p-5">
                              <div className="flex items-center justify-between gap-5 self-end">
                                <div className="flex w-[63%] flex-col items-start gap-[7px]">
                                  <Heading as="h5">TOFEL Coaching</Heading>
                                  <Text as="p" className="w-full leading-[30px] !text-gray-600">
                                    There are many variati of passages of engineer
                                  </Text>
                                </div>
                                <Button
                                  color="gray_300"
                                  variant="outline"
                                  className="w-[60px] rounded-[20px] px-[13px]"
                                >
                                  <Img src="img_arrow_left_teal_900.svg" width={26} height={31} />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[120px] flex h-[900px] w-[94%] items-center justify-center bg-[url(/images/img_group_1905.svg)] bg-cover bg-no-repeat py-[120px] md:h-auto md:w-full md:p-5 md:py-5">
          <div className="container-xs flex justify-center">
            <div className="w-full">
              <div className="flex flex-col">
                <div className="flex items-center gap-2.5">
                  <Img src="img_frame.svg" width={20} height={20} alt="image" className="h-[20px] w-[20px]" />
                  <Heading size="xs" as="h2" className="uppercase tracking-[1.40px]">
                    Our Coaching
                  </Heading>
                </div>
                <Heading size="3xl" as="h3" className="mt-2.5 w-[49%] leading-[60px] md:w-full">
                  Exploring the Unknown Voyages of Wonder{" "}
                </Heading>
                <div className="mt-[60px] flex gap-[30px] md:flex-col">
                  <div className="flex flex-1 flex-col gap-[30px] md:self-stretch">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {[...Array(3)].map((d, index) => (
                        <HomeRow key={"list" + index} className="p-[33px]" />
                      ))}
                    </Suspense>
                  </div>
                  <div className="flex w-[33%] flex-col items-center justify-end rounded-[30px] bg-blue_gray-100 p-10 md:w-full sm:p-5">
                    <div className="mt-[334px] flex w-[48%] rotate-[90deg] justify-center rounded-[18px] bg-white-A700 p-1.5 md:w-full">
                      <div className="flex w-full items-center justify-between gap-5">
                        <Img
                          src="img_music_teal_900.svg"
                          width={16}
                          height={16}
                          alt="music"
                          className="h-[16px] w-[16px]"
                        />
                        <Img src="img_facebook.svg" width={10} height={22} alt="facebook" className="h-[22px]" />
                        <Img src="img_info.svg" width={14} height={16} alt="info" className="h-[16px]" />
                        <Img src="img_info.svg" width={14} height={16} alt="info" className="h-[16px] self-start" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs mt-[120px] md:p-5">
          <div className="relative h-[645px] md:h-auto">
            <div className="mx-auto flex w-full max-w-[1292px]">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                disableDotsControls
                activeIndex={sliderState1}
                onSlideChanged={(e) => {
                  setSliderState1(e?.item);
                }}
                ref={sliderRef1}
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex gap-[30px] md:flex-col">
                      <div className="h-[645px] w-[41%] rotate-[180deg] rounded-[30px] bg-blue_gray-100" />
                      <div className="flex flex-1 flex-col items-start rounded-[20px] bg-light_green-A700 py-[60px] pl-[60px] pr-14 md:self-stretch md:p-5">
                        <Img
                          src="img_frame_white_a700_55x72.svg"
                          width={72}
                          height={55}
                          alt="image"
                          className="h-[55px] w-[12%]"
                        />
                        <Text size="lg" as="p" className="mt-5 w-full leading-[50px] !text-white-A700">
                          We have been operating for over an providin top-notch services to our clients and build strong
                          track record in the industry.We have been operating for over a decad providi ina top-notch We
                          have been operating
                        </Text>
                        <div className="mt-[39px] flex w-[36%] items-center gap-5 md:w-full">
                          <div className="h-[70px] w-[34%] rounded-[35px] bg-blue_gray-100" />
                          <div className="flex flex-1 flex-col items-start gap-3">
                            <Heading as="h2" className="!text-white-A700">
                              Albert Flores
                            </Heading>
                            <Text as="p" className="!text-white-A700">
                              Web Designer
                            </Text>
                          </div>
                        </div>
                        <div className="mb-[9px] mt-20 h-px w-[73%] bg-white-A700" />
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
            <div className="absolute bottom-[6%] right-[5%] m-auto flex gap-5">
              <Button
                shape="square"
                onClick={() => {
                  sliderRef1?.current?.slidePrev();
                }}
                className="w-[60px]"
              >
                <Img src="img_close_white_a700.svg" width={60} height={60} />
              </Button>
              <Button
                color="white_A700"
                shape="round"
                onClick={() => {
                  sliderRef1?.current?.slideNext();
                }}
                className="w-[60px] px-[21px] sm:px-5"
              >
                <Img src="img_arrow_left.svg" width={14} height={16} />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-[120px] flex w-[94%] rounded-[50px] bg-white-A700 md:w-full md:p-5">
          <div className="flex h-[730px] w-full items-center justify-center rounded-[50px] bg-[url(/images/img_group_1913.png)] bg-cover bg-no-repeat py-[119px] md:h-auto md:py-5">
            <div className="container-xs flex justify-center md:p-5">
              <div className="flex w-full flex-col items-center gap-[60px] sm:gap-[30px]">
                <div className="flex w-[49%] flex-col items-center gap-2.5 md:w-full">
                  <div className="flex items-center gap-2.5">
                    <Img src="img_frame.svg" width={20} height={20} alt="image" className="h-[20px] w-[20px]" />
                    <Heading size="xs" as="h2" className="uppercase tracking-[1.40px]">
                      Process Overview
                    </Heading>
                  </div>
                  <Heading size="3xl" as="h3" className="w-full text-center leading-[60px]">
                    Unforgettable Getaways Escaping Routine{" "}
                  </Heading>
                </div>
                <div className="flex gap-[30px] self-stretch md:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <div
                        key={"listvisavoyage" + index}
                        className="mb-10 flex w-full flex-col items-start gap-[17px] rounded-[20px] bg-white-A700 p-[30px] shadow-xs md:mb-0 sm:p-5"
                      >
                        <Heading as="h4" className="ml-2.5 mt-[74px] md:ml-0">
                          {d.visavoyage}
                        </Heading>
                        <Text as="p" className="w-[94%] self-center leading-[30px] md:w-full">
                          Lorem Ipsum is simply dummy text the printing and typeser
                        </Text>
                      </div>
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs mt-[120px] md:p-5">
          <div className="flex flex-col gap-[60px] sm:gap-[30px]">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex w-[49%] flex-col gap-2.5 md:w-full">
                <div className="flex items-center gap-2.5">
                  <Img src="img_frame.svg" width={20} height={20} alt="image_ten" className="h-[20px] w-[20px]" />
                  <Heading size="xs" as="h2" className="uppercase tracking-[1.40px]">
                    Recent Blogs
                  </Heading>
                </div>
                <Heading size="3xl" as="h3" className="leading-[60px]">
                  Journeys of Discovery Uncovering Hidden{" "}
                </Heading>
              </div>
              <div className="flex gap-5 self-end">
                <Button
                  onClick={() => {
                    sliderRef?.current?.slidePrev();
                  }}
                  shape="square"
                  className="w-[60px]"
                >
                  <Img src="img_close_teal_900.svg" width={60} height={60} />
                </Button>
                <Button
                  onClick={() => {
                    sliderRef?.current?.slideNext();
                  }}
                  shape="round"
                  className="w-[60px] px-[21px] sm:px-5"
                >
                  <Img src="img_save.svg" width={14} height={16} />
                </Button>
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-[1290px] gap-[30px] md:mx-0 md:flex-col">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 3 } }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="px-[15px]">
                      <div className="flex flex-col items-center gap-[26px] rounded-[20px] border border-solid border-gray-300 pb-10 sm:pb-5">
                        <div className="h-[336px] self-stretch rounded-tl-[20px] rounded-tr-[20px] bg-blue_gray-100" />
                        <div className="flex w-[80%] flex-col gap-[30px] md:w-full">
                          <div>
                            <div className="flex justify-between gap-5">
                              <div className="flex items-center gap-[5px]">
                                <Img
                                  src="img_lock_gray_900_03.svg"
                                  width={11}
                                  height={16}
                                  alt="lock"
                                  className="h-[16px]"
                                />
                                <Text as="p" className="!text-gray-600">
                                  October 19, 2022
                                </Text>
                              </div>
                              <div className="flex items-center gap-[5px]">
                                <Img
                                  src="img_lock_gray_900_03.svg"
                                  width={11}
                                  height={16}
                                  alt="lock"
                                  className="h-[16px]"
                                />
                                <Text as="p" className="!text-gray-600">
                                  By admin
                                </Text>
                              </div>
                            </div>
                            <Heading as="h4" className="mt-[21px] leading-[30px]">
                              World of Wander Discovering Diverse Landscapes
                            </Heading>
                            <Text as="p" className="mt-2.5 leading-[30px] !text-gray-600">
                              Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum
                            </Text>
                          </div>
                          <div className="flex items-center gap-2.5 py-[5px]">
                            <Link href="#">
                              <Heading size="xs" as="h5">
                                Read More
                              </Heading>
                            </Link>
                            <Img
                              src="img_arrow_left.svg"
                              width={14}
                              height={14}
                              alt="arrowright"
                              className="h-[14px] w-[14px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
        <Footer1 className="mt-[225px] self-stretch" />
      </div>
    </div>
  );
}
