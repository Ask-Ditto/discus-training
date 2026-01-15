import { Hono } from 'hono'
import { Layout } from '../components/Layout'

const home = new Hono()

home.get('/', (c) => {
  return c.html(
    <Layout
      currentPage="home"
      title="Home"
      description="Welcome to 6 Seeds Academy - Master synthetic research"
    >
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Welcome to Your Synthetic Research Training Portal</h1>
          <p class="hero-subtitle">
            Master the art of synthetic research with our comprehensive training materials
          </p>
        </div>
      </section>

      <div class="container">
        <main>
          <section class="content-section">
            <div class="highlight-box">
              <h2>This Tool Excels at Qualitative Research</h2>
              <p>
                6 Seeds Synthetic Research is built for qualitative insights. Our platform recruits
                synthetic focus groups that mirror real consumer segments, uncovering the motivations,
                emotions, and reasoning behind consumer behavior.
              </p>
            </div>
          </section>

          <section class="content-section">
            <h2>Understanding Research Types</h2>
            <p>
              Before diving into the platform, it's important to understand the difference between
              qualitative and quantitative research, and why this tool is optimized for the former.
            </p>

            <div class="audio-player-container">
              <div class="audio-player-header">
                <span class="audio-icon">🎧</span>
                <span class="audio-label">Listen: Quantitative vs. Qualitative Research</span>
              </div>
              <audio controls class="audio-player">
                <source src="/static/audio/quant-vs-qual.m4a" type="audio/mp4" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div class="comparison-table">
              <div class="comparison-column">
                <div class="comparison-header quantitative-secondary">
                  <h3>Quantitative Research</h3>
                  <span class="badge secondary">Not the Focus Here</span>
                </div>
                <div class="comparison-content">
                  <p class="comparison-description">
                    Answers "how many" and "how much" questions with numerical data that can be
                    measured, compared, and analyzed statistically.
                  </p>
                  <h4>Example Questions</h4>
                  <ul>
                    <li>What percentage of consumers prefer Product A over Product B?</li>
                    <li>How likely are people to purchase at this price point?</li>
                    <li>Which packaging design scores highest for shelf appeal?</li>
                    <li>What is the optimal price range for this demographic?</li>
                    <li>How does brand awareness compare across age groups?</li>
                  </ul>
                  <h4>Outputs</h4>
                  <ul>
                    <li>Percentages and rankings</li>
                    <li>Statistical comparisons</li>
                    <li>Purchase likelihood scores</li>
                    <li>Preference distributions</li>
                    <li>Segment-by-segment breakdowns</li>
                  </ul>
                </div>
              </div>

              <div class="comparison-column">
                <div class="comparison-header qualitative-primary">
                  <h3>Qualitative Research</h3>
                  <span class="badge">What This Tool Does</span>
                </div>
                <div class="comparison-content">
                  <p class="comparison-description">
                    Explores "why" and "how" questions through open-ended exploration of feelings,
                    motivations, and underlying reasoning.
                  </p>
                  <h4>Example Questions</h4>
                  <ul>
                    <li>Why do consumers feel this way about the brand?</li>
                    <li>What emotions does this packaging evoke?</li>
                    <li>How do people describe their ideal shopping experience?</li>
                    <li>What stories do consumers tell about using this product?</li>
                    <li>What unmet needs exist in this category?</li>
                  </ul>
                  <h4>Outputs</h4>
                  <ul>
                    <li>Themes and narratives</li>
                    <li>Emotional insights</li>
                    <li>Consumer language and vocabulary</li>
                    <li>Journey maps and experiences</li>
                    <li>Conceptual frameworks</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="research-comparison-image">
              <img
                src="/static/research-comparison.webp"
                alt="Comparison of Quantitative and Qualitative Research - Quantitative (The What) shows data, analytics, and surveys; Qualitative (The Why) shows in-depth interviews and focus groups"
                style="width: 100%; max-width: 1200px; height: auto; margin: 2rem auto; display: block;"
              />
            </div>
          </section>

          <section class="content-section">
            <h2>Why Qualitative Focus?</h2>
            <p>
              The 6 Seeds platform recruits synthetic focus groups that represent specific consumer
              segments. These groups are designed to provide rich, exploratory responses to
              open-ended questions, making them ideal for:
            </p>
            <ul>
              <li>Understanding consumer motivations and barriers</li>
              <li>Exploring emotional responses to brands and products</li>
              <li>Uncovering unmet needs and pain points</li>
              <li>Generating ideas for new product development</li>
              <li>Testing messaging and positioning concepts</li>
            </ul>
            <p>
              Use the navigation on the left to continue through the training materials and learn
              how to get the most from your qualitative research questions.
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
