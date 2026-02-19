import React from 'react'
import type {TableType} from "@/types"

interface Props {
  table: TableType;
}

const Table: React.FC<Props> = ({table}) => {
  return (
    <div>
      {table.tableNumber}
    </div>
  )
}

export default Table
