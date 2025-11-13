export const authInitialState = {
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('user')!) || '',
  isAuthenticated: !!localStorage.getItem('token'),
}
