import React from 'react'
import {tablesRoute} from '@/app/router.tsx'
import { useNavigate } from '@tanstack/react-router'
import type {TableType, statisticsType, TableStatus} from "@/types";
import Aside from "@/components/Aside";
import Table from "@/components/Table";
import TablesStatistics from "@/components/TablesStatistics";

const tables: TableType[] = [
  { tableNumber: 1, status: "Free" },
  { tableNumber: 2, status: "Occ" },
  { tableNumber: 3, status: "Res" },
  { tableNumber: 4, status: "Res" },
  { tableNumber: 5, status: "Free" },
  { tableNumber: 6, status: "Occ" },
  { tableNumber: 7, status: "Free" },
  { tableNumber: 8, status: "Res" },
  { tableNumber: 9, status: "Occ" },
  { tableNumber: 10, status: "Free" },
  { tableNumber: 11, status: "Res" },
  { tableNumber: 12, status: "Occ" },
  { tableNumber: 13, status: "Free" },
  { tableNumber: 14, status: "Res" },
  { tableNumber: 15, status: "Occ" },
  { tableNumber: 16, status: "Free" },
  { tableNumber: 17, status: "Res" },
  { tableNumber: 18, status: "Occ" },
  { tableNumber: 19, status: "Free" },
  { tableNumber: 20, status: "Res" },
]

const TablesPage: React.FC = () => {
  const navigate = useNavigate();
  const {filterStatus} = tablesRoute.useSearch();

  const updateFilter = (newFilter: TableStatus | null) => {
    navigate({
      to: '/tables',
      search: newFilter !== filterStatus
        ? { filterStatus: newFilter }  // если есть значение - добавляем
        : {}
    });
  };

  const statistics: statisticsType[] = [
    {
      type: 'Free',
      count: tables.reduce((acc, cur) => cur.status === "Free" ? acc + 1 : acc, 0)
    },
    {
      type: 'Occ',
      count: tables.reduce((acc, cur) => cur.status === "Occ" ? acc + 1 : acc, 0)
    },
    {
      type: 'Res',
      count: tables.reduce((acc, cur) => cur.status === "Res" ? acc + 1 : acc, 0)
    }
  ]


  return (
    <div className="flex">
      <Aside/>
      <div className="flex flex-col gap-3 p-6 w-full max-w-[1800px]">
        <h3 className="text-2xl font-bold">Tables</h3>
        <ul className="flex gap-3 w-full">
          {statistics.map((status: statisticsType) => (
            <li key={status.type} className="bg-[#F9F9F9] flex-grow rounded-xl">
              <TablesStatistics
                status={status}
                onClick={updateFilter}
              />
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-6 gap-[75px] bg-[#F9F9F9] p-[24px] py-[48px] rounded-xl">
          {tables.map((table: TableType) => {

            return (
              <li
                key={table.tableNumber}
                className={filterStatus && filterStatus !== table.status ? "opacity-0 pointer-events-none" : ""}
              >
                <Table
                  table={table}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TablesPage
