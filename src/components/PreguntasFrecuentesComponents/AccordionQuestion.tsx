"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import arrow from "@/assets/images/arrowQuestion.svg";
import Image from "next/image";

type AccordionQuestionProps = {
  question: string;
  answer: string;
};

export default function AccordionQuestion({
  question,
  answer,
}: AccordionQuestionProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Accordion type="multiple">
        <AccordionItem
          value="item-1"
          className="flex flex-col w-[361px] lg:w-[910px]"
        >
          <AccordionTrigger
            className="AccordionTrigger bg-terciarioPrincipal"
            aria-hidden
            hidden={true}
          >
            <p className="lg:w-full flex text-secundarioClaro font-bricolage font-light lg:font-semibold text-[20px]/[25px] lg:text-[28px]/[34px] no-underline pl-9">
              {question}
            </p>
            <Image
              src={arrow}
              alt="arrow"
              className="AccordionChevron lg:ml-0 lg:mr-10 h-[25px] lg:h-[45px]"
              aria-hidden
            />
          </AccordionTrigger>
          <AccordionContent className="mt-4 lg:mt-5 w-[361px] lg:w-full ">
            <p className="font-bricolage font-light text-[20px]/[25px] text-gris2 ">
              {answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
