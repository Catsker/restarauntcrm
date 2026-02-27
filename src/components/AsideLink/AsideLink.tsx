import React from "react"
import type {AsideLinkType} from "@/types";
import {Link} from "@tanstack/react-router";

interface Props {
  link: AsideLinkType;
}

const AsideLink: React.FC<Props> = ({link}) => (
  <Link
    to={link.href}
    className="flex items-center gap-2 p-4 max-sm:p-2 rounded-xl bg-[#393939] text-white"
  >
    <div className="h-6 w-6 flex items-center justify-center">
      <img src={link.icon} alt={link.text} />
    </div>
    <p className="w-full max-sm:hidden">{link.text}</p>
  </Link>
)

export default AsideLink
