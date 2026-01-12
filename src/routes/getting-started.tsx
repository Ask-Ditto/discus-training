import { Hono } from 'hono'
import { Layout } from '../components/Layout'

const gettingStarted = new Hono()

gettingStarted.get('/', (c) => {
  return c.html(
    <Layout
      currentPage="getting-started"
      title="Getting Started"
      description="Step-by-step guide to using 6 Seeds Synthetic Research"
    >
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Getting Started</h1>
          <p class="hero-subtitle">
            A step-by-step guide to running your first synthetic research study
          </p>
        </div>
      </section>

      <div class="container">
        <main>
          <section class="content-section">
            <h2>Getting Started with Synthetic Research</h2>
            <p>
              Follow these two simple steps to begin using the 6 Seeds Synthetic Research platform.
            </p>
          </section>

          <section class="content-section">
            <h3>1. Log In and Navigate to Research Groups</h3>
            <p>
              After logging in, you'll see your available research groups. These represent
              different target audiences you can research - for example, beer drinkers, wine
              enthusiasts, or spirits consumers.
            </p>
            <p>
              Select the research group that matches your target audience for this study.
            </p>
            <img
              src="/static/screenshots/Log-In-and-Navigate-to-Research-Groups.png"
              alt="Dashboard showing research groups"
              class="screenshot"
            />
          </section>

          <section class="content-section">
            <h3>2. Choose between quick questions and full research studies</h3>
            <p>
              To get a quick answer to a question from a group, click Quick Questions. To start a
              full research study, click Start Research.
            </p>
            <p>
              Quick questions get instant answers. Full research studies take between 30-60 minutes
              on average.
            </p>
            <img
              src="/static/screenshots/choose-path.png"
              alt="Choose between Quick Questions and Start Research"
              class="screenshot"
            />
          </section>

          <section class="content-section">
            <h2>Choose Your Path</h2>
            <p>
              Depending on your research needs, follow one of these detailed guides:
            </p>

            <div class="best-practices-grid">
              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">⚡</span>
                  <h3>Quick Questions</h3>
                </div>
                <p>
                  Get instant answers from your research group. Perfect for rapid concept testing
                  and quick validation.
                </p>
                <p>
                  <a href="/quick-questions"><strong>View Quick Questions Guide →</strong></a>
                </p>
              </div>

              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">📊</span>
                  <h3>Full Research Studies</h3>
                </div>
                <p>
                  Run comprehensive research with multiple questions, filtering, and detailed
                  reporting. Takes 30-60 minutes.
                </p>
                <p>
                  <a href="/full-research-studies"><strong>View Full Research Guide →</strong></a>
                </p>
              </div>
            </div>
          </section>

          <section class="content-section">
            <div class="info-box">
              <div class="info-box-header">
                <span class="info-icon">💡</span>
                <h4>Need Help?</h4>
              </div>
              <p>
                If you have questions or need support while running your study, contact us at{' '}
                <a href="mailto:andreas@6seedsconsulting.com">andreas@6seedsconsulting.com</a>
              </p>
            </div>
          </section>

          <section class="content-section">
            <h2>Next Steps</h2>
            <p>Now that you know how to use the platform, explore these resources:</p>
            <ul>
              <li>
                <a href="/questions">
                  <strong>Question Writing Guide</strong>
                </a>{' '}
                - Learn how to write effective research questions
              </li>
              <li>
                <a href="/use-cases">
                  <strong>Use Cases</strong>
                </a>{' '}
                - Discover when to use synthetic research (and when not to)
              </li>
              <li>
                <a href="/what-is-synthetic-research">
                  <strong>What is Synthetic Research</strong>
                </a>{' '}
                - Understand the methodology and validation
              </li>
            </ul>
          </section>
        </main>
      </div>
    </Layout>
  )
})

export default gettingStarted
