import { Hono } from 'hono'
import { Layout } from '../components/Layout'

const howItWorks = new Hono()

howItWorks.get('/', (c) => {
  return c.html(
    <Layout
      currentPage="how-it-works"
      title="How It Works"
      description="Understanding synthetic personas and the research framework"
    >
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">How 6 Seeds Synthetic Research Works</h1>
          <p class="hero-subtitle">
            Synthetic personas, research framework, and custom capabilities
          </p>
        </div>
      </section>

      <div class="container">
        <main>
          <section class="content-section">
            <h2>1. Synthetic Personas</h2>
            <p>
              6 Seeds Synthetic Research uses AI-powered synthetic personas that represent real consumer segments.
              These digital twins are not generic chatbots - they are sophisticated simulations calibrated to match
              real consumer behavior patterns.
            </p>

            <h3>What Makes Them Effective</h3>
            <div class="best-practices-grid">
              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">👥</span>
                  <h3>Demographically Calibrated</h3>
                </div>
                <p>
                  Age, gender, location, income, education, and household composition are
                  precisely defined for each persona.
                </p>
              </div>

              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">💭</span>
                  <h3>Psychographically Rich</h3>
                </div>
                <p>
                  Values, attitudes, behaviors, preferences, and lifestyle factors create
                  nuanced, realistic consumer profiles.
                </p>
              </div>
            </div>

            <div class="best-practices-grid">
              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">🎯</span>
                  <h3>Context-Aware</h3>
                </div>
                <p>
                  Personas understand brand relationships, category dynamics, and competitive
                  landscapes within their market.
                </p>
              </div>

              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">🔄</span>
                  <h3>Behaviorally Consistent</h3>
                </div>
                <p>
                  Responses align with how real consumers in their segment would actually think,
                  feel, and act.
                </p>
              </div>
            </div>
          </section>

          <section class="content-section">
            <h2>2. Standard Research Framework</h2>
            <p>
              Each 6 Seeds Synthetic Research study typically includes <strong>6 synthetic personas</strong>{' '}
              representing US adults aged 25-55, answering <strong>4 standard questions</strong>:
            </p>

            <ol>
              <li>
                <strong>Net Promoter Score (NPS) Proxy:</strong> "How likely are you to
                recommend this brand?"
                <br />
                <em style="color: var(--color-text-light);">
                  Measures brand advocacy and loyalty
                </em>
              </li>
              <li>
                <strong>Trend Analysis:</strong> "Compared to 6 months ago, do you feel more
                positive or negative about this brand?"
                <br />
                <em style="color: var(--color-text-light);">
                  Tracks sentiment trajectory over time
                </em>
              </li>
              <li>
                <strong>Recent Experience:</strong> "When did you last interact with this brand?
                How was that experience?"
                <br />
                <em style="color: var(--color-text-light);">
                  Captures touchpoint quality and recency
                </em>
              </li>
              <li>
                <strong>Future Outlook:</strong> "Do you think this brand will be more or less
                successful in the next year?"
                <br />
                <em style="color: var(--color-text-light);">
                  Reveals market perception and momentum
                </em>
              </li>
            </ol>

            <div class="info-box">
              <div class="info-box-header">
                <span class="info-icon">📊</span>
                <h4>What This Generates</h4>
              </div>
              <p>
                <strong>24 consumer responses per brand</strong> (6 personas × 4 questions), providing
                rich qualitative and quantitative insights in a single study.
              </p>
            </div>
          </section>

          <section class="content-section">
            <h2>3. Your Custom Research</h2>
            <p>
              While 6 Seeds Synthetic Research includes standard questions, the real power comes from{' '}
              <strong>your custom questions</strong>. This is where you can:
            </p>

            <ul>
              <li>
                <strong>Test new product concepts</strong> - Show concepts and gather reactions before
                development
              </li>
              <li>
                <strong>Evaluate messaging</strong> - Test taglines, positioning statements, and campaign
                creative
              </li>
              <li>
                <strong>Explore pain points</strong> - Understand unmet needs and frustrations in your
                category
              </li>
              <li>
                <strong>Compare options</strong> - Test multiple variations of products, packages, or
                messages
              </li>
              <li>
                <strong>Deep-dive category perceptions</strong> - Understand how consumers view your
                category and its players
              </li>
              <li>
                <strong>Validate hypotheses</strong> - Test strategic assumptions before committing
                resources
              </li>
            </ul>

            <div class="warning-box">
              <div class="warning-box-header">
                <span class="warning-icon">⚠️</span>
                <h4>Question Quality is Critical</h4>
              </div>
              <p>
                The quality of your insights depends entirely on the quality of your questions.
                Poorly worded questions lead to unreliable results, even with perfect synthetic personas.
                Visit our <a href="/questions">Question Writing Guide</a> to learn best practices.
              </p>
            </div>
          </section>

          <section class="content-section">
            <h2>Typical Study Flow</h2>
            <p>
              Here's what a typical synthetic research study looks like from start to finish:
            </p>

            <div class="best-practices-grid">
              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">1️⃣</span>
                  <h3>Define Objectives</h3>
                </div>
                <p>
                  What decisions will this research inform? What hypotheses are we testing?
                  Who is our target audience?
                </p>
                <p style="margin-top: var(--space-3); color: var(--color-text-light);">
                  <em>Time: 30-60 minutes</em>
                </p>
              </div>

              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">2️⃣</span>
                  <h3>Craft Questions</h3>
                </div>
                <p>
                  Write clear, unbiased, actionable questions that will generate the insights
                  you need.
                </p>
                <p style="margin-top: var(--space-3); color: var(--color-text-light);">
                  <em>Time: 1-2 hours</em>
                </p>
              </div>
            </div>

            <div class="best-practices-grid">
              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">3️⃣</span>
                  <h3>Launch Study</h3>
                </div>
                <p>
                  Work with your 6 Seeds team to configure personas, questions, and any
                  competitive comparisons.
                </p>
                <p style="margin-top: var(--space-3); color: var(--color-text-light);">
                  <em>Time: Minutes to launch</em>
                </p>
              </div>

              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">4️⃣</span>
                  <h3>Analyze Results</h3>
                </div>
                <p>
                  Review responses, identify patterns, extract themes, and translate insights
                  into action.
                </p>
                <p style="margin-top: var(--space-3); color: var(--color-text-light);">
                  <em>Time: 2-4 hours</em>
                </p>
              </div>
            </div>

            <div class="quote">
              "From research question to actionable insight in less than a day - that's the power
              of synthetic research."
            </div>
          </section>

          <section class="content-section">
            <h2>Next Steps</h2>
            <p>
              Ready to put this knowledge into practice?
            </p>
            <ul>
              <li>
                <a href="/use-cases"><strong>Explore Use Cases</strong></a> - See when synthetic
                research shines (and when to use traditional methods instead)
              </li>
              <li>
                <a href="/questions"><strong>Master Question Writing</strong></a> - Learn to
                craft questions that generate actionable insights
              </li>
              <li>
                <a href="/getting-started"><strong>Get Started</strong></a> - Step-by-step guide
                to launching your first study
              </li>
            </ul>
          </section>
        </main>
      </div>
    </Layout>
  )
})

export default howItWorks
