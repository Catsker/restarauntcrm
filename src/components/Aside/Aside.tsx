import React from "react"
import AsideLink from "@/components/AsideLink";
import type {AsideLinkType} from "@/types";
import { ASIDE_ICONS } from '@/consts'

const AsideTopLinks: AsideLinkType[] = [
  {
    icon: ASIDE_ICONS.BRANCHES,
    text: 'Branches',
    href: ''
  },
  {
    icon: ASIDE_ICONS.EMPLOYESS,
    text: 'Employess',
    href: ''
  },
  {
    icon: ASIDE_ICONS.TABLES,
    text: 'Tables',
    href: ''
  },
]

const Aside: React.FC = () => {
  return (
    <aside className="sticky top-0 h-screen bg-[#222222] p-6">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-center pb-6 p-1 border-b border-[#909090]">
            <img
              className="block h-full h-[14px] w-auto object-contain"
              src={ASIDE_ICONS.MAIN_LOGO}
              alt="Log Out Icon"
            />
          </div>
          <div className="pt-6">
            <ul className="flex flex-col gap-2">
              {AsideTopLinks.map((link) => (
                <li>
                  <AsideLink link={link}/>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <AsideLink link={{
          icon: ASIDE_ICONS.LOGOUT,
          text: 'Log Out',
          href: ''
        }}/>
      </div>
    </aside>
  )
}

export default Aside
