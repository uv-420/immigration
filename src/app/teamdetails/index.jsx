import { Button, CheckBox, TextArea, Input, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";
import TeamDetailsRow from "../../components/TeamDetailsRow";
import React, { Suspense } from "react";

export default function TeamdetailsPage() {
  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[110px] md:gap-[82px] sm:gap-[55px]">
        <div className="flex w-[94%] flex-col gap-[30px] md:w-full md:p-5">
          <Header1 />
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[148px] md:py-5">
            <div className="container-xs mb-[39px] flex md:p-5">
              <div className="flex flex-col items-start">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Team Details
                </Heading>
                <div className="flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px]" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Team Details
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
              <div className="h-[425px] w-[35%] rounded-[20px] bg-blue_gray-100" />
              <div className="flex w-[56%] justify-center md:w-full">
                <div className="flex w-full flex-col items-start">
                  <Heading size="3xl" as="h2">
                    Ashikur Rahman
                  </Heading>
                  <div className="mt-[7px] flex w-[31%] items-center gap-5 md:w-full">
                    <div className="h-px w-[35%] bg-teal-900" />
                    <Text as="p" className="!text-gray-600">
                      Medical Assistant
                    </Text>
                  </div>
                  <Text as="p" className="mt-[13px] w-full leading-[30px] !text-gray-600">
                    Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                    posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros
                    justo, posuere loborti viverra laoreet matti ullamcorper posuere
                  </Text>
                  <div className="mt-[25px] flex flex-wrap items-center gap-4">
                    <Heading size="md" as="h3" className="!text-black-900_01">
                      Responsibility:
                    </Heading>
                    <Text as="p" className="!text-gray-600">
                      Visa Special
                    </Text>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <Heading size="md" as="h4" className="!text-black-900_01">
                      Experience:
                    </Heading>
                    <Text as="p" className="!text-gray-600">
                      10 years +
                    </Text>
                  </div>
                  <div className="mt-[19px] flex flex-wrap items-center gap-[15px]">
                    <Heading size="md" as="h5" className="!text-black-900_01">
                      Email:
                    </Heading>
                    <Text as="p" className="self-end !text-gray-600">
                      adbs@gmail.com
                    </Text>
                  </div>
                  <div className="mt-[18px] flex flex-wrap items-center gap-[15px]">
                    <Heading size="md" as="h6" className="!text-black-900_01">
                      Phone:
                    </Heading>
                    <Text as="p" className="self-end !text-gray-600">
                      (907) 555-0101
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Heading size="xl" as="h3" className="mt-[89px] capitalize">
              Personal Experience
            </Heading>
            <div className="mt-[15px] flex flex-col gap-[30px] self-stretch">
              <Text as="p" className="leading-[30px] !text-gray-600">
                IELTS score is internationally recognized as an English Language proficiency requirement for higher
                education, in almost all countries including the USA, the United Kingdom, Australia, Canada, and New
                Zealand. The highest IELT Academic module test assesses whether you have adequate possible band score is
                9.0; most universities accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate
                admission. There are two versions of the{" "}
              </Text>
              <Text as="p" className="leading-[30px] !text-gray-600">
                IELTS score is internationally recognized as an English Language proficiency requirement for higher
                education, in almost all countries including the USA, the United Kingdom, Australia, Canada, and New
                Zealand. The highest IELT Academic module test assesses whether you have adequate possible band score is
                9.0; most universities accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate
                admission. There are two versions of the{" "}
              </Text>
            </div>
            <div className="mt-[29px] self-stretch">
              <div className="flex items-start justify-between gap-5 md:flex-col">
                <div className="flex w-[44%] flex-col items-start md:w-full">
                  <Heading size="xl" as="h3" className="capitalize">
                    Professional Skill
                  </Heading>
                  <div className="mt-[33px] self-stretch">
                    <div className="flex flex-col gap-[11px]">
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text as="p" className="!text-gray-600">
                          Devoloping Process
                        </Text>
                        <Text as="p" className="!text-gray-600">
                          70%
                        </Text>
                      </div>
                      <div className="relative h-[8px] rounded bg-gray-300">
                        <div style={{ width: "83%" }} className="absolute h-full rounded bg-light_green-A700" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-[37px] self-stretch">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {[...Array(2)].map((d, index) => (
                        <TeamDetailsRow key={"teamdetails" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
                <div className="flex w-[49%] flex-col items-start gap-[23px] rounded-[20px] bg-light_green-50_01 p-[39px] md:w-full sm:p-5">
                  <Heading size="xl" as="h3" className="capitalize">
                    Contact Me
                  </Heading>
                  <Text as="p">By using form u agree with the message sorage, you</Text>
                  <div className="flex flex-col gap-[25px] self-stretch">
                    <div className="flex gap-[30px] sm:flex-col">
                      <Input
                        size="xs"
                        type="text"
                        name="message"
                        placeholder={`Your Name`}
                        className="w-full rounded-[20px] !text-gray-600 sm:w-full sm:pr-5"
                      />
                      <Input
                        size="xs"
                        type="email"
                        name="email"
                        placeholder={`Your Email`}
                        className="w-full rounded-[20px] !text-gray-600 sm:w-full sm:pr-5"
                      />
                    </div>
                    <TextArea
                      size="sm"
                      shape="round"
                      name="write_your"
                      placeholder={`Write your messege`}
                      className="text-gray-600 sm:pb-5 sm:pr-5"
                    />
                    <div className="flex items-center justify-between gap-5 sm:flex-col">
                      <CheckBox
                        name="savemynameemail"
                        label="Save my name email"
                        id="savemynameemail"
                        className="mb-[11px] gap-2.5 self-end text-base text-teal-900"
                      />
                      <Button size="xl" className="min-w-[202px] rounded-[25px] font-semibold sm:px-5">
                        Post comment
                      </Button>
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
