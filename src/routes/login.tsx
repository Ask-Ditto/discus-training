import { Hono } from 'hono'
import { setCookie } from 'hono/cookie'

const login = new Hono()

login.get('/', (c) => {
  const error = c.req.query('error')

  return c.html(
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login - 6 Seeds Academy</title>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #161626 0%, #2c3e50 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
          }

          .login-container {
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            width: 100%;
            max-width: 400px;
            padding: 3rem 2rem;
          }

          .logo {
            text-align: center;
            margin-bottom: 2rem;
          }

          .logo img {
            height: 60px;
            width: auto;
          }

          h1 {
            font-family: 'Roboto', sans-serif;
            font-size: 1.75rem;
            color: #161626;
            text-align: center;
            margin-bottom: 0.5rem;
          }

          .subtitle {
            font-family: 'Roboto', sans-serif;
            text-align: center;
            color: #6b7280;
            margin-bottom: 2rem;
            font-size: 0.875rem;
          }

          .error-message {
            font-family: 'Roboto', sans-serif;
            background: #fee2e2;
            border: 1px solid #ef4444;
            color: #991b1b;
            padding: 0.75rem;
            border-radius: 0.375rem;
            margin-bottom: 1.5rem;
            font-size: 0.875rem;
          }

          .form-group {
            margin-bottom: 1.5rem;
          }

          label {
            font-family: 'Roboto', sans-serif;
            display: block;
            color: #374151;
            font-weight: 500;
            margin-bottom: 0.5rem;
            font-size: 0.875rem;
          }

          input {
            font-family: 'Roboto', sans-serif;
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            font-size: 1rem;
            transition: border-color 0.2s;
          }

          input:focus {
            outline: none;
            border-color: #f3ab40;
            box-shadow: 0 0 0 3px rgba(243, 171, 64, 0.1);
          }

          button {
            font-family: 'Roboto', sans-serif;
            width: 100%;
            background: #f3ab40;
            color: white;
            border: none;
            padding: 0.875rem;
            border-radius: 0.375rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
          }

          button:hover {
            background: #e09a2f;
          }

          button:active {
            transform: translateY(1px);
          }
        `}</style>
      </head>
      <body>
        <div class="login-container">
          <div class="logo">
            <img src="/static/6seeds-logo.webp" alt="6 Seeds" />
          </div>
          <h1>Welcome</h1>
          <p class="subtitle">Sign in to access the training portal</p>

          {error && (
            <div class="error-message">
              Invalid username or password. Please try again.
            </div>
          )}

          <form method="POST" action="/login">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                autofocus
                autocomplete="username"
              />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                autocomplete="current-password"
              />
            </div>

            <button type="submit">Sign In</button>
          </form>
        </div>
      </body>
    </html>
  )
})

login.post('/', async (c) => {
  const body = await c.req.parseBody()
  const username = body.username as string
  const password = body.password as string

  // Check credentials
  if (username === 'DISCUS' && password === 'allaccess') {
    // Set session cookie
    setCookie(c, 'auth_session', 'authenticated', {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return c.redirect('/')
  }

  // Invalid credentials
  return c.redirect('/login?error=1')
})

export default login
