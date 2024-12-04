import Image from "next/image";
import logo from "@/assets/images/footer/logo.svg";
import pinIcon from "@/assets/images/footer/pinIcon.svg";
import instagramIcon from "@/assets/images/footer/instagramIcon.svg";
import facebookIcon from "@/assets/images/footer/facebookIcon.svg";
import tiktokIcon from "@/assets/images/footer/tiktokIcon.svg";
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
  const t = useTranslations("Footer");
  return (
    <footer id="footer" className="bg-terciarioClaro w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="h-[70px] flex items-center justify-center mb-8">
              <Image
                src={logo}
                alt="logo"
                width={150}
                className="object-contain"
              />
            </div>
            <ul className="space-y-4 pt-2 inline-block text-left">
              <li className="break-all">
                <FooterItem
                  icon={pinIcon}
                  label="31 BVD DE COURSELLES -  75008 - PARIS"
                  link="https://www.google.com/maps/place/La+Casa+de+Los+Franceses/@48.8807734,2.3107157,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66f5d3f4bea6b:0x664222acf3052e02!8m2!3d48.8807699!4d2.3132906!16s%2Fg%2F11w9ky03nk?entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoASAFQAw%3D%3D"
                />
              </li>
              <li>
                <FooterItem
                  icon={instagramIcon}
                  label="@lacasadelosfranceses"
                  link="https://www.instagram.com/lacasadelosfranceses/"
                />
              </li>
              {/* <li>
                <FooterItem icon={facebookIcon} label="Lacasawinestore" />
              </li> */}
              <li>
                <FooterItem
                  icon={tiktokIcon}
                  label="La casa de los franceses"
                  link=" https://www.tiktok.com/@lacasadelosfranceses.fr"
                />
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-[70px] flex items-center justify-center mb-8 w-full">
              <p className="text-primarioMuyClaro font-bricolage font-semibold text-[28px]/[34px]">
                {t("contacto")}
              </p>
              <Image src={arrow} alt="arrow" className="hidden lg:block ml-2" />
            </div>
            <ul className="space-y-4 pt-2 inline-block text-left">
              {/* <li>
                <FooterItem icon={phoneIcon} label="+54 9 2645 13-9725" />
              </li> */}
              <li>
                <FooterItem icon={phoneIcon} label="+33 07 44 78 73 54" />
              </li>
              <li className="break-all">
                <FooterItem
                  icon={mailIcon}
                  label="contact@lacasadelosfranceses.com"
                />
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-[70px] flex items-center justify-center mb-8 w-full">
              <p className="text-primarioMuyClaro font-bricolage font-semibold text-[28px]/[34px]">
                {t("varios")}
              </p>
              <Image src={arrow} alt="arrow" className="hidden lg:block ml-2" />
            </div>
            <div className="space-y-4 pt-2">
              <ul className="space-y-4 inline-block text-left">
                <li>
                  <FooterItem icon={shopIcon} label={t("horariosTienda")} />
                </li>
                <li>
                  <FooterItem
                    icon={questionIcon}
                    label={t("preguntasFrecuentes")}
                  />
                </li>
                {/* <li>
                  <FooterItem icon={listIcon} label={t("bases")} />
                </li> */}
                <li>
                  <FooterItem
                    icon={creditCardIcon}
                    label={t("membresia")}
                    link="membresia"
                  />
                </li>
                {/* <li>
                  <FooterItem
                    icon={messageAlertIcon}
                    label={t("arrepentimiento")}
                  />
                </li> */}
              </ul>
              <ul className="space-y-4 inline-block text-left">
                {/* <li>
                  <FooterItem icon={headsetIcon} label={t("atencion")} />
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto mt-12 px-4 lg:px-12">
          <Image src={Legislation} alt="legislation" />
        </div>
      </div>
    </footer>
  );
}
