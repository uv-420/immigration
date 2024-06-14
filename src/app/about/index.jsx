import { Heading, Img, Button, TextArea, Text, Input } from "../../components";
import Footer1 from "../../components/Footer1";
import Header1 from "../../components/Header1";
import HomeTwo1 from "../../components/HomeTwo1";
import React, { Suspense } from "react";

const data = [
  { visavoyage: "Visa Voyage Agency" },
  { visavoyage: "International Access Visas" },
  { visavoyage: "Gateway to Global Citizenship" },
];
const data1 = [
  { germany: "Germany" },
  { germany: "South Korea" },
  { germany: "Japan" },
  { germany: "Indonesia" },
  { germany: "South Africa" },
  { germany: "Turkey" },
];
const data2 = [
  { k: "10k+", complete: "Complete project" },
  { k: "20+", complete: "Team member" },
  { k: "5k+", complete: "Winning award" },
  { k: "100+", complete: "Complete project" },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[120px] md:gap-[90px] sm:gap-[60px]">
        <div className="flex w-[94%] flex-col items-center md:w-full md:p-5">
          <div className="flex flex-col gap-[30px] self-stretch">
            <Header1 />
            <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[148px] md:py-5">
              <div className="container-xs mb-[39px] flex md:p-5">
                <div className="flex flex-col items-start">
                  <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                    About Us
                  </Heading>
                  <div className="flex flex-wrap items-center gap-[15px]">
                    <Heading size="md" as="h2" className="!text-white-A700">
                      Home
                    </Heading>
                    <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px]" />
                    <Heading size="md" as="h3" className="!text-white-A700">
                      About Us
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xs mt-[100px]">
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
                          <Text size="xs" as="p" className="relative z-[1] rotate-[90deg] !text-[11.48px]">
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
                        <Text size="xs" as="p" className="relative z-[2] rotate-[111deg] !text-[11.48px]">
                          i
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="relative z-[3] ml-[-3px] mt-[13px] rotate-[120deg] !text-[11.48px]"
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
                        <Text size="xs" as="p" className="relative z-[4] mb-[17px] rotate-[-140deg] !text-[11.48px]">
                          s
                        </Text>
                        <Text size="xs" as="p" className="relative z-[5] rotate-[-130deg] !text-[11.48px]">
                          e
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="relative z-[6] ml-[-1px] mt-[13px] rotate-[-120deg] !text-[11.48px]"
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
                    <Heading size="3xl" as="h4" className="self-end !text-white-A700">
                      25
                    </Heading>
                    <Heading size="md" as="h5" className="w-[65%] leading-7 !text-white-A700">
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
                    <Heading size="xs" as="h6" className="uppercase tracking-[1.40px]">
                      Why Choose Us
                    </Heading>
                  </div>
                  <Heading size="3xl" as="h1" className="mt-2.5 leading-[60px]">
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
                      <div className="flex w-[50%] items-center justify-center gap-[15px]">
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
          <div className="mt-[162px] self-stretch rounded-[50px] border border-solid border-gray-300 bg-white-A700">
            <div className="flex h-[730px] items-center justify-center rounded-[50px] bg-[url(/images/img_group_1913.png)] bg-cover bg-no-repeat py-[119px] md:h-auto md:py-5">
              <div className="container-xs flex justify-center md:p-5">
                <div className="flex w-full flex-col items-center gap-[60px] sm:gap-[30px]">
                  <div className="flex w-[49%] flex-col items-center gap-2.5 md:w-full">
                    <div className="flex items-center gap-2.5">
                      <Img src="img_frame.svg" width={20} height={20} alt="image" className="h-[20px] w-[20px]" />
                      <Heading size="xs" as="p" className="uppercase tracking-[1.40px]">
                        Process Overview
                      </Heading>
                    </div>
                    <Heading size="3xl" as="h1" className="w-full text-center leading-[60px]">
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
                          <Heading as="h5" className="ml-2.5 mt-[74px] md:ml-0">
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
          <div className="container-xs mt-[119px]">
            <div className="flex flex-col gap-[119px] md:gap-[89px] sm:gap-[59px]">
              <div>
                <div className="flex gap-[30px] md:flex-col">
                  <div className="h-[608px] w-[33%] rounded-[20px] bg-blue_gray-100" />
                  <div className="flex flex-1 flex-col gap-[30px] md:self-stretch">
                    <div className="rounded-[20px] bg-white-A700 pl-[60px] md:pl-5">
                      <div className="flex items-center md:flex-col">
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
                              <Heading as="h5">Get our best offers quickly</Heading>
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
                    <div className="flex gap-[62px] rounded-[20px] bg-light_green-A700 py-[59px] pl-[59px] pr-14 md:flex-col md:p-5">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data2.map((d, index) => (
                          <div key={"counter" + index} className="flex flex-1 flex-col items-start gap-[9px]">
                            <Heading size="3xl" as="h1" className="!text-white-A700">
                              {d.k}
                            </Heading>
                            <Text as="p" className="!text-white-A700">
                              {d.complete}
                            </Text>
                          </div>
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
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
                  <Img
                    src="img_lock_red_300.svg"
                    width={26}
                    height={24}
                    alt="lock"
                    className="mb-[9px] mt-3 h-[24px]"
                  />
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
          <div className="mt-[120px] flex justify-center self-stretch rounded-[50px] bg-light_green-50_01 py-[119px] md:py-5">
            <div className="container-xs mt-[19px] flex items-center justify-between gap-5 md:flex-col md:p-5">
              <div className="w-[47%] md:w-full">
                <Img src="img_image.svg" width={600} height={671} alt="image" className="h-[671px] w-full md:h-auto" />
              </div>
              <div className="flex w-[49%] flex-col items-start gap-10 md:w-full">
                <div className="flex w-[86%] flex-col gap-[7px] md:w-full">
                  <div className="flex items-start gap-2.5">
                    <Heading size="xs" as="p" className="uppercase tracking-[1.40px]">
                      Contact Information
                    </Heading>
                    <Img src="img_object.svg" width={13} height={12} alt="object" className="h-[12px] w-[13px]" />
                  </div>
                  <Heading size="3xl" as="h1" className="leading-[60px]">
                    Let Your Wanderlust Guide You
                  </Heading>
                </div>
                <div className="self-stretch rounded-[20px] bg-white-A700 p-10 sm:p-5">
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
          <div className="container-xs mt-[118px]">
            <div>
              <div className="flex flex-col items-center gap-[50px]">
                <div className="flex w-[49%] flex-col items-center gap-[7px] md:w-full">
                  <div className="flex items-start gap-2.5">
                    <Heading size="xs" as="p" className="uppercase tracking-[1.40px]">
                      Countries category
                    </Heading>
                    <Img src="img_object.svg" width={13} height={12} alt="object" className="h-[12px] w-[13px]" />
                  </div>
                  <Heading size="3xl" as="h1" className="w-full text-center leading-[60px] !text-gray-900_01">
                    Experience the World Anew Unveil Hidden{" "}
                  </Heading>
                </div>
                <div className="flex items-start gap-[30px] self-stretch md:flex-col">
                  <div className="flex w-[33%] flex-col gap-5 rounded-bl-[20px] rounded-br-[20px] bg-white-A700 p-10 shadow-xs md:w-full sm:p-5">
                    <div className="flex items-start justify-between gap-5">
                      <Heading as="h5" className="!text-teal-900_4c">
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
                    <div className="flex items-start justify-between gap-5">
                      <Heading as="h5" className="!text-teal-900_4c">
                        Europe
                      </Heading>
                      <Img src="img_arrow_left.svg" width={7} height={14} alt="arrowright" className="h-[14px]" />
                    </div>
                    <div className="h-px bg-gray-300" />
                    <div className="flex items-start justify-between gap-5">
                      <Heading as="h5">North America</Heading>
                      <Img
                        src="img_arrow_left.svg"
                        width={7}
                        height={14}
                        alt="arrowright"
                        className="mt-[5px] h-[14px]"
                      />
                    </div>
                    <div className="h-px bg-gray-300" />
                    <div className="flex items-start justify-between gap-5">
                      <Heading as="h5" className="!text-teal-900_4c">
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
                    <div className="flex items-start justify-between gap-5">
                      <Heading as="h5" className="!text-teal-900_4c">
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
                    <div className="h-px bg-gray-300" />
                    <div className="flex items-start justify-between gap-5">
                      <Heading as="h5" className="!text-teal-900_4c">
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
                  <div className="grid flex-1 grid-cols-2 gap-[30px] md:grid-cols-1 md:self-stretch">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data1.map((d, index) => (
                        <div
                          key={"gridview" + index}
                          className="flex w-full cursor-pointer items-center gap-[30px] rounded-[20px] border border-solid border-gray-300 bg-white-A700 p-5 hover:border hover:border-solid hover:border-light_green-A700 hover:shadow-xs"
                        >
                          <div className="ml-2.5 h-[80px] w-[24%] rounded-[40px] border border-solid border-light_green-A700 bg-blue_gray-100" />
                          <Heading as="h5" className="mb-[22px] self-end">
                            {d.germany}
                          </Heading>
                        </div>
                      ))}
                    </Suspense>
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
