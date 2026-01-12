import { Hono } from 'hono'
import { Navigation } from './components/Navigation'
import CSS from '../public/static/style.css?raw'

// Import authentication middleware
import { authMiddleware } from './middleware/auth'

// Import route handlers
import login from './routes/login'
import logout from './routes/logout'
import home from './routes/home'
import questions from './routes/questions'
import whatIs from './routes/what-is-synthetic-research'
import gettingStarted from './routes/getting-started'
import quickQuestions from './routes/quick-questions'
import fullResearchStudies from './routes/full-research-studies'
import scientificPapers from './routes/scientific-papers'

const app = new Hono()

// Public routes (no authentication required)
app.route('/login', login)

// Protected routes (authentication required)
app.use('*', authMiddleware)
app.route('/logout', logout)
app.route('/', home)
app.route('/what-is-synthetic-research', whatIs)
app.route('/questions', questions)
app.route('/getting-started', gettingStarted)
app.route('/quick-questions', quickQuestions)
app.route('/full-research-studies', fullResearchStudies)
app.route('/scientific-papers', scientificPapers)

export default app
