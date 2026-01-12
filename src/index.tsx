import { Hono } from 'hono'
import home from './routes/home'
import questions from './routes/questions'

const app = new Hono()

// Mount routes
app.route('/', home)
app.route('/questions', questions)

export default app
