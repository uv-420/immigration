import { Button, Img, Text, Heading } from "../../components";
import Footer1 from "../../components/Footer1";
import Header1 from "../../components/Header1";
import React from "react";

export default function TeamPage() {
  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[110px] md:gap-[82px] sm:gap-[55px]">
        <div className="flex w-[94%] flex-col gap-[30px] md:w-full md:p-5">
          <Header1 />
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[149px] md:py-5">
            <div className="container-xs mb-[38px] flex md:p-5">
              <div className="flex w-[16%] flex-col items-start md:w-full">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Team
                </Heading>
                <div className="relative mt-[-1px] flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px]" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Team
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div>
            <div className="grid grid-cols-3 justify-center gap-[30px] md:grid-cols-2 sm:grid-cols-1">
              <div className="flex w-full flex-col items-center gap-[23px] rounded-[20px] bg-white-A700 pb-10 shadow-xs sm:pb-5">
                <Img
                  src="img_rectangle_869.png"
                  width={410}
                  height={370}
                  alt="image"
                  className="h-[370px] w-full rounded-tl-[20px] rounded-tr-[20px] object-cover md:h-auto"
                />
                <div className="flex w-[80%] items-center justify-between gap-5 md:w-full md:p-5">
                  <div className="flex flex-col gap-2">
                    <Heading as="h2">Jane Cooper</Heading>
                    <Text as="p" className="!text-gray-600">
                      President of Sales
                    </Text>
                  </div>
                  <Button variant="outline" shape="round" className="w-[60px] px-5">
                    <Img src="img_checkmark.svg" width={16} height={18} />
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[9px] rounded-[20px] bg-white-A700 pb-10 shadow-xs sm:pb-5">
                <div className="relative h-[385px] self-stretch">
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[370px] w-full rounded-tl-[20px] rounded-tr-[20px] bg-blue_gray-100" />
                  <div className="absolute bottom-[0.00px] right-[13%] m-auto w-[9%] rounded-[18px] bg-light_green-A700 p-2.5">
                    <div className="mb-[7px] mt-[5px] flex flex-col items-center gap-[19px]">
                      <Img src="img_close.svg" width={16} height={16} alt="close" className="h-[16px] w-full" />
                      <Img src="img_save.svg" width={10} height={22} alt="save" className="h-[22px]" />
                      <Img src="img_save.svg" width={14} height={16} alt="save" className="h-[16px]" />
                      <Img src="img_save.svg" width={14} height={16} alt="save" className="h-[16px]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[80%] items-center justify-between gap-5 md:w-full md:p-5">
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading as="h3">Savannah Nguyen</Heading>
                    <Text as="p" className="!text-gray-600">
                      Nursing Assistant
                    </Text>
                  </div>
                  <Button variant="outline" shape="round" className="w-[60px] px-5">
                    <Img src="img_arrow_left.svg" width={16} height={18} />
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[21px] rounded-[20px] bg-white-A700 pb-10 shadow-xs sm:pb-5">
                <div className="h-[370px] self-stretch rounded-tl-[20px] rounded-tr-[20px] bg-blue_gray-100" />
                <div className="flex w-[80%] items-center justify-between gap-5 md:w-full md:p-5">
                  <div className="flex flex-col items-start gap-3">
                    <Heading as="h4">Ronald Richards</Heading>
                    <Text as="p" className="!text-gray-600">
                      Dog Trainer
                    </Text>
                  </div>
                  <Button variant="outline" shape="round" className="w-[60px] self-end px-5">
                    <Img src="img_checkmark.svg" width={16} height={18} />
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[21px] rounded-[20px] bg-white-A700 pb-10 shadow-xs sm:pb-5">
                <div className="h-[370px] self-stretch rounded-tl-[20px] rounded-tr-[20px] bg-blue_gray-100" />
                <div className="flex w-[80%] items-center justify-between gap-5 md:w-full md:p-5">
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading as="h5">Jacob Jones</Heading>
                    <Text as="p" className="!text-gray-600">
                      President of Sales
                    </Text>
                  </div>
                  <Button variant="outline" shape="round" className="w-[60px] self-end px-5">
                    <Img src="img_checkmark.svg" width={16} height={18} />
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[21px] rounded-[20px] bg-white-A700 pb-10 shadow-xs sm:pb-5">
                <div className="h-[370px] self-stretch rounded-tl-[20px] rounded-tr-[20px] bg-blue_gray-100" />
                <div className="flex w-[80%] items-center justify-between gap-5 md:w-full md:p-5">
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading as="h6">Annette Black</Heading>
                    <Text as="p" className="!text-gray-600">
                      Medical Assistant
                    </Text>
                  </div>
                  <Button variant="outline" shape="round" className="w-[60px] self-end px-5">
                    <Img src="img_checkmark.svg" width={16} height={18} />
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[21px] rounded-[20px] bg-white-A700 pb-10 shadow-xs sm:pb-5">
                <div className="h-[370px] self-stretch rounded-tl-[20px] rounded-tr-[20px] bg-blue_gray-100" />
                <div className="flex w-[80%] items-center justify-between gap-5 md:w-full md:p-5">
                  <div className="flex flex-col items-start gap-3">
                    <Heading as="h5">Albert Flores</Heading>
                    <Text as="p" className="!text-gray-600">
                      Marketing Coordinator
                    </Text>
                  </div>
                  <Button variant="outline" shape="round" className="w-[60px] self-end px-5">
                    <Img src="img_checkmark.svg" width={16} height={18} />
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-6 rounded-[20px] bg-white-A700 pb-10 shadow-xs sm:pb-5">
                <div className="h-[370px] self-stretch rounded-tl-[20px] rounded-tr-[20px] bg-blue_gray-100" />
                <div className="flex w-[80%] items-center justify-between gap-5 md:w-full md:p-5">
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading as="h5">Cody Fisher</Heading>
                    <Text as="p" className="!text-gray-600">
                      Web Designer
                    </Text>
                  </div>
                  <Button variant="outline" shape="round" className="w-[60px] px-5">
                    <Img src="img_checkmark.svg" width={16} height={18} />
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-6 rounded-[20px] bg-white-A700 pb-10 shadow-xs sm:pb-5">
                <div className="h-[370px] self-stretch rounded-tl-[20px] rounded-tr-[20px] bg-blue_gray-100" />
                <div className="flex w-[80%] items-center justify-between gap-5 md:w-full md:p-5">
                  <div className="flex flex-col items-start gap-2">
                    <Heading as="h5">Arlene McCoy</Heading>
                    <Text as="p" className="!text-gray-600">
                      Medical Assistant
                    </Text>
                  </div>
                  <Button variant="outline" shape="round" className="w-[60px] px-5">
                    <Img src="img_checkmark.svg" width={16} height={18} />
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[21px] rounded-[20px] bg-white-A700 pb-10 shadow-xs sm:pb-5">
                <div className="h-[370px] self-stretch rounded-tl-[20px] rounded-tr-[20px] bg-blue_gray-100" />
                <div className="flex w-[80%] items-center justify-between gap-5 md:w-full md:p-5">
                  <div className="flex flex-col items-start gap-3">
                    <Heading as="h5">Darlene Robertson</Heading>
                    <Text as="p" className="!text-gray-600">
                      Dog Trainer
                    </Text>
                  </div>
                  <Button variant="outline" shape="round" className="w-[60px] self-end px-5">
                    <Img src="img_checkmark.svg" width={16} height={18} />
                  </Button>
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
