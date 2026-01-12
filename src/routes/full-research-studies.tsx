import { Hono } from 'hono'
import { Layout } from '../components/Layout'

const fullResearchStudies = new Hono()

fullResearchStudies.get('/', (c) => {
  return c.html(
    <Layout
      currentPage="full-research-studies"
      title="Full Research Studies Guide"
      description="How to run comprehensive research studies with 6 Seeds"
    >
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Full Research Studies Guide</h1>
          <p class="hero-subtitle">
            Run comprehensive research studies that take 30-60 minutes
          </p>
        </div>
      </section>

      <div class="container">
        <main>
          <section class="content-section">
            <p>
              Full research studies allow you to conduct in-depth research with multiple questions, participant filtering, and comprehensive reporting. Studies typically take 30-60 minutes to complete.
            </p>
          </section>

          <section class="content-section">
            <h3>1. Name Your Study</h3>
            <p>Give your study a name.</p>
            <p>Quick descriptor by which you'll recognize it later on.</p>
            <img
              src="/static/screenshots/Name-your-study.png"
              alt="Name your study"
              class="screenshot"
            />
          </section>

          <section class="content-section">
            <h3>2. Choose your participants</h3>
            <p>Add and remove participants.</p>
            <img
              src="/static/screenshots/add-and-remove-participants.png"
              alt="Add and remove participants"
              class="screenshot"
            />
            <p>
              You can select from all groups to power your study. Ideally you will cap the research
              at 60 personas as larger numbers will slow the system down and create unreliable
              results.
            </p>
            <img
              src="/static/screenshots/filter-participants.png"
              alt="Filter participants"
              class="screenshot"
            />
            <p>
              You can filter your study participants by a wide range of elements. Tighter filters
              create smaller groups.
            </p>
            <img
              src="/static/screenshots/Review-individuals.png"
              alt="Review individuals"
              class="screenshot"
            />
            <p>
              You can review each individual participant by clicking the "i" icon. You can also
              remove individuals from the group. Please note that these cannot be added back on
              later.
            </p>
            <img
              src="/static/screenshots/participant-overview.png"
              alt="Participant overview"
              class="screenshot"
            />
            <p>
              To go to the next step, please click the button called "Participant Overview."
            </p>
          </section>

          <section class="content-section">
            <h3>3. Review Participant Overview</h3>
            <p>
              Before asking questions, review the participant overview. You'll see a geographic
              distribution map and demographic breakdowns of your research group.
            </p>
            <p>
              This helps you understand who you're researching and ensures the group matches your
              target audience.
            </p>
            <img
              src="/static/screenshots/Demographics.png"
              alt="Demographics overview"
              class="screenshot"
            />
          </section>

          <section class="content-section">
            <h3>4. Compose Questions</h3>
            <p>
              Now you're ready to ask your research questions. Write your questions in natural
              language - the same way you'd ask a real person in an interview or focus group.
            </p>
            <img
              src="/static/screenshots/compose-full-questions.png"
              alt="Compose full questions"
              class="screenshot"
            />
            <p>
              The system will then optimize your questions. You can also upload up to eight images for review.
            </p>
          </section>

          <section class="content-section">
            <h3>5. Use the Question Optimizer</h3>
            <p>
              The question optimizer helps you get better responses by suggesting improvements to
              your questions. You can also choose response length:
            </p>
            <ul>
              <li>
                <strong>Quick:</strong> Brief, concise answers
              </li>
              <li>
                <strong>1-2 sentences:</strong> Short explanations
              </li>
              <li>
                <strong>Detailed:</strong> In-depth responses with reasoning
              </li>
            </ul>
            <p>Choose the response length based on what you need to learn.</p>
            <img
              src="/static/screenshots/optimized-questions.png"
              alt="Optimized questions"
              class="screenshot"
            />
          </section>

          <section class="content-section">
            <h3>6. Review Responses</h3>
            <p>
              Once the study runs, you'll see responses from all synthetic personas in your research
              group. Each persona provides their answer based on their unique characteristics,
              preferences, and behaviors.
            </p>
            <p>
              Scroll through to see the range of perspectives across your target audience.
            </p>
            <img
              src="/static/screenshots/review-responses.png"
              alt="Review responses"
              class="screenshot"
            />
          </section>

          <section class="content-section">
            <h3>7. View Persona Details</h3>
            <p>
              Click the "i" icon next to any response to see that persona's full profile. You'll
              see their demographics, preferences, behaviors, and background - everything that
              influences their responses.
            </p>
            <p>
              This helps you understand <em>why</em> someone answered the way they did.
            </p>
            <img
              src="/static/screenshots/full-persona-view.png"
              alt="Full persona view"
              class="screenshot"
            />
          </section>

          <section class="content-section">
            <h3>8. Ask Follow-up Questions</h3>
            <p>
              Just like in a real interview, you can ask follow-up questions. You can either:
            </p>
            <ul>
              <li>Ask a follow-up to the entire research group</li>
              <li>Ask a specific question to one individual persona</li>
            </ul>
            <p>
              This lets you dig deeper into interesting responses or explore unexpected insights.
            </p>
            <img
              src="/static/screenshots/follow-up-question.png"
              alt="Follow-up question"
              class="screenshot"
            />
          </section>

          <section class="content-section">
            <h3>9. Generate Summary</h3>
            <p>
              When you're done collecting responses, use the "Generate Summary" feature. The AI
              analyzes all responses and identifies:
            </p>
            <ul>
              <li>Common themes and patterns</li>
              <li>Notable outliers or surprising perspectives</li>
              <li>Key insights across your research group</li>
            </ul>
            <p>This gives you a quick overview without reading every individual response.</p>
            <img
              src="/static/screenshots/response-summary.png"
              alt="Response summary"
              class="screenshot"
            />
          </section>

          <section class="content-section">
            <h3>10. Generate Final Report</h3>
            <p>
              When your study is complete, generate a final report. This creates a comprehensive PDF
              that includes:
            </p>
            <ul>
              <li>All questions and responses</li>
              <li>Summary insights and themes</li>
              <li>Persona details and demographics</li>
              <li>Analysis and recommendations</li>
            </ul>
            <p>
              Share this report with your team, stakeholders, or clients to communicate your
              research findings.
            </p>
            <img
              src="/static/screenshots/generate-report.png"
              alt="Generate final report"
              class="screenshot"
            />
            <img
              src="/static/screenshots/report-commitment.png"
              alt="Report commitment"
              class="screenshot"
            />
            <p>
              This cannot be undone.
            </p>
          </section>

          <section class="content-section">
            <h2>Final Report Generation</h2>
            <img
              src="/static/screenshots/report-generation.png"
              alt="Report generation"
              class="screenshot"
            />
            <p>
              The system will start creating your report. You can now close this browser window. You will receive an automated email once the report has been created. Depending on the complexity of your study, this can take from 15 minutes to two hours.
            </p>
            <p>
              Export your data in multiple formats for further analysis:
            </p>
            <ul>
              <li>
                <strong>PDF:</strong> Formatted reports for presentations
              </li>
              <li>
                <strong>CSV:</strong> Raw data for Excel or statistical analysis
              </li>
              <li>
                <strong>Excel:</strong> Spreadsheets with formatted tables
              </li>
            </ul>
          </section>

          <section class="content-section">
            <h2>Next Steps</h2>
            <p>
              <a href="/getting-started"><strong>Back to Getting Started</strong></a> - Return to the main guide
            </p>
            <p>
              <a href="/quick-questions"><strong>Quick Questions</strong></a> - Learn about getting instant answers
            </p>
          </section>
        </main>
      </div>
    </Layout>
  )
})

export default fullResearchStudies
