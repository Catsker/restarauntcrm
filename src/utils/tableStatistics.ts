import type { TableType, statisticsType } from '@/types';

export const calculateTableStatistics = (tables: TableType[]): statisticsType[] => {
  return [
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
  ];
};
