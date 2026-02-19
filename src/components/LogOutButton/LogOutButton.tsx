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
    <button className="flex items-center gap-2 p-4 rounded-xl w-[200px] bg-[#393939] text-white" onClick={handleLogout}>
      <div className="h-6 w-6 flex items-center justify-center">
        <img src={ASIDE_ICONS.LOGOUT} alt="Log Out" />
      </div>
      <p>Log Out</p>
    </button>
  )
}

export default LogOutButton
