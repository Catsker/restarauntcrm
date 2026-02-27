import React from 'react'
import Aside from "@/components/Aside";
import {useTableOrders} from "@/shared/lib/useOrders.ts"
import {Link} from "@tanstack/react-router";
import OrderTable from "@/components/OrderTable";

const OrdersPage: React.FC = () => {
  const {allTables} = useTableOrders()

  return (
    <div className="flex">
      <Aside/>
      <div className="flex flex-col gap-3 p-6 w-full">
        <h3 className="text-2xl font-bold">Orders</h3>
        {Object.keys(allTables).length === 0 ? (
          <div className="bg-[#F9F9F9] p-[24px] flex gap-3 flex-col">
            <p>No orders yet.</p>
            <Link className="text-blue-400" to="/tables">Go to /tables</Link>
          </div>
        ) : (
          <ul className="grid grid-cols-3 gap-6">
            {Object.keys(allTables).map((tableNumber) => (
              <li key={tableNumber} className="bg-[#F9F9F9] p-6">
                <OrderTable
                  tableNumber={tableNumber}
                  tableData={allTables[tableNumber]}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default OrdersPage
