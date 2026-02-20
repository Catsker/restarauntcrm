import React from 'react'
import type {TableType, TableStatus} from "@/types"

interface Props {
  table: TableType;
}

const variantClasses: Record<TableStatus, string> = {
  Occ: 'bg-[#FFF9E2] after:content-["Occ"] after:bg-[#FFE68E]',
  Res: 'bg-[#FFE8E8] after:content-["Res"] after:bg-[#FF5858]',
  Free: 'bg-white after:content-["Free"] after:bg-[#D3E79D]',
}

const Table: React.FC<Props> = ({table}) => {
  return (
    <div className={`
        border border-[#B1B1B1] h-[119px] relative p-2 rounded-2xl overflow-hidden after:rounded-bl-xl after:font-bold after:absolute after:top-0 after:right-0 after:p-1
        ${variantClasses[table.status]}
        ${variantClasses[table.status]}
      `}>
      <span className="font-bold">{table.tableNumber}</span>

    </div>
  )
}

export default Table
