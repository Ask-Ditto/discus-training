import { Context, Next } from 'hono'
import { getCookie } from 'hono/cookie'

export const authMiddleware = async (c: Context, next: Next) => {
  const session = getCookie(c, 'auth_session')

  if (!session || session !== 'authenticated') {
    return c.redirect('/login')
  }

  await next()
}
