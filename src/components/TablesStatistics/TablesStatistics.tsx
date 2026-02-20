import React from 'react'
import type {statisticsType, TableStatus} from "@/types";

interface Props {
  status: statisticsType
  onClick: (status: TableStatus) => void
}

const TablesStatistics: React.FC<Props> = ({status, onClick}) => {
  return (
    <div className="flex flex-col gap-4 p-6 ">
      <div className="text-[#A3A3A3] text-[14px]">{status.type}</div>
      <div className="flex items-center gap-4">
        <div className="text-[40px]">{status.count}</div>
        <div className="bg-[#7D7D7D] h-[1px] min-w-2 flex-grow"></div>
        <button
          type="button"
          onClick={() => onClick(status.type)}
        >
          Show
        </button>
      </div>
    </div>
  )
}

export default TablesStatistics
