import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { PiAddressBookBold } from "react-icons/pi";
import { MdDateRange } from "react-icons/md";
import { MdOutlineWhereToVote } from "react-icons/md";

export default function faq() {
  return (
    <>
      <div className="mx-5">
        <div className="mb-10 border-b pb-5">
          <h1 className="text-6xl mb-7 mt-5 font-bold">
            Frequently Asked Questions
          </h1>
          <h1 className="ml-1 text-xl">
            Quick answer to questions you may have.
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-5 ">
          <div>
            <Accordion variant="shadow" className="">
              <AccordionItem
                key="1"
                aria-label="Why is it called L4T?"
                title={
                  <h1 className="text-2xl font-semibold flex">
                    <h1 className="mt-1 mr-3"><BsFillQuestionCircleFill /></h1>Why is it called L4T?
                  </h1>
                }
                className=""
              >
                <h1 className="mb-5 text-xl">L4T stands for "Letter For Tomorrow". We want people to describe their emotions and feelings, so they can see these depiction whether for tomorrow or later.</h1>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion variant="shadow" className="grid">
              <AccordionItem
                key="2"
                aria-label="Who built L4T?"
                title={
                  <h1 className="text-2xl font-semibold flex">
                    <h1 className="mt-1 mr-3"><PiAddressBookBold /></h1>Who built L4T?
                  </h1>
                }
                className=""
              >
                <h1 className="mb-12 text-xl">L4T was built by Ariena.</h1>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion variant="shadow" className="grid">
              <AccordionItem
                key="3"
                aria-label="When was L4T launched?"
                title={
                  <h1 className="text-2xl font-semibold flex">
                    <h1 className="mt-1 mr-3"><MdDateRange /></h1>When was L4T launched?
                  </h1>
                }
                className=""
              >
                <h1 className="mb-12 text-xl">L4T was launched on 17 August 1945, Bandung, West Java Provinse.</h1>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion variant="shadow" className="grid">
              <AccordionItem
                key="2"
                aria-label="Where is it available?"
                title={
                  <h1 className="text-2xl font-semibold flex">
                    <h1 className="mt-1 mr-3"><MdOutlineWhereToVote /></h1>Where is it availbale?
                  </h1>
                }
                className=""
              >
                <h1 className="mb-12 text-xl">L4T only available in Indonesia.</h1>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
