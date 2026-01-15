import { Hono } from 'hono'
import { Layout } from '../components/Layout'

const faq = new Hono()

faq.get('/', (c) => {
  return c.html(
    <Layout
      currentPage="faq"
      title="Frequently Asked Questions"
      description="Common questions about 6 Seeds Synthetic Research"
    >
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Frequently Asked Questions</h1>
          <p class="hero-subtitle">
            Everything you need to know about 6 Seeds Synthetic Research
          </p>
        </div>
      </section>

      <div class="container">
        <main>
          <section class="content-section">
            <h2>Platform & Methodology</h2>

            <h3>What is 6 Seeds Synthetic Research?</h3>
            <p>
              6 Seeds Synthetic Research is a revolutionary consumer research platform that uses{' '}
              <strong>synthetic research methodology</strong> to deliver insights in hours
              instead of weeks. By leveraging AI-powered synthetic personas calibrated to match
              real population behavior, 6 Seeds enables rapid, scalable, and cost-effective
              consumer research.
            </p>

            <h3>What's the difference between qualitative and quantitative research?</h3>
            <p>
              <strong>Quantitative research</strong> answers "how many" and "how much" questions using
              numbers and statistics. It measures, counts, and identifies large-scale patterns through
              surveys, web analytics, and statistical analysis.
            </p>
            <p>
              <strong>Qualitative research</strong> explores "why" and "how" questions to understand
              motivations, emotions, and the context behind behaviors. It uncovers deep insights through
              interviews, focus groups, and open-ended exploration.
            </p>
            <p>
              <strong>6 Seeds excels at qualitative research.</strong> Our platform is optimized for
              exploratory, open-ended questions that reveal consumer motivations and perceptions—not for
              quantitative measurement or statistical analysis.
            </p>

            <h3>How accurate is synthetic research?</h3>
            <p>
              Our synthetic personas are calibrated to achieve 95%+ correlation with
              traditional research methods. Our approach has been validated across hundreds
              of studies spanning multiple industries and markets.
            </p>

            <h3>What are synthetic personas?</h3>
            <p>
              Synthetic personas are AI-powered digital representations of real consumer segments.
              They are not generic chatbots - they are sophisticated simulations calibrated to match
              real consumer behavior patterns, including demographics, psychographics, attitudes,
              and behaviors.
            </p>

            <h3>How is this different from traditional research?</h3>
            <p>
              Traditional consumer research is slow, expensive, and difficult to scale. 6 Seeds Synthetic Research offers:
            </p>
            <ul>
              <li><strong>Speed:</strong> Get insights in hours, not weeks</li>
              <li><strong>Scale:</strong> Test multiple concepts, markets, or audiences simultaneously</li>
              <li><strong>Cost:</strong> 10-20x cheaper than traditional research methods</li>
              <li><strong>Consistency:</strong> Eliminate interviewer bias and panel fatigue</li>
              <li><strong>Flexibility:</strong> Iterate and refine your research in real-time</li>
            </ul>
          </section>

          <section class="content-section">
            <h2>Getting Started</h2>

            <h3>How do I get started?</h3>
            <p>
              Getting started is simple:
            </p>
            <ol>
              <li><strong>Log in</strong> to the platform and navigate to your research groups</li>
              <li><strong>Choose your workflow:</strong> Quick Questions (5-15 min) or Full Research Studies (30-60 min)</li>
              <li><strong>Write your questions</strong> following our best practices guide</li>
              <li><strong>Launch your study</strong> and get results in hours</li>
            </ol>

            <h3>Can I customize the personas?</h3>
            <p>
              Yes! Work with your 6 Seeds team to configure personas, questions, and any
              competitive comparisons to match your specific research needs.
            </p>

            <h3>How many synthetic personas can I add to each study?</h3>
            <p>
              Ideally you won't add more than 20 personas to a study. Adding more personas slows
              the system down and may lead to unreliable results. We are currently working on
              increasing that limit.
            </p>

            <h3>How long does a study take?</h3>
            <p>
              We offer two workflow types:
            </p>
            <ul>
              <li><strong>Quick Questions:</strong> 5-15 minute studies for rapid feedback on a single topic</li>
              <li><strong>Full Research Studies:</strong> 30-60 minute studies for comprehensive insights with follow-up questions</li>
            </ul>
            <p>
              Results are typically available within hours of launching your study.
            </p>

            <h3>How long does report generation take?</h3>
            <p>
              After completing your study, the system generates a comprehensive PDF report.
              Depending on the complexity of your study, this can take from 15 minutes to two hours.
              You'll receive an automated email once the report is ready.
            </p>
          </section>

          <section class="content-section">
            <h2>Use Cases</h2>

            <h3>When should I use synthetic research?</h3>
            <p>
              6 Seeds Synthetic Research excels when speed, scale, and cost matter. Ideal use cases include:
            </p>
            <ul>
              <li><strong>Brand Health Tracking:</strong> Monitor consumer sentiment over time</li>
              <li><strong>Concept Testing:</strong> Test new products, packaging, or messaging before development</li>
              <li><strong>Competitive Analysis:</strong> Understand how your brand compares to competitors</li>
              <li><strong>Market Entry Research:</strong> Evaluate new market opportunities</li>
              <li><strong>Campaign Evaluation:</strong> Test creative concepts and positioning</li>
            </ul>

            <h3>When should I NOT use synthetic research?</h3>
            <p>
              Synthetic research may not be appropriate for:
            </p>
            <ul>
              <li><strong>Highly regulated compliance research</strong> where traditional methodology is legally required</li>
              <li><strong>Legal or regulatory decisions</strong> that specifically require traditional research methods</li>
              <li><strong>Situations where stakeholders specifically require traditional research</strong> and will not accept synthetic methodology</li>
            </ul>
          </section>

          <section class="content-section">
            <h2>Question Writing</h2>

            <h3>What makes a good research question?</h3>
            <p>
              Great research questions follow these principles:
            </p>
            <ul>
              <li><strong>Be specific and focused</strong> - Ask about one thing at a time</li>
              <li><strong>Use natural language</strong> - Write how you'd speak to a real person</li>
              <li><strong>Provide context</strong> - Give enough background for informed responses</li>
              <li><strong>Stay neutral</strong> - Avoid leading or biased language</li>
              <li><strong>Ask "why"</strong> - Follow up quantitative questions with qualitative probes</li>
            </ul>

            <h3>What are common question-writing mistakes?</h3>
            <p>
              Avoid these common pitfalls:
            </p>
            <ul>
              <li><strong>Leading questions</strong> that suggest the "right" answer</li>
              <li><strong>Double-barreled questions</strong> asking about multiple things at once</li>
              <li><strong>Questions with no context</strong> that lack necessary background</li>
              <li><strong>Overly complex questions</strong> using jargon or technical terms</li>
            </ul>

            <h3>Can I ask about things personas haven't experienced?</h3>
            <p>
              Yes! Instead of asking "Have you seen X?", use hypothetical scenarios. For example:
              "If [Brand] started highlighting their commitment to sustainability - like using
              organic ingredients, reducing carbon emissions, and supporting local farmers - would
              this change how you view the brand? Why or why not?"
            </p>

            <h3>Can I upload images for review?</h3>
            <p>
              Yes, you can upload up to eight images per study for personas to review and
              provide feedback on. This is ideal for testing packaging, creative concepts,
              or visual materials.
            </p>

            <h3>Can I ask follow-up questions?</h3>
            <p>
              Yes! In Full Research Studies, you can review initial responses and ask follow-up
              questions to dig deeper into specific topics or clarify responses. This allows for
              the same conversational depth you'd get in traditional qualitative research.
            </p>

            <h3>Am I limited to how many questions I can ask?</h3>
            <p>
              No you are not. You can ask as many questions or field as many research studies as you like.
            </p>
          </section>

          <section class="content-section">
            <h2>Results & Reports</h2>

            <h3>What's included in the final report?</h3>
            <p>
              The final PDF report includes:
            </p>
            <ul>
              <li>All questions and responses from each persona</li>
              <li>Summary insights and key themes</li>
              <li>Persona details and demographics</li>
              <li>Analysis and recommendations</li>
            </ul>

            <h3>Can I export individual responses?</h3>
            <p>
              Yes, you can export responses in multiple formats including CSV, JSON, and PDF
              before generating the final report. This allows you to work with the raw data
              in your preferred analysis tools.
            </p>

            <h3>Can I share results with my team?</h3>
            <p>
              Yes, you can share the final PDF report with your team, stakeholders, or clients.
              The report is designed to be presentation-ready and clearly communicates your
              research findings.
            </p>
          </section>

          <section class="content-section">
            <h2>Support</h2>

            <h3>What if I need help writing questions?</h3>
            <p>
              If you're unsure about your questions or want feedback before launching a study,
              reach out to your 6 Seeds team. Email us at{' '}
              <a href="mailto:hello@6seedsconsulting.com">hello@6seedsconsulting.com</a> with
              your draft questions and we'll provide feedback within 24 hours.
            </p>

            <h3>Who do I contact for support?</h3>
            <p>
              For any questions or support, contact us at{' '}
              <a href="mailto:hello@6seedsconsulting.com">hello@6seedsconsulting.com</a>
            </p>

            <h3>I have some specific needs, will you build things for me?</h3>
            <p>
              Absolutely! Contact Andreas at{' '}
              <a href="mailto:andreas@6seedsconsulting.com">andreas@6seedsconsulting.com</a> and
              if at all possible we will customize the system for you.
            </p>
          </section>
        </main>
      </div>
    </Layout>
  )
})

export default faq
