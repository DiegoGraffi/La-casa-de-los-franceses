"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import arrow from "../../../public/images/arrowQuestion.svg";
import Image from "next/image";

type AccordionQuestionProps = {
  question: string;
  answer: string;
};

export default function AccordionQuestion({question, answer}: AccordionQuestionProps) {
  return (
    <div className="w-full pr-[25px] flex flex-col justify-center items-center">
      <Accordion type="multiple">
        <AccordionItem value="item-1" className="flex flex-col w-[910px]">
          <AccordionTrigger
            className="AccordionTrigger bg-terciarioPrincipal"
            aria-hidden
            hidden={true}
          >
            <p className="text-secundarioClaro font-bricolage font-semibold text-[28px]/[34px] no-underline pl-9">
              {question}
            </p>
            <Image
              src={arrow}
              alt="arrow"
              height={45}
              className="AccordionChevron mr-10"
              aria-hidden
            />
          </AccordionTrigger>
          <AccordionContent className="mt-5">
           <p className="font-bricolage font-light text-[20px]/[25px] text-gris2 ">
            {answer}
           </p>
          </AccordionContent>
         
        </AccordionItem>

      </Accordion>
    </div>
  );
}
