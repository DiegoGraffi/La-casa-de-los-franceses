"use client";

import { Accordion } from "rsuite";
import arrow from "../../../public/images/tiendaPage/accordionArrow.svg";
import Image from "next/image";
import { Checkbox, CheckboxGroup } from "rsuite";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex justify-between w-full">
      <p>{title}</p>
      <Image src={arrow} alt="flecha" height={20} />
    </div>
  );
};

export default function AccordionComponent() {
  return (
    <div className="w-full">
      <Accordion bordered>
        <Accordion.Panel header={<Header title="Categoria" />}>
          <ul>
            <li>
              <CheckboxGroup name="checkbox-group">
                <Checkbox value="A">Checkbox A</Checkbox>
                <Checkbox value="B">Checkbox B</Checkbox>
                <Checkbox value="C">Checkbox C</Checkbox>
                <Checkbox value="D">Checkbox D</Checkbox>
              </CheckboxGroup>
            </li>
          </ul>
        </Accordion.Panel>
        <Accordion.Panel header="Accordion Panel 2">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi odio
            a ex dolor cumque quos illo reiciendis voluptas quae. Debitis.
          </p>
        </Accordion.Panel>
        <Accordion.Panel header="Accordion Panel 3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi odio
            a ex dolor cumque quos illo reiciendis voluptas quae. Debitis.
          </p>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
