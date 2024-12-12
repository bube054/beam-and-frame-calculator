import React from "react";
import Scroller from "../../../components/scrollers/Scroller";
import { Outlet } from "react-router";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar";
import BigHeader from "../../../components/typography/BigHeader";
import Tabs from "./Tabs";
import ControlBar from "./ControlBar";

export default function Output() {
  return (
    <div className="basis-[75%] bg-tertiary flex flex-col justify-between h-full max-h-full relative overflow-y-hidden">
      <div className="flex flex-col gap-y-3 py-12 px-8 grow overflow-y-auto">
        <Navbar />
        <BigHeader className="min-h-9">Beam Calculator</BigHeader>
        <div className="grow bg-primary p-4 flex flex-col overflow-y-auto">
          <Tabs />
          <Scroller className="grow overflow-y-auto py-4 px-6">
            <Outlet />
          </Scroller>
        </div>
      </div>
      <ControlBar className="" />
    </div>
  );
}
