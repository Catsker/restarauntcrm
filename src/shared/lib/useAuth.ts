export const getStoredUser = () => {
  const data = localStorage.getItem('user')
  return data ? JSON.parse(data) : null
}

export const setStoredUser = (user: unknown) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const logout = () => {
  localStorage.removeItem('user')
}
