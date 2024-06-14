"use client";

import { CloseSVG } from "../../assets/images";
import { Button, Heading, Text, Input, Img, CheckBox, TextArea } from "../../components";
import BlogDetailsStackview from "../../components/BlogDetailsStackview";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import React, { Suspense } from "react";

export default function BlogdetailsPage() {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");

  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[110px] md:gap-[82px] sm:gap-[55px]">
        <div className="flex w-[94%] flex-col gap-[30px] md:w-full md:p-5">
          <Header className="md:flex-col" />
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[156px] md:py-5">
            <div className="container-xs mb-[31px] flex md:p-5">
              <div className="flex flex-col items-start">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Blog Details
                </Heading>
                <div className="relative mt-[-9px] flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px] self-start" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Blog Details
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div className="flex items-start gap-[30px] md:flex-col">
            <div className="flex flex-1 flex-col items-start md:self-stretch">
              <div className="h-[416px] self-stretch rounded-[20px] bg-blue_gray-100" />
              <div className="mt-[26px] flex w-[49%] md:w-full sm:flex-col">
                <div className="flex items-center gap-[5px]">
                  <Img src="img_checkmark.svg" width={11} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p" className="!text-gray-900_03">
                    By admin
                  </Text>
                </div>
                <div className="ml-4 flex flex-1 items-center gap-[5px] sm:ml-0 sm:self-stretch">
                  <Img src="img_checkmark.svg" width={11} height={16} alt="checkmark" className="h-[16px]" />
                  <Text as="p" className="!text-gray-900_03">
                    October 30, 2024
                  </Text>
                </div>
                <div className="ml-5 flex flex-1 items-center gap-1 sm:ml-0 sm:self-stretch">
                  <Img src="img_checkmark.svg" width={15} height={16} alt="checkmark" className="h-[16px] w-[15px]" />
                  <Text as="p" className="!text-gray-900_03">
                    Comments (05)
                  </Text>
                </div>
              </div>
              <div className="mt-[26px] flex flex-col items-start gap-2.5 self-stretch">
                <Heading size="3xl" as="h2">
                  Unity Bridge Visa Consultants
                </Heading>
                <Text as="p" className="w-full leading-[30px] !text-gray-600">
                  Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                  justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros
                  justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu
                  Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                  justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros
                  justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu
                </Text>
                <Text as="p" className="w-full leading-[30px] !text-gray-600">
                  Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                  justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros
                  justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu
                </Text>
              </div>
              <div className="mt-[30px] self-stretch">
                <div className="flex gap-[29px] md:flex-col">
                  <div className="h-[342px] w-full rounded-[20px] bg-blue_gray-100" />
                  <div className="flex w-full flex-col">
                    <Heading size="xl" as="h3" className="capitalize leading-9">
                      Explore Beyond Boundaries Wanderlust Unleashed
                    </Heading>
                    <Text as="p" className="mt-5 leading-[30px] !text-gray-600">
                      Aliquam eros justo, posuere loborti viverra laoreet mat ti ullamcorper posuere viverra .Aliquam
                      eros justo, po suere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
                      Aliquam
                    </Text>
                    <div className="mt-5 flex items-center gap-3.5">
                      <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                      <Text as="p" className="!text-black-900_01">
                        Mistakes To Avoid
                      </Text>
                    </div>
                    <div className="mt-2.5 flex items-center gap-3.5">
                      <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                      <Text as="p" className="self-end !text-black-900_01">
                        Your Startup
                      </Text>
                    </div>
                    <div className="mt-2.5 flex items-center gap-3.5">
                      <Img src="img_checkmark.svg" width={14} height={16} alt="checkmark" className="h-[16px]" />
                      <Text as="p" className="!text-black-900_01">
                        Knew About Fonts
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[30px] flex flex-col items-start justify-center gap-5 self-stretch rounded-[20px] bg-white-A700 p-[50px] shadow-xs md:p-5">
                <Button size="2xl" variant="outline" className="w-[51px] rounded-[25px]">
                  <Img src="img_close_light_green_a700.svg" width={18} height={20} />
                </Button>
                <Text size="md" as="p" className="w-full leading-[30px]">
                  With a commitment to driving technological evolution, our IT solutions and tour desigm services are
                  the cornerstone of your digital progression. We transcend boundariesi enabling businesses to not{" "}
                </Text>
                <div className="flex flex-col items-start gap-2.5">
                  <Heading as="h4">Stanio lainto</Heading>
                  <Text as="p" className="!text-gray-600">
                    Authore
                  </Text>
                </div>
              </div>
              <Heading size="xl" as="h5" className="mt-8 capitalize">
                Roam the Globe Write Your Story
              </Heading>
              <div className="mt-[15px] flex flex-col gap-[30px] self-stretch">
                <Text as="p" className="leading-[30px] !text-gray-600">
                  Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                  justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros
                  justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu
                  Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros
                  justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros
                  justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu
                </Text>
                <div>
                  <div className="flex flex-col gap-[39px]">
                    <div className="h-px bg-gray-300" />
                    <div className="flex items-center justify-between gap-5 sm:flex-col">
                      <div className="flex w-[43%] justify-center gap-5 sm:w-full">
                        <Button color="light_green_50_01" size="sm" className="w-full flex-1 rounded-[20px]">
                          Spa Retreats
                        </Button>
                        <Button color="light_green_50_01" size="sm" className="min-w-[102px] rounded-[20px]">
                          Wine Tours
                        </Button>
                        <Button color="light_green_50_01" size="sm" className="min-w-[104px] rounded-[20px]">
                          Travel Pack
                        </Button>
                      </div>
                      <Img
                        src="img_group_1000008681.svg"
                        width={170}
                        height={35}
                        alt="image"
                        className="h-[35px] w-[20%] self-start sm:w-full"
                      />
                    </div>
                    <div className="h-px bg-gray-300" />
                  </div>
                </div>
              </div>
              <div className="mt-[79px] self-stretch rounded-[20px] bg-light_green-50_01 p-[39px] sm:p-5">
                <div className="flex flex-col items-start gap-6">
                  <Heading size="xl" as="h6" className="capitalize">
                    Add a comment
                  </Heading>
                  <Text as="p">By using form u agree with the message sorage, you can contact us directly now</Text>
                  <div className="flex gap-2.5 self-stretch md:flex-col">
                    <Input
                      size="xs"
                      type="text"
                      name="message"
                      placeholder={`Your Name`}
                      className="w-full rounded-[20px] !text-gray-600 sm:pr-5"
                    />
                    <Input
                      size="xs"
                      type="email"
                      name="email"
                      placeholder={`Your Email`}
                      className="w-full rounded-[20px] !text-gray-600 sm:pr-5"
                    />
                    <Input
                      size="xs"
                      name="your_website"
                      placeholder={`Your Website`}
                      className="w-full rounded-[20px] !text-gray-600 sm:pr-5"
                    />
                  </div>
                  <TextArea
                    size="sm"
                    shape="round"
                    name="write_your"
                    placeholder={`Write your messege`}
                    className="self-stretch text-gray-600 sm:pb-5 sm:pr-5"
                  />
                  <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                    <CheckBox
                      name="savemynameemail"
                      label="Save my name email and website"
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
                  value={searchBarValue3}
                  onChange={(e) => setSearchBarValue3(e)}
                  suffix={
                    <div className="flex h-[25px] w-[25px] items-center justify-center rounded-[12px]">
                      {searchBarValue3?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue3("")} height={25} width={25} fillColor="#034833ff" />
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
              <div className="mt-[31px] flex flex-col items-start justify-center gap-4 rounded-[20px] bg-white-A700 p-[30px] shadow-xs sm:p-5">
                <Heading as="h5">Popular Post</Heading>
                <div className="h-px self-stretch rounded-[1px] bg-gray-300" />
                <div className="flex flex-col gap-5 self-stretch">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {[...Array(3)].map((d, index) => (
                      <BlogDetailsStackview key={"blogdetails" + index} />
                    ))}
                  </Suspense>
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
        </div>
        <Footer1 className="self-stretch" />
      </div>
    </div>
  );
}
