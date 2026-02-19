import axios from 'axios'

export type LoginPayload = {
  username: string
  password: string
}

export const loginRequest = async (payload: LoginPayload) => {
  try {
    const { data } = await axios.post(
      'https://dummyjson.com/auth/login',
      payload
    )

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverMessage = error.response?.data?.message

      throw new Error(serverMessage || 'Login failed')
    }

    throw new Error('Unexpected error')
  }
}
