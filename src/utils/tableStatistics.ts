import type { TableType, statisticsType } from '@/types';

export const calculateTableStatistics = (tables: TableType[]): statisticsType[] => {
  return [
    {
      type: 'free',
      count: tables.reduce((acc, cur) => cur.status === "free" ? acc + 1 : acc, 0)
    },
    {
      type: 'occupied',
      count: tables.reduce((acc, cur) => cur.status === "occupied" ? acc + 1 : acc, 0)
    },
    {
      type: 'reserved',
      count: tables.reduce((acc, cur) => cur.status === "reserved" ? acc + 1 : acc, 0)
    }
  ];
};
