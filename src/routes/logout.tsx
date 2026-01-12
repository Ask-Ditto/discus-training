import { Hono } from 'hono'
import { deleteCookie } from 'hono/cookie'

const logout = new Hono()

logout.get('/', (c) => {
  deleteCookie(c, 'auth_session', { path: '/' })
  return c.redirect('/login')
})

export default logout
