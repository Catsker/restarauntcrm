import type {RecipeType} from "@/types";
import {Link} from "@tanstack/react-router";
import {useClearTable} from "@/shared/lib/useOrders.ts";

interface Props {
  tableNumber: number
  tableData: RecipeType[]
}

const OrderTable = ({tableData, tableNumber}: Props) => {
  const clearTableMutation = useClearTable()

  return (
    <div className="flex flex-col h-full">
      <p className="font-bold mb-4">Table №{tableNumber}</p>
      <ul className="mb-4 flex flex-col gap-4">
        {tableData && tableData.map((item: RecipeType) => (
          <li>
            <div className="flex gap-6">
              <div className="w-[15%]">
                <img src={item.image} className="w-full h-full object-cover" alt=""/>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">{item.name}</p>
                <p className="italic">{item.caloriesPerServing} kcal.</p>
                <p className="italic">Waiting time: {item.cookTimeMinutes + item.prepTimeMinutes} min</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link to={`/tables/${tableNumber}`} className="border bg-blue-300 p-2 w-full mt-auto mb-4 text-center rounded-l-full rounded-r-full">Edit table</Link>
      <button className="border p-2 w-full bg-red-300 rounded-l-full rounded-r-full" onClick={() => clearTableMutation.mutate(tableNumber)}>Cancel reservation</button>
    </div>
  )
}

export default OrderTable
