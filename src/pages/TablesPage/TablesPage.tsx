import React from 'react'
import Aside from "@/components/Aside";
import type {TableType} from "@/types";
import Table from "@/components/Table";

const tables: TableType[] = [
  {
    tableNumber: 1,
    status: "Free"
  },
  {
    tableNumber: 2,
    status: "Occ"
  },
  {
    tableNumber: 3,
    status: "Res"
  },
]

const TablesPage: React.FC = () => {
  return (
    <div className="flex">
      <Aside/>
      <ul className="grid">
        {tables.map((table: TableType) => (
          <li
            key={table.tableNumber}
          >
            <Table
              table={table}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TablesPage
