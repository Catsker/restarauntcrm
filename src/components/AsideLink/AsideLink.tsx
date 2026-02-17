import React from "react"
import type {AsideLinkType} from "@/types";

interface Props {
  link: AsideLinkType;
}

const AsideLink: React.FC<Props> = ({link}) => {
  return (
    <div className="p-4 bg-white rounded-xl w-[200px] bg-[#393939] text-white">
      {link.text}
    </div>
  )
}

export default AsideLink
