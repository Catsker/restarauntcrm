import React from "react"
import { logout } from '@/shared/lib/useAuth'
import { useNavigate } from '@tanstack/react-router'
import { ASIDE_ICONS } from '@/consts'

const LogOutButton: React.FC = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate({ to: '/login' })
  }

  return (
    <button className="flex text-nowrap items-center gap-2 w-full p-4 max-sm:p-2 rounded-xl bg-[#393939] text-white" onClick={handleLogout}>
      <div className="h-6 w-6 flex items-center justify-center max-sm:hidden">
        <img src={ASIDE_ICONS.LOGOUT} alt="Log Out" />
      </div>
      <p className="">Log Out</p>
    </button>
  )
}

export default LogOutButton
