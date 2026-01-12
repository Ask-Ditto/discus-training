import { Hono } from 'hono'
import { Layout } from '../components/Layout'

const home = new Hono()

home.get('/', (c) => {
  return c.html(
    <Layout
      currentPage="home"
      title="Home"
      description="Welcome to Six Seeds Academy - Master synthetic research"
    >
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Welcome to Six Seeds Academy</h1>
          <p class="hero-subtitle">
            Master the art of synthetic research with our comprehensive training materials
          </p>
        </div>
      </section>

      <div class="container">
        <main>
          <section class="content-section">
            <h2>Welcome to Your Synthetic Research Training Portal</h2>
            <p>
              This portal contains everything you need to master Six Seeds Synthetic Research -
              a revolutionary consumer research platform that delivers insights in hours instead of weeks.
            </p>
            <p>
              Use the navigation on the left to explore the training materials and learn about
              synthetic research methodology, best practices, and industry applications.
            </p>
            <p>
              For any questions or support, please contact us at{' '}
              <a href="mailto:andreas@6seedsconsulting.com">andreas@6seedsconsulting.com</a>
            </p>
          </section>
        </main>
      </div>
    </Layout>
  )
})

export default home
