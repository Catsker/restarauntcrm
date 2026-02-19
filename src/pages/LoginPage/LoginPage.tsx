import React, {useState} from "react"
import {useMutation} from '@tanstack/react-query'
import {useNavigate} from '@tanstack/react-router'
import {loginRequest} from '@/shared/api/auth'
import {setStoredUser} from '@/shared/lib/useAuth'
import InputLogin from "@/components/InputLogin";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        <InputLogin
          type="email"
          placeholder="username"
          value={username}
          onInputChange={(value) => setUsername(value)}
        />
        <InputLogin
          type="password"
          placeholder="password"
          value={password}
          onInputChange={(value) => setPassword(value)}
        />
        {mutation.isError && (
          <p className="text-red-600">
            {mutation.error?.message}
          </p>
        )}
        <button
          className="text-white p-2 border-2 enabled:hover:bg-white enabled:hover:text-[#222222] disabled:text-[#7B7B7B] disabled:border-[#7B7B7B]"
          type="submit"
          disabled={password.length < 8 || username === ''}
        >
          Log In
        </button>
      </form>
    </div>
  )
}

export default LoginPage
