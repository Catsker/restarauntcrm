import type {TableType, TableStatusFull} from "@/types"
import {TABLE_STATUS} from "@/types"

interface Props {
  table: TableType;
}

const variantClasses: Record<TableStatusFull, string> = {
  Occupied: 'bg-[#FFF9E2] after:content-["Occ"] after:bg-[#FFE68E]',
  Reserved: 'bg-[#FFE8E8] after:content-["Res"] after:bg-[#FF5858]',
  Free: 'bg-white after:content-["Free"] after:bg-[#D3E79D]',
}

const Table = ({table}: Props) => {
  return (
    <div className={`
        border border-[#B1B1B1] h-[119px] relative p-2 rounded-2xl overflow-hidden after:rounded-bl-xl after:font-bold after:absolute after:top-0 after:right-0 after:p-1
        ${variantClasses[TABLE_STATUS[table.status] as TableStatusFull]}
      `}>
      <span className="font-bold">{table.tableNumber}</span>

    </div>
  )
}

export default Table
