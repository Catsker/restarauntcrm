import React from "react"
import {useState} from 'react'
import {useMutation} from '@tanstack/react-query'
import {useNavigate} from '@tanstack/react-router'
import {loginRequest} from '@/shared/api/auth'
import {setStoredUser} from '@/shared/lib/useAuth'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const mutation = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      setStoredUser(data)
      navigate({to: '/'})
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate({username, password})
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#222222] p-6">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col gap-4 p-6 bg-[#393939] rounded-2xl w-full max-w-[400px]"
        noValidate
      >
        <p className="text-white font-bold f">PLEASE, LOG IN</p>
        <input
          type="email"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          data-lpignore="true"
          className="p-2 bg-[#7B7B7B] text-white placeholder:text-[#D3D3D3]"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          data-lpignore="true"
          className="p-2 bg-[#7B7B7B] placeholder:text-[#D3D3D3]"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {mutation.isError && (
          <p className="text-red-600">Password or login is wrong. Try Again.</p>
        )}
        <button className="text-white p-2 border-2 hover:bg-white hover:text-[#222222]" type="submit">Log In</button>
      </form>
    </div>
  )
}

export default LoginPage
