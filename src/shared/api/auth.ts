import axios from 'axios'

export type LoginPayload = {
  username: string
  password: string
}

export const loginRequest = async (payload: LoginPayload) => {
  const { data } = await axios.post(
    'https://dummyjson.com/auth/login',
    payload
  )

  return data
}
