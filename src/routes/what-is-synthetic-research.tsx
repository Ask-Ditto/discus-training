import { Hono } from 'hono'
import { Layout } from '../components/Layout'

const whatIs = new Hono()

whatIs.get('/', (c) => {
  return c.html(
    <Layout
      currentPage="what-is-synthetic-research"
      title="What is Synthetic Research"
      description="Learn about 6 Seeds Synthetic Research platform and methodology"
    >
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">What is Synthetic Research?</h1>
          <p class="hero-subtitle">
            Understanding the platform, methodology, and key benefits
          </p>
        </div>
      </section>

      <div class="container">
        <main>
          <section class="content-section">
            <h2>Platform Overview</h2>
            <p>
              6 Seeds Synthetic Research is a revolutionary consumer research platform that uses{' '}
              <strong>synthetic research methodology</strong> to deliver insights in hours
              instead of weeks. By leveraging AI-powered synthetic personas calibrated to match
              real population behavior, 6 Seeds Synthetic Research enables rapid, scalable, and cost-effective
              consumer research.
            </p>

            <h3>Why Synthetic Research?</h3>
            <p>
              Traditional consumer research is slow, expensive, and difficult to scale. 6 Seeds Synthetic Research's
              synthetic approach offers:
            </p>
            <ul>
              <li>
                <strong>Speed:</strong> Get insights in hours, not weeks
              </li>
              <li>
                <strong>Scale:</strong> Test multiple concepts, markets, or audiences simultaneously
              </li>
              <li>
                <strong>Cost:</strong> 10-20x cheaper than traditional research methods
              </li>
              <li>
                <strong>Consistency:</strong> Eliminate interviewer bias and panel fatigue
              </li>
              <li>
                <strong>Flexibility:</strong> Iterate and refine your research in real-time
              </li>
            </ul>

            <div class="info-box">
              <div class="info-box-header">
                <span class="info-icon">ℹ️</span>
                <h4>Validation & Accuracy</h4>
              </div>
              <p>
                6 Seeds Synthetic Research's synthetic personas are calibrated to achieve 95%+ correlation with
                traditional research methods. Our approach has been validated across hundreds
                of studies spanning multiple industries and markets.
              </p>
            </div>
          </section>

          <section class="content-section">
            <h2>The Synthetic Methodology</h2>
            <p>
              Synthetic research uses AI-powered personas that represent real consumer segments.
              Unlike surveys with real respondents, synthetic personas are:
            </p>
            <ul>
              <li>
                <strong>Always available:</strong> No scheduling, recruitment, or waiting periods
              </li>
              <li>
                <strong>Scalable:</strong> Test unlimited variations without increasing costs
              </li>
              <li>
                <strong>Consistent:</strong> No response fatigue or survey abandonment
              </li>
              <li>
                <strong>Validated:</strong> Calibrated to match real consumer behavior patterns
              </li>
            </ul>

            <h3>How Validation Works</h3>
            <p>
              Our synthetic personas undergo rigorous validation testing. We compare their responses
              to traditional research across hundreds of studies, ensuring 95%+ correlation in:
            </p>
            <ul>
              <li>Brand perception and sentiment</li>
              <li>Purchase intent and behavior</li>
              <li>Message resonance and recall</li>
              <li>Competitive positioning</li>
              <li>Product feature preferences</li>
            </ul>

            <div class="quote">
              "Synthetic research doesn't replace traditional methods - it extends them.
              Use it for rapid iteration, concept screening, and hypothesis generation before
              investing in large-scale traditional studies."
            </div>
          </section>

          <section class="content-section">
            <h2>Key Benefits</h2>

            <div class="best-practices-grid">
              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">⚡</span>
                  <h3>Speed & Agility</h3>
                </div>
                <p>
                  Launch studies in minutes and get results in hours. Test multiple concepts
                  or iterations before your competition even fields a survey.
                </p>
              </div>

              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">💰</span>
                  <h3>Cost Efficiency</h3>
                </div>
                <p>
                  10-20x cheaper than traditional research. Test more ideas, more often, without
                  breaking the research budget.
                </p>
              </div>
            </div>

            <div class="best-practices-grid">
              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">📊</span>
                  <h3>Scalability</h3>
                </div>
                <p>
                  Test unlimited variations simultaneously. Compare 20 different concepts or
                  messages at the same cost as testing one.
                </p>
              </div>

              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">🎯</span>
                  <h3>Consistency</h3>
                </div>
                <p>
                  Eliminate interviewer bias, survey fatigue, and panel effects. Get reliable,
                  repeatable results every time.
                </p>
              </div>
            </div>
          </section>

          <section class="content-section">
            <h2>Next Steps</h2>
            <p>
              Now that you understand what synthetic research is, explore these topics:
            </p>
            <ul>
              <li>
                <a href="/questions"><strong>Question Writing Guide</strong></a> - Master the
                art of crafting effective research questions
              </li>
              <li>
                <a href="/scientific-papers"><strong>Scientific Papers</strong></a> - Read the
                research behind synthetic research methodology
              </li>
            </ul>
          </section>
        </main>
      </div>
    </Layout>
  )
})

export default whatIs
