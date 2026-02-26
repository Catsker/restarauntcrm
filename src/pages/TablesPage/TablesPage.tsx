import React from 'react'
import {tablesRoute} from '@/app/router.tsx'
import {useNavigate} from '@tanstack/react-router'
import type {TableType, statisticsType, TableStatus} from "@/types";
import {Link} from '@tanstack/react-router'
import Aside from "@/components/Aside";
import Table from "@/components/Table";
import TablesStatistics from "@/components/TablesStatistics";
import {calculateTableStatistics} from '@/utils/tableStatistics';
import {TABLES_LIST} from "@/consts"
import {useTableOrders} from "@/shared/lib/useOrders.ts";

const TablesPage: React.FC = () => {
  const navigate = useNavigate();
  const {filterStatus} = tablesRoute.useSearch();

  const {allTables, isLoading} = useTableOrders()

  const updateFilter = (newFilter: TableStatus | null) => {
    navigate({
      to: '/tables',
      search: newFilter !== filterStatus
        ? {filterStatus: newFilter}
        : {}
    });
  };

  const modifiedTablesList = TABLES_LIST.map((table: TableType) => {
    if (allTables[table.tableNumber]) {
      return {...table, status: 'occupied'}
    }

    return table
  })

  const statistics = calculateTableStatistics(modifiedTablesList);

  return (
    <div className="flex">
      <Aside/>
      <div className="flex flex-col gap-3 p-6 w-full max-w-[1800px]">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col gap-3">
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
              {modifiedTablesList.map((item: TableType) => (
                <li
                  key={item.tableNumber}
                  className={`
                    border border-[#B1B1B1] rounded-2xl overflow-hidden 
                    hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] 
                    hover:-translate-y-1  
                    transition-all  
                    duration-300 
                    ${filterStatus && filterStatus !== item.status ? "opacity-0 pointer-events-none" : undefined}
                  `}
                >
                  <Link to={`/tables/${item.tableNumber}`}>
                    <Table table={item}/>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default TablesPage
