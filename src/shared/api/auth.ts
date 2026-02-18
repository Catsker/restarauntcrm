export type LoginPayload = {
  username: string
  password: string
}

export const loginRequest = async (payload: LoginPayload) => {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    throw new Error('Invalid credentials')
  }

  return res.json()
}
