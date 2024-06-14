import { Text, Heading, Img, Button } from "../../components";
import CoachingDetailsColumnsafety from "../../components/CoachingDetailsColumnsafety";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import React, { Suspense } from "react";

export default function CoachingdetailsPage() {
  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[120px] md:gap-[90px] sm:gap-[60px]">
        <div className="flex w-[94%] flex-col items-center md:w-full md:p-5">
          <Header className="self-stretch md:flex-col" />
          <div className="mt-[30px] flex justify-center self-stretch rounded-[50px] bg-teal-900_cc py-[156px] md:py-5">
            <div className="container-xs mb-[31px] flex md:p-5">
              <div className="flex flex-col items-start">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Coaching Details
                </Heading>
                <div className="relative mt-[-9px] flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px] self-start" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Coaching Details
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xs mt-[100px]">
            <div className="flex items-start gap-[30px] md:flex-col">
              <div className="flex w-[33%] flex-col gap-[33px] md:w-full">
                <div className="rounded-[20px] bg-light_green-50_01 p-[30px] sm:p-5">
                  <div className="flex flex-col gap-[15px] pt-[85px] md:pt-5">
                    <div className="flex flex-1 items-center justify-between gap-5 rounded-[35px] bg-white-A700 p-5 shadow-xs">
                      <Heading size="md" as="h4" className="self-end">
                        PTE Couching
                      </Heading>
                      <Button color="light_green_A700_19" size="xs" shape="circle" className="w-[30px] !rounded-[15px]">
                        <Img src="img_arrow_left.svg" width={7} height={14} />
                      </Button>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-5 rounded-[35px] bg-white-A700 p-5 shadow-xs">
                      <Heading size="md" as="h5" className="self-end">
                        SAT Couching
                      </Heading>
                      <Button size="xs" shape="round" className="w-[30px] !rounded-[15px]">
                        <Img src="img_save.svg" width={7} height={14} />
                      </Button>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-5 rounded-[35px] bg-white-A700 p-5 shadow-xs">
                      <Heading size="md" as="h6" className="!text-gray-900_03">
                        Student service
                      </Heading>
                      <div className="flex w-[10%] flex-col items-start justify-center rounded-[15px] bg-light_green-A700_19 p-[7px]">
                        <Img src="img_arrow_left.svg" width={7} height={14} alt="arrowright" className="h-[14px]" />
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-5 rounded-[35px] bg-white-A700 p-5 shadow-xs">
                      <Heading size="md" as="h6">
                        Skills Exam
                      </Heading>
                      <div className="flex w-[10%] flex-col items-start justify-center rounded-[15px] bg-light_green-A700_19 p-[7px]">
                        <Img src="img_arrow_left.svg" width={7} height={14} alt="arrowright" className="h-[14px]" />
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-5 rounded-[35px] bg-white-A700 p-5 shadow-xs">
                      <Heading size="md" as="h6" className="self-end">
                        OET Coaching
                      </Heading>
                      <div className="flex w-[10%] flex-col items-start justify-center rounded-[15px] bg-light_green-A700_19 p-[7px]">
                        <Img src="img_arrow_left.svg" width={7} height={14} alt="arrowright" className="h-[14px]" />
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-5 rounded-[35px] bg-white-A700 p-5 shadow-xs">
                      <Heading size="md" as="h6" className="self-end">
                        IELTS Coaching
                      </Heading>
                      <Button color="light_green_A700_19" size="xs" shape="circle" className="w-[30px] !rounded-[15px]">
                        <Img src="img_arrow_left.svg" width={7} height={14} />
                      </Button>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-5 rounded-[35px] bg-white-A700 p-5 shadow-xs">
                      <Heading size="md" as="h6" className="self-end">
                        TOFEL Coaching
                      </Heading>
                      <Button color="light_green_A700_19" size="xs" shape="circle" className="w-[30px] !rounded-[15px]">
                        <Img src="img_arrow_left.svg" width={7} height={14} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center rounded-[20px] bg-light_green-50_01 p-10 sm:p-5">
                  <Img
                    src="img_call_light_green_a700.svg"
                    width={96}
                    height={96}
                    alt="call"
                    className="h-[96px] w-[96px]"
                  />
                  <Heading as="h5" className="mt-[17px]">
                    GET TOUCH
                  </Heading>
                  <Heading as="h5" className="mb-[17px] mt-[72px]">
                    (+888) 123 456 765
                  </Heading>
                </div>
              </div>
              <div className="flex-1 md:self-stretch">
                <div className="h-[447px] rounded-[30px] bg-blue_gray-100" />
                <div className="mt-[25px] flex flex-col gap-[34px]">
                  <div className="flex flex-col items-start gap-[21px]">
                    <Heading size="3xl" as="h1">
                      About IELTS Coaching
                    </Heading>
                    <div className="flex flex-col gap-[30px] self-stretch">
                      <Text as="p" className="leading-[30px] !text-gray-600">
                        IELTS score is internationally recognized as an English Language proficiency requirement for
                        higher education, in almost all countries including the USA, the United Kingdom, Australia,
                        Canada, and New Zealand. The highest IELT Academic module test assesses whether you have
                        adequate possible band score is 9.0; most universities accept a score of 6.0 for undergraduate
                        admission and 6.0-7.0 for graduate admission. There are two versions of the{" "}
                      </Text>
                      <Text as="p" className="leading-[30px] !text-gray-600">
                        IELTS score is internationally recognized as an English Language proficiency requirement for
                        higher education, in almost all countries including the USA, the United Kingdom, Australia,
                        Canada,{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-[84%] gap-[170px] md:w-full md:flex-row sm:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {[...Array(2)].map((d, index) => (
                        <CoachingDetailsColumnsafety key={"listsafety" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
                <div className="mt-10 h-[289px] rounded-[20px] bg-blue_gray-100" />
                <div className="mt-[29px] flex flex-col items-start gap-[18px]">
                  <Heading size="xl" as="h3" className="capitalize">
                    Our Benefits
                  </Heading>
                  <Text as="p" className="w-full leading-[30px] !text-gray-600">
                    IELTS score is internationally recognized as an English Language proficiency requirement for higher
                    education, in almost all countries including the USA, the United Kingdom, Australia, Canada, and New
                    Zealand. The highest IELT Academic module test assesses whether you have adequate possible band
                    score is 9.0; most universities accept a score of 6.0 for undergraduate admission and 6.0-7.0 for
                    graduate admission. There are two versions of the{" "}
                  </Text>
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
