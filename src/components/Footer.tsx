import Image from "next/image";
import logo from "../../public/images/footer/logo.svg";
import pinIcon from "../../public/images/footer/pinIcon.svg";
import instagramIcon from "../../public/images/footer/instagramIcon.svg";
import facebookIcon from "../../public/images/footer/facebookIcon.svg";
import youtubeIcon from "../../public/images/footer/youtubeIcon.svg";
import phoneIcon from "../../public/images/footer/phoneIcon.svg";
import mailIcon from "../../public/images/footer/mailIcon.svg";
import questionIcon from "../../public/images/footer/questionIcon.svg";
import listIcon from "../../public/images/footer/listIcon.svg";
import creditCardIcon from "../../public/images/footer/creditCardIcon.svg";
import messageAlertIcon from "../../public/images/footer/messageAlertIcon.svg";
import shopIcon from "../../public/images/footer/shopIcon.svg";
import headsetIcon from "../../public/images/footer/headsetIcon.svg";
import arrow from "../../public/images/footer/arrow.svg";
import FooterItem from "./FooterItem";
import Legislation from "../../public/images/footer/legislation.png";

export default function Footer() {
  return (
    <div id="footer" className="bg-terciarioClaro w-full py-[70px]">
      <div className="container mx-auto flex flex-col lg:flex-row gap-[50px] lg:gap-[100px]">
        <div className="flex items-center flex-col gap-[60px]">
          <Image src={logo} alt="logo" width={150} className="object-contain" />
          <div className="w-[90%] md:w-full">
            <ul>
              <li>
                <FooterItem icon={pinIcon} label="Ubicación" />
              </li>
              <li>
                <FooterItem icon={instagramIcon} label="@lcdfwinestore" />
              </li>
              <li>
                <FooterItem icon={facebookIcon} label="Lacasawinestore" />
              </li>
              <li>
                <FooterItem
                  icon={youtubeIcon}
                  label="La casa de los franceses"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[50px] lg:gap-[100px]">
          <div className="col-span-1 flex flex-col gap-[25px] justify-center lg:justify-start">
            <div className="flex justify-center md:justify-between w-full">
              <p className="text-primarioMuyClaro font-bricolage font-semibold text-[28px]/[34px] text-center md:text-start">
                Contacto
              </p>
              <Image src={arrow} alt="arrow" className="hidden lg:flex" />
            </div>

            <ul className="w-[90%] md:w-full mx-auto">
              <li>
                <FooterItem icon={phoneIcon} label="+54 9 2645 13-9725" />
              </li>
              <li>
                <FooterItem icon={phoneIcon} label="+54 9 2645 13-9725" />
              </li>
              <li>
                <FooterItem icon={mailIcon} label="LCDFstore@gmail.com" />
              </li>
            </ul>
          </div>

          <div className="col-span-2 flex flex-col gap-[25px]">
            <p className="text-primarioMuyClaro font-bricolage font-semibold text-[28px]/[34px] text-center md:text-start">
              Varios
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <ul className="w-[90%] md:w-full mx-auto">
                <li>
                  <FooterItem
                    icon={questionIcon}
                    label="Preguntas Frecuentes"
                  />
                </li>
                <li>
                  <FooterItem icon={listIcon} label="Bases y condiciones" />
                </li>
                <li>
                  <FooterItem icon={creditCardIcon} label="Membresía" />
                </li>
                <li>
                  <FooterItem
                    icon={messageAlertIcon}
                    label="Botón de arrepentimiento"
                  />
                </li>
              </ul>

              <ul className="w-[90%] md:w-full mx-auto">
                <li>
                  <FooterItem
                    icon={shopIcon}
                    label="Tienda física: 10:00 am a 14:00 pm - 20:00 pm a 00:00am"
                  />
                </li>
                <li>
                  <FooterItem
                    icon={headsetIcon}
                    label="Atención online: 10:00 am a 14:00 pm"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto mt-[50px] px-[15px] md:px-[50px]">
        <Image src={Legislation} alt="legislation" />
      </div>
    </div>
  );
}
