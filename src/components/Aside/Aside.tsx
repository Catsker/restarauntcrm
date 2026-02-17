import React from "react"
import AsideLink from "@/components/AsideLink";
import {ASIDE_ICONS} from "@/consts";
import type {AsideLinkType} from "@/types";
import MainLogo from "@/assets/icons/mainlogo.svg";

const AsideTopLinks: AsideLinkType[] = [
  {
    icon: ASIDE_ICONS.DASHBOARD,
    text: 'Dashboard',
    to: ''
  },
  {
    icon: ASIDE_ICONS.EMPLOYERS,
    text: 'Employers',
    to: ''
  },
  {
    icon: ASIDE_ICONS.BRANCHES,
    text: 'Branches',
    to: ''
  },
]

const Aside: React.FC = () => {
  return (
    <aside className="h-screen bg-[#222222] p-6">
      <div className="flex justify-center pb-6 p-1 border-b border-[#909090]">
        <img className="block h-full h-[14px] w-auto object-contain" src={MainLogo} alt=""/>
      </div>
      <div className="pt-6">
        <ul className="flex flex-col gap-2">
          {AsideTopLinks.map((link) => (
            <li className="">
              <AsideLink
                link={link}
              />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Aside
