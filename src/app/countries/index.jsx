import { Heading, Img } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import React, { Suspense } from "react";

const data = [
  { germany: "Germany" },
  { germany: "South Korea" },
  { germany: "Japan" },
  { germany: "Indonesia" },
  { germany: "South Africa" },
  { germany: "Turkey" },
  { germany: "Egypt" },
  { germany: "Argentina" },
  { germany: "Brazil" },
  { germany: "Mexico" },
  { germany: "Indonesia" },
  { germany: "Russia" },
];

export default function CountriesPage() {
  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[121px] md:gap-[90px] sm:gap-[60px]">
        <div className="flex w-[94%] flex-col items-center gap-[100px] md:w-full md:gap-[75px] md:p-5 sm:gap-[50px]">
          <div className="flex flex-col gap-[30px] self-stretch">
            <Header className="md:flex-col" />
            <div className="flex flex-col items-center justify-center rounded-[50px] bg-teal-900_cc py-[148px] md:py-5">
              <div className="container-xs mb-[39px] flex flex-col items-start md:p-5">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Countries
                </Heading>
                <div className="flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px]" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Countries
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xs">
            <div className="flex items-start gap-[30px] md:flex-col">
              <div className="flex w-[33%] flex-col gap-5 rounded-bl-[20px] rounded-br-[20px] bg-white-A700 p-10 shadow-xs md:w-full sm:p-5">
                <div>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start justify-between gap-5">
                      <Heading as="h4">Asia</Heading>
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
                  <Heading as="h5">Europe</Heading>
                  <Img src="img_arrow_left.svg" width={7} height={14} alt="arrowright" className="h-[14px]" />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="h-px bg-gray-300" />
                  <div className="flex items-start justify-between gap-5">
                    <Heading as="h6" className="!text-light_green-A700">
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
                  <div className="h-px bg-gray-300" />
                </div>
                <div className="flex items-start justify-between gap-5">
                  <Heading as="h5">Australia</Heading>
                  <Img src="img_arrow_left.svg" width={7} height={14} alt="arrowright" className="mt-[5px] h-[14px]" />
                </div>
                <div className="h-px bg-gray-300" />
                <div className="flex items-start justify-between gap-5">
                  <Heading as="h5">Latine America</Heading>
                  <Img src="img_arrow_left.svg" width={7} height={14} alt="arrowright" className="mt-[5px] h-[14px]" />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="h-px bg-gray-300" />
                  <div className="flex items-start justify-between gap-5">
                    <Heading as="h5">Africa</Heading>
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
              <div className="grid flex-1 grid-cols-2 gap-[30px] md:grid-cols-1 md:self-stretch">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <div
                      key={"countries" + index}
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
        <Footer1 className="self-stretch" />
      </div>
    </div>
  );
}
