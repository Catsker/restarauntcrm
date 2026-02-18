import React from "react"
import type {AsideLinkType} from "@/types";

interface Props {
  link: AsideLinkType;
}

const AsideLink: React.FC<Props> = ({link}) => (
  <div className="flex items-center gap-2 p-4 rounded-xl w-[200px] bg-[#393939] text-white">
    <div className="h-6 w-6 flex items-center justify-center">
      <img src={link.icon} alt={link.text} />
    </div>
    <p>{link.text}</p>
  </div>
)

export default AsideLink
