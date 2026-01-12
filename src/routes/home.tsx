import { Hono } from 'hono'
import { Navigation } from '../components/Navigation'
import CSS from '../../public/static/style.css?raw'

const home = new Hono()

const Layout = (props: { children: any }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Six Seeds Academy - Ditto Training</title>
        <meta name="description" content="Training portal for Ditto synthetic research platform" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </head>
      <body>
        <Navigation currentPage="home" />
        {props.children}
        <footer class="footer">
          <div class="footer-content">
            <p><strong>Six Seeds Consulting</strong></p>
            <p>Questions? Contact us at <a href="mailto:hello@sixseedsconsulting.com">hello@sixseedsconsulting.com</a></p>
          </div>
        </footer>
      </body>
    </html>
  )
}

home.get('/', (c) => {
  return c.html(
    <Layout>
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Welcome to Ditto Academy</h1>
          <p class="hero-subtitle">
            Master the art of synthetic research with our comprehensive training materials
          </p>
        </div>
      </section>

      <div class="container">
        <main>
          <section class="content-section">
            <h2>What is Ditto?</h2>
            <p>
              Ditto is a revolutionary consumer research platform that uses{' '}
              <strong>synthetic research methodology</strong> to deliver insights in hours
              instead of weeks. By leveraging AI-powered synthetic personas calibrated to match
              real population behavior, Ditto enables rapid, scalable, and cost-effective
              consumer research.
            </p>

            <h3>Why Synthetic Research?</h3>
            <p>
              Traditional consumer research is slow, expensive, and difficult to scale. Ditto's
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
                Ditto's synthetic personas are calibrated to achieve 95%+ correlation with
                traditional research methods. Our approach has been validated across hundreds
                of studies spanning multiple industries and markets.
              </p>
            </div>
          </section>

          <section class="content-section">
            <h2>How Ditto Works</h2>

            <h3>1. Synthetic Personas</h3>
            <p>
              Ditto uses AI-powered synthetic personas that represent real consumer segments.
              These digital twins are:
            </p>
            <ul>
              <li>
                <strong>Demographically calibrated:</strong> Age, gender, location, income,
                education
              </li>
              <li>
                <strong>Psychographically rich:</strong> Values, attitudes, behaviors, preferences
              </li>
              <li>
                <strong>Context-aware:</strong> Understand brand relationships and category
                dynamics
              </li>
              <li>
                <strong>Behaviorally consistent:</strong> Respond like real consumers would
              </li>
            </ul>

            <h3>2. Standard Research Framework</h3>
            <p>
              Each Ditto study typically includes 6 synthetic personas representing US adults
              aged 25-55, answering 4 standard questions:
            </p>
            <ol>
              <li>
                <strong>Net Promoter Score (NPS) Proxy:</strong> "How likely are you to
                recommend this brand?"
              </li>
              <li>
                <strong>Trend Analysis:</strong> "Compared to 6 months ago, do you feel more
                positive or negative?"
              </li>
              <li>
                <strong>Recent Experience:</strong> "When did you last interact? How was that
                experience?"
              </li>
              <li>
                <strong>Future Outlook:</strong> "Do you think this brand will be more or less
                successful in the next year?"
              </li>
            </ol>

            <p>
              This generates <strong>24 consumer responses per brand</strong> (6 personas × 4
              questions), providing rich qualitative and quantitative insights.
            </p>

            <h3>3. Your Custom Research</h3>
            <p>
              While Ditto includes standard questions, the real power comes from your custom
              questions. You can:
            </p>
            <ul>
              <li>Test new product concepts or messaging</li>
              <li>Explore specific pain points or needs</li>
              <li>Compare multiple options or variations</li>
              <li>Deep-dive into category perceptions</li>
              <li>Validate strategic hypotheses</li>
            </ul>

            <div class="warning-box">
              <div class="warning-box-header">
                <span class="warning-icon">⚠️</span>
                <h4>Question Quality is Critical</h4>
              </div>
              <p>
                The quality of your insights depends entirely on the quality of your questions.
                Poorly worded questions lead to unreliable results. Our{' '}
                <a href="/questions">Question Writing Guide</a> will help you craft effective
                research questions.
              </p>
            </div>
          </section>

          <section class="content-section">
            <h2>Use Cases</h2>
            <p>
              Ditto is ideal for a wide range of research applications:
            </p>

            <h3>Brand Health Tracking</h3>
            <p>
              Monitor consumer sentiment over time. Track NPS, awareness, consideration, and
              preference metrics on a weekly or monthly basis.
            </p>

            <h3>Concept Testing</h3>
            <p>
              Test new product ideas, packaging designs, or messaging before launch. Get rapid
              feedback on multiple variations to identify the strongest concepts.
            </p>

            <h3>Competitive Analysis</h3>
            <p>
              Understand how consumers perceive your brand vs. competitors. Identify your
              strengths, weaknesses, and opportunities for differentiation.
            </p>

            <h3>Market Entry</h3>
            <p>
              Explore new markets or categories quickly. Understand consumer needs, preferences,
              and barriers before investing in full-scale market entry.
            </p>

            <h3>Campaign Evaluation</h3>
            <p>
              Measure the impact of marketing campaigns in real-time. Understand which messages
              resonate and which fall flat.
            </p>

            <div class="quote">
              "Ditto has transformed how we approach consumer research. What used to take weeks
              now takes hours, and we can test 10x more ideas as a result."
            </div>
          </section>

          <section class="content-section">
            <h2>Getting Started</h2>
            <p>
              Ready to start using Ditto? Here's what you need to know:
            </p>
            <ol>
              <li>
                <strong>Read the Question Writing Guide:</strong> Learn how to craft effective
                research questions that generate actionable insights.{' '}
                <a href="/questions">Visit the guide →</a>
              </li>
              <li>
                <strong>Plan Your Study:</strong> Define your research objectives, target
                audience, and key questions.
              </li>
              <li>
                <strong>Launch Your Research:</strong> Work with your Six Seeds team to set up
                and launch your study.
              </li>
              <li>
                <strong>Analyze Results:</strong> Review the insights, identify patterns, and
                make data-driven decisions.
              </li>
            </ol>

            <div class="info-box">
              <div class="info-box-header">
                <span class="info-icon">💡</span>
                <h4>Need Help?</h4>
              </div>
              <p>
                Your Six Seeds team is here to support you throughout your research journey.
                Contact us at{' '}
                <a href="mailto:hello@sixseedsconsulting.com">
                  hello@sixseedsconsulting.com
                </a>{' '}
                with questions or to schedule a consultation.
              </p>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
})

export default home
