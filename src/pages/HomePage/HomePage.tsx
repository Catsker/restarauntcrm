import React from 'react'
import RestaurantList from '@/components/RestaurantList'
import Aside from '@/components/Aside'

const HomePage: React.FC = () => {

  return (
    <div className="flex">
      <Aside></Aside>
      <RestaurantList />
    </div>
  )
}

export default HomePage
