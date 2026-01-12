import { Hono } from 'hono'
import { Layout } from '../components/Layout'

const quickQuestions = new Hono()

quickQuestions.get('/', (c) => {
  return c.html(
    <Layout
      currentPage="quick-questions"
      title="Quick Questions Guide"
      description="How to use Quick Questions for instant research insights"
    >
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Quick Questions Guide</h1>
          <p class="hero-subtitle">
            Get instant answers from your research group
          </p>
        </div>
      </section>

      <div class="container">
        <main>
          <section class="content-section">
            <p>
              Quick Questions let you get instant feedback from your research group without setting up a full study. Perfect for rapid concept testing and quick validation.
            </p>
          </section>

          <section class="content-section">
            <h3>1. Ask Your Question</h3>
            <img
              src="/static/screenshots/single-question.png"
              alt="Single question interface"
              class="screenshot"
            />
            <p>
              Ask your question here or alternatively upload images to ask the panel questions
              about. You can upload up to eight images at a time.
            </p>
          </section>

          <section class="content-section">
            <h3>2. Review the Answers</h3>
            <img
              src="/static/screenshots/single-answer-review.png"
              alt="Single answer review"
              class="screenshot"
            />
            <p>Review the answers.</p>
          </section>

          <section class="content-section">
            <h3>3. Start Individual Conversations (Optional)</h3>
            <img
              src="/static/screenshots/start-individual-conversation.png"
              alt="Start individual conversation"
              class="screenshot"
            />
            <p>If required you can start individual conversation with each participant.</p>
          </section>

          <section class="content-section">
            <h3>4. View Persona Details</h3>
            <img
              src="/static/screenshots/persona-details.png"
              alt="Persona details"
              class="screenshot"
            />
            <p>For deep information on each persona please click the "i" button.</p>
            <p>You can also start individual conversations with each persona to dive deeper into their motivations by clicking on the "chat" button.</p>
          </section>

          <section class="content-section">
            <h2>Next Steps</h2>
            <p>
              <a href="/getting-started"><strong>Back to Getting Started</strong></a> - Return to the main guide
            </p>
            <p>
              <a href="/full-research-studies"><strong>Full Research Studies</strong></a> - Learn about running comprehensive research studies
            </p>
          </section>
        </main>
      </div>
    </Layout>
  )
})

export default quickQuestions
