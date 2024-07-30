import Image from "next/image";
import logo from "@/assets/images/footer/logo.svg";
import pinIcon from "@/assets/images/footer/pinIcon.svg";
import instagramIcon from "@/assets/images/footer/instagramIcon.svg";
import facebookIcon from "@/assets/images/footer/facebookIcon.svg";
import youtubeIcon from "@/assets/images/footer/youtubeIcon.svg";
import phoneIcon from "@/assets/images/footer/phoneIcon.svg";
import mailIcon from "@/assets/images/footer/mailIcon.svg";
import questionIcon from "@/assets/images/footer/questionIcon.svg";
import listIcon from "@/assets/images/footer/listIcon.svg";
import creditCardIcon from "@/assets/images/footer/creditCardIcon.svg";
import messageAlertIcon from "@/assets/images/footer/messageAlertIcon.svg";
import shopIcon from "@/assets/images/footer/shopIcon.svg";
import headsetIcon from "@/assets/images/footer/headsetIcon.svg";
import arrow from "@/assets/images/footer/arrow.svg";
import FooterItem from "./FooterItem";
import Legislation from "@/assets/images/footer/legislation.png";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer")
  return (
    <div id="footer" className="bg-terciarioClaro w-full py-[70px]">
      <div className="container mx-auto flex flex-col lg:flex-row gap-[50px] lg:gap-[100px]">
        <div className="flex items-center flex-col gap-[60px]">
          <Image src={logo} alt="logo" width={150} className="object-contain" />
          <div className="w-[90%] md:w-full">
            <ul>
              <li>
                <FooterItem icon={pinIcon} label="31 BVD DE COURSELLES - 75008 - PARIS" />
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
                {t("contacto")}
              </p>
              <Image src={arrow} alt="arrow" className="hidden lg:flex" />
            </div>

            <ul className="w-[90%] md:w-full mx-auto">
              {/* <li>
                <FooterItem icon={phoneIcon} label="+54 9 2645 13-9725" />
              </li> */}
              <li>
                <FooterItem icon={phoneIcon} label="+33 07 44 78 73 54" />
              </li>
              <li>
                <FooterItem icon={mailIcon} label="contact@lacasadelosfranceses.com" />
              </li>
            </ul>
          </div>

          <div className="col-span-2 flex flex-col gap-[25px]">
            <p className="text-primarioMuyClaro font-bricolage font-semibold text-[28px]/[34px] text-center md:text-start">
              {t("varios")}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <ul className="w-[90%] md:w-full mx-auto">
                <li>
                  <FooterItem
                    icon={questionIcon}
                    label={t("preguntasFrecuentes")}
                  />
                </li>
                <li>
                  <FooterItem icon={listIcon} label={t("bases")} />
                </li>
                <li>
                  <FooterItem icon={creditCardIcon} label={t("membresia")} />
                </li>
                <li>
                  <FooterItem
                    icon={messageAlertIcon}
                    label={t("arrepentimiento")}
                  />
                </li>
              </ul>

              <ul className="w-[90%] md:w-full mx-auto">
                <li>
                  <FooterItem
                    icon={shopIcon}
                    label={t("horariosTienda")}
                  />
                </li>
                <li>
                  <FooterItem
                    icon={headsetIcon}
                    label={t("atencion")}
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
