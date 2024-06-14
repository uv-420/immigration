"use client";

import MegaMenu1 from "../MegaMenu1";
import { Button, Img, Heading } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [menuOpen3, setMenuOpen3] = React.useState(false);
  const [menuOpen4, setMenuOpen4] = React.useState(false);
  const [menuOpen5, setMenuOpen5] = React.useState(false);
  const [menuOpen6, setMenuOpen6] = React.useState(false);

  return (
    <header {...props} className={`${props.className} flex justify-between items-center gap-5 relative`}>
      <Img
        src="img_header_logo.png"
        width={157}
        height={41}
        alt="headerlogo"
        className="h-[41px] w-[157px] object-contain"
      />
      <ul className="flex gap-[34px] md:flex-col">
        <li
          onMouseLeave={() => {
            setMenuOpen(false);
          }}
          onMouseEnter={() => {
            setMenuOpen(true);
          }}
        >
          <div className="flex cursor-pointer items-center gap-1">
            <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
              Home
            </Heading>
            <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowleft" className="h-[10px] w-[8px]" />
          </div>
          {menuOpen ? <MegaMenu1 /> : null}
        </li>
        <li
          onMouseLeave={() => {
            setMenuOpen1(false);
          }}
          onMouseEnter={() => {
            setMenuOpen1(true);
          }}
        >
          <div className="flex cursor-pointer items-center gap-1">
            <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
              About Us
            </Heading>
            <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowleft" className="h-[10px] w-[8px]" />
          </div>
          {menuOpen1 ? <MegaMenu1 /> : null}
        </li>
        <li
          onMouseLeave={() => {
            setMenuOpen2(false);
          }}
          onMouseEnter={() => {
            setMenuOpen2(true);
          }}
        >
          <div className="flex cursor-pointer items-center gap-1">
            <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
              Services
            </Heading>
            <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowleft" className="h-[10px] w-[8px]" />
          </div>
          {menuOpen2 ? <MegaMenu1 /> : null}
        </li>
        <li
          onMouseLeave={() => {
            setMenuOpen3(false);
          }}
          onMouseEnter={() => {
            setMenuOpen3(true);
          }}
        >
          <div className="flex cursor-pointer items-center gap-1">
            <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
              Projects
            </Heading>
            <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowleft" className="h-[10px] w-[8px]" />
          </div>
          {menuOpen3 ? <MegaMenu1 /> : null}
        </li>
        <li
          onMouseLeave={() => {
            setMenuOpen4(false);
          }}
          onMouseEnter={() => {
            setMenuOpen4(true);
          }}
        >
          <div className="flex cursor-pointer items-center gap-1">
            <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
              Blog
            </Heading>
            <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowleft" className="h-[10px] w-[8px]" />
          </div>
          {menuOpen4 ? <MegaMenu1 /> : null}
        </li>
        <li
          onMouseLeave={() => {
            setMenuOpen5(false);
          }}
          onMouseEnter={() => {
            setMenuOpen5(true);
          }}
        >
          <div className="flex cursor-pointer items-center gap-1">
            <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
              Page
            </Heading>
            <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowleft" className="h-[10px] w-[8px]" />
          </div>
          {menuOpen5 ? <MegaMenu1 /> : null}
        </li>
        <li
          onMouseLeave={() => {
            setMenuOpen6(false);
          }}
          onMouseEnter={() => {
            setMenuOpen6(true);
          }}
        >
          <div className="flex cursor-pointer items-center gap-1">
            <Heading size="s" as="p" className="uppercase tracking-[1.40px]">
              Contact
            </Heading>
            <Img src="img_arrow_left.svg" width={8} height={10} alt="arrowleft" className="h-[10px] w-[8px]" />
          </div>
          {menuOpen6 ? <MegaMenu1 /> : null}
        </li>
      </ul>
      <Button
        size="6xl"
        shape="round"
        rightIcon={<Img src="img_save.svg" width={14} height={16} alt="save" className="h-[16px] w-[14px]" />}
        className="min-w-[223px] gap-2.5 font-semibold sm:px-5"
      >
        Get An Appointment
      </Button>
    </header>
  );
}
