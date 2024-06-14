import { Button, TextArea, Text, SelectBox, Img, Input, Heading } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import React, { Suspense } from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function GalleryPage() {
  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[110px] md:gap-[82px] sm:gap-[55px]">
        <div className="flex w-[94%] flex-col gap-[30px] md:w-full md:p-5">
          <Header className="md:flex-col" />
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[157px] md:py-5">
            <div className="container-xs mb-[31px] flex md:p-5">
              <div className="flex w-[22%] flex-col items-start md:w-full">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Gallery
                </Heading>
                <div className="relative mt-[-9px] flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px] self-start" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Gallery
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div className="grid grid-cols-3 justify-center gap-[30px] md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {[...Array(6)].map((d, index) => (
                <div key={"gallery" + index} className="h-[580px] w-full rounded-[20px] bg-blue_gray-100" />
              ))}
            </Suspense>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[120px] self-stretch md:gap-[90px] sm:gap-[60px]">
          <div className="container-xs md:p-5">
            <div className="flex items-center justify-between gap-5 rounded-[20px] bg-white-A700 p-[42px] shadow-xs md:flex-col md:p-5">
              <div className="ml-[37px] flex w-[46%] flex-col md:ml-0 md:w-full">
                <div className="flex items-center gap-2.5">
                  <Img src="img_frame.svg" width={20} height={20} alt="image" className="h-[20px] w-[20px]" />
                  <Heading size="xs" as="h2" className="uppercase tracking-[1.40px]">
                    Success story
                  </Heading>
                </div>
                <Heading size="3xl" as="h3" className="mt-2.5 leading-[60px]">
                  Remote Destinations Seeking Solitude{" "}
                </Heading>
                <Text as="p" className="mt-5 leading-[30px] !text-gray-600">
                  Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever
                </Text>
                <div className="mt-5 flex w-[35%] flex-col gap-2.5 md:w-full">
                  <div className="flex items-center gap-3.5">
                    <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                    <Heading size="md" as="h4">
                      Mistakes To Avoid
                    </Heading>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                    <Heading size="md" as="h5" className="self-end">
                      Your Startup
                    </Heading>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                    <Heading size="md" as="h6">
                      Knew About Fonts
                    </Heading>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                    <Heading size="md" as="h6">
                      Knew About Fonts
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="mb-[18px] mt-[23px] flex w-[49%] flex-col gap-[27px] md:w-full">
                <div className="flex flex-col gap-2">
                  <div className="flex w-[68%] flex-wrap justify-between gap-5 md:w-full">
                    <Text as="p">Your Email</Text>
                    <Text as="p">Your Phone</Text>
                  </div>
                  <div className="flex gap-[30px] sm:flex-col">
                    <Input
                      color="teal_900_3f"
                      variant="outline"
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`Your Email`}
                      suffix={
                        <div className="flex h-[19px] w-[14px] items-center justify-center">
                          <Img
                            src="img_linkedin.svg"
                            width={14}
                            height={19}
                            alt="linkedin"
                            className="h-[19px] w-[14px]"
                          />
                        </div>
                      }
                      className="w-full gap-[35px] !rounded-[30px] sm:w-full"
                    />
                    <Input
                      color="teal_900_3f"
                      variant="outline"
                      shape="round"
                      type="number"
                      name="phone"
                      placeholder={`Your Phone`}
                      suffix={
                        <div className="flex h-[19px] w-[14px] items-center justify-center">
                          <Img
                            src="img_linkedin.svg"
                            width={14}
                            height={19}
                            alt="linkedin"
                            className="h-[19px] w-[14px]"
                          />
                        </div>
                      }
                      className="w-full gap-[35px] !rounded-[30px] sm:w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Text as="p">Your Address</Text>
                  <SelectBox
                    shape="round"
                    indicator={
                      <Img src="img_linkedin.svg" width={11} height={19} alt="linkedin" className="h-[19px] w-[11px]" />
                    }
                    name="address"
                    placeholder={`Your Address`}
                    options={dropDownOptions}
                    className="gap-px self-stretch sm:pr-5"
                  />
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <Text as="p">Message</Text>
                  <TextArea
                    color="teal_900_3f"
                    variant="tarOutlineTeal9003f"
                    shape="round"
                    name="linkedin"
                    placeholder={`Write Message..`}
                    className="flex gap-[35px] self-stretch !border-teal-900_3f text-teal-900_99 sm:pb-5"
                  />
                </div>
                <Button size="6xl" shape="round" className="w-full font-semibold sm:px-5">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
          <Footer1 className="self-stretch" />
        </div>
      </div>
    </div>
  );
}
