import React from 'react'
import {tablesRoute} from '@/app/router.tsx'
import {useNavigate} from '@tanstack/react-router'
import type {TableType, statisticsType, TableStatus} from "@/types";
import Aside from "@/components/Aside";
import Table from "@/components/Table";
import TablesStatistics from "@/components/TablesStatistics";
import {calculateTableStatistics} from '@/utils/tableStatistics';
import {TABLES_LIST} from "@/consts"

const TablesPage: React.FC = () => {
  const navigate = useNavigate();
  const {filterStatus} = tablesRoute.useSearch();

  const updateFilter = (newFilter: TableStatus | null) => {
    navigate({
      to: '/tables',
      search: newFilter !== filterStatus
        ? {filterStatus: newFilter}
        : {}
    });
  };

  const statistics = calculateTableStatistics(TABLES_LIST);

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
          {TABLES_LIST.map((item: TableType) => (
            <li
              key={item.tableNumber}
              className={filterStatus && filterStatus !== item.status ? "opacity-0 pointer-events-none" : undefined}
            >
              <Table table={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TablesPage
