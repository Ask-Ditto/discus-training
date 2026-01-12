import { Hono } from 'hono'
import { Layout } from '../components/Layout'

const questions = new Hono()

questions.get('/', (c) => {
  return c.html(
    <Layout
      currentPage="questions"
      title="Question Writing Guide"
      description="Best practices for writing effective synthetic research questions"
    >
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Question Writing Guide</h1>
          <p class="hero-subtitle">
            Learn how to craft effective research questions that generate actionable insights
          </p>
        </div>
      </section>

      <div class="container">
        <main>
          <section class="content-section">
            <h2>Why Question Quality Matters</h2>
            <p>
              In synthetic research, the quality of your insights depends entirely on the
              quality of your questions. Well-crafted questions elicit honest, thoughtful
              responses that reveal true consumer sentiments. Poorly worded questions lead to
              confusion, bias, and unreliable results.
            </p>
            <div class="quote">
              "The art and science of asking questions is the source of all knowledge."
              <br />- Thomas Berger
            </div>
          </section>

          <section class="content-section">
            <h2>Golden Rules of Question Writing</h2>

            <h3>1. Be Specific and Concrete</h3>
            <p>
              Vague questions generate vague answers. Always provide enough context and
              specificity for respondents to understand exactly what you're asking.
            </p>
            <div class="best-practices-grid">
              <div class="practice-card dont">
                <div class="practice-card-header">
                  <span class="practice-icon">❌</span>
                  <h3>Don't</h3>
                </div>
                <p>Ask broad, undefined questions</p>
                <div class="practice-examples">
                  <div class="practice-example">
                    <span class="example-label">Bad Example:</span>
                    <span class="example-text">
                      "What do you think about this brand?"
                    </span>
                  </div>
                  <div class="practice-example">
                    <span class="example-label">Why it's bad:</span>
                    <span class="example-text">
                      Too vague - thinking about what? Quality? Price? Ethics? This generates
                      unfocused rambling.
                    </span>
                  </div>
                </div>
              </div>

              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">✅</span>
                  <h3>Do</h3>
                </div>
                <p>Ask focused, specific questions</p>
                <div class="practice-examples">
                  <div class="practice-example">
                    <span class="example-label">Good Example:</span>
                    <span class="example-text">
                      "When you think about [Brand]'s product quality compared to competitors,
                      what stands out to you?"
                    </span>
                  </div>
                  <div class="practice-example">
                    <span class="example-label">Why it's good:</span>
                    <span class="example-text">
                      Specific focus on product quality with a competitive context. Clear what
                      you're asking about.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h3>2. Avoid Leading or Biased Questions</h3>
            <p>
              Leading questions push respondents toward a particular answer, tainting your
              results. Keep questions neutral and unbiased.
            </p>
            <div class="best-practices-grid">
              <div class="practice-card dont">
                <div class="practice-card-header">
                  <span class="practice-icon">❌</span>
                  <h3>Don't</h3>
                </div>
                <p>Lead respondents to an answer</p>
                <div class="practice-examples">
                  <div class="practice-example">
                    <span class="example-label">Bad Example:</span>
                    <span class="example-text">
                      "Don't you agree that [Brand] offers the best value for money?"
                    </span>
                  </div>
                  <div class="practice-example">
                    <span class="example-label">Why it's bad:</span>
                    <span class="example-text">
                      "Don't you agree" presumes agreement. Respondents feel pressured to
                      confirm your assumption.
                    </span>
                  </div>
                </div>
              </div>

              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">✅</span>
                  <h3>Do</h3>
                </div>
                <p>Ask neutral, open questions</p>
                <div class="practice-examples">
                  <div class="practice-example">
                    <span class="example-label">Good Example:</span>
                    <span class="example-text">
                      "How would you describe [Brand]'s value for money compared to other
                      options you've considered?"
                    </span>
                  </div>
                  <div class="practice-example">
                    <span class="example-label">Why it's good:</span>
                    <span class="example-text">
                      Neutral framing, allows for positive or negative responses, includes
                      comparative context.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h3>3. Ask One Thing at a Time</h3>
            <p>
              Double-barreled questions ask about multiple things simultaneously, making it
              impossible to know which part the respondent is answering.
            </p>
            <div class="best-practices-grid">
              <div class="practice-card dont">
                <div class="practice-card-header">
                  <span class="practice-icon">❌</span>
                  <h3>Don't</h3>
                </div>
                <p>Combine multiple questions</p>
                <div class="practice-examples">
                  <div class="practice-example">
                    <span class="example-label">Bad Example:</span>
                    <span class="example-text">
                      "How satisfied are you with [Brand]'s product quality and customer
                      service?"
                    </span>
                  </div>
                  <div class="practice-example">
                    <span class="example-label">Why it's bad:</span>
                    <span class="example-text">
                      What if product quality is great but service is terrible? Can't answer
                      accurately.
                    </span>
                  </div>
                </div>
              </div>

              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">✅</span>
                  <h3>Do</h3>
                </div>
                <p>Separate into distinct questions</p>
                <div class="practice-examples">
                  <div class="practice-example">
                    <span class="example-label">Good Example:</span>
                    <span class="example-text">
                      Question 1: "How satisfied are you with [Brand]'s product quality?"
                      <br />
                      Question 2: "How satisfied are you with [Brand]'s customer service?"
                    </span>
                  </div>
                  <div class="practice-example">
                    <span class="example-label">Why it's good:</span>
                    <span class="example-text">
                      Each question has a clear, single focus. Responses are unambiguous and
                      actionable.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h3>4. Use Clear, Simple Language</h3>
            <p>
              Avoid jargon, technical terms, or complex sentence structures. Write at a level
              that any consumer can easily understand.
            </p>
            <div class="best-practices-grid">
              <div class="practice-card dont">
                <div class="practice-card-header">
                  <span class="practice-icon">❌</span>
                  <h3>Don't</h3>
                </div>
                <p>Use industry jargon or complex terms</p>
                <div class="practice-examples">
                  <div class="practice-example">
                    <span class="example-label">Bad Example:</span>
                    <span class="example-text">
                      "How would you rate [Brand]'s omnichannel customer experience
                      optimization?"
                    </span>
                  </div>
                  <div class="practice-example">
                    <span class="example-label">Why it's bad:</span>
                    <span class="example-text">
                      "Omnichannel optimization" means nothing to most consumers. Too abstract.
                    </span>
                  </div>
                </div>
              </div>

              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">✅</span>
                  <h3>Do</h3>
                </div>
                <p>Use everyday language</p>
                <div class="practice-examples">
                  <div class="practice-example">
                    <span class="example-label">Good Example:</span>
                    <span class="example-text">
                      "How easy is it to shop with [Brand] across their website, app, and
                      stores?"
                    </span>
                  </div>
                  <div class="practice-example">
                    <span class="example-label">Why it's good:</span>
                    <span class="example-text">
                      Plain language everyone understands. Concrete examples of channels.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h3>5. Provide Context When Needed</h3>
            <p>
              Sometimes you need to provide background information or set the scene for your
              question. Don't assume respondents have the same knowledge you do.
            </p>
            <div class="best-practices-grid">
              <div class="practice-card dont">
                <div class="practice-card-header">
                  <span class="practice-icon">❌</span>
                  <h3>Don't</h3>
                </div>
                <p>Assume knowledge without context</p>
                <div class="practice-examples">
                  <div class="practice-example">
                    <span class="example-label">Bad Example:</span>
                    <span class="example-text">"What do you think about the new formula?"</span>
                  </div>
                  <div class="practice-example">
                    <span class="example-label">Why it's bad:</span>
                    <span class="example-text">
                      What formula? Many respondents won't know there's a new formula.
                    </span>
                  </div>
                </div>
              </div>

              <div class="practice-card do">
                <div class="practice-card-header">
                  <span class="practice-icon">✅</span>
                  <h3>Do</h3>
                </div>
                <p>Set the scene with necessary context</p>
                <div class="practice-examples">
                  <div class="practice-example">
                    <span class="example-label">Good Example:</span>
                    <span class="example-text">
                      "[Brand] recently reformulated their flagship product to use more natural
                      ingredients. If you've tried the new version, what differences have you
                      noticed?"
                    </span>
                  </div>
                  <div class="practice-example">
                    <span class="example-label">Why it's good:</span>
                    <span class="example-text">
                      Provides context about the change and qualifies respondents who've
                      actually tried it.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="content-section">
            <h2>Question Types & When to Use Them</h2>

            <h3>Open-Ended Questions</h3>
            <p>
              These questions allow respondents to answer in their own words, generating rich
              qualitative insights. Use when you want to explore feelings, motivations, or
              discover unexpected themes.
            </p>
            <div class="practice-example">
              <span class="example-label">Example:</span>
              <span class="example-text">
                "What comes to mind when you think about [Brand]?"
              </span>
            </div>
            <div class="practice-example">
              <span class="example-label">Best for:</span>
              <span class="example-text">
                Brand associations, exploring pain points, understanding decision drivers
              </span>
            </div>

            <h3>Comparative Questions</h3>
            <p>
              Ask respondents to compare options, revealing preferences and differentiation.
              Essential for competitive analysis and positioning.
            </p>
            <div class="practice-example">
              <span class="example-label">Example:</span>
              <span class="example-text">
                "When choosing between [Brand A] and [Brand B], what factors matter most to
                you?"
              </span>
            </div>
            <div class="practice-example">
              <span class="example-label">Best for:</span>
              <span class="example-text">
                Competitive positioning, feature prioritization, pricing strategy
              </span>
            </div>

            <h3>Behavioral Questions</h3>
            <p>
              Focus on actual behaviors rather than hypothetical intentions. Past behavior is
              the best predictor of future behavior.
            </p>
            <div class="practice-example">
              <span class="example-label">Example:</span>
              <span class="example-text">
                "Thinking about the last time you purchased [Product Category], what made you
                choose that particular brand?"
              </span>
            </div>
            <div class="practice-example">
              <span class="example-label">Best for:</span>
              <span class="example-text">
                Purchase drivers, usage patterns, customer journey mapping
              </span>
            </div>

            <h3>Projective Questions</h3>
            <p>
              Ask respondents to project themselves into scenarios or anthropomorphize brands.
              Reveals deeper emotional connections and perceptions.
            </p>
            <div class="practice-example">
              <span class="example-label">Example:</span>
              <span class="example-text">
                "If [Brand] were a person at a party, how would you describe their
                personality?"
              </span>
            </div>
            <div class="practice-example">
              <span class="example-label">Best for:</span>
              <span class="example-text">
                Brand personality, emotional positioning, uncovering implicit associations
              </span>
            </div>
          </section>

          <section class="content-section">
            <h2>Common Pitfalls to Avoid</h2>

            <div class="warning-box">
              <div class="warning-box-header">
                <span class="warning-icon">⚠️</span>
                <h4>Pitfall #1: Hypothetical Questions</h4>
              </div>
              <p>
                <strong>Problem:</strong> Asking "Would you buy..." or "How likely would you
                be to..." generates unreliable responses. People are terrible at predicting
                their future behavior.
              </p>
              <p>
                <strong>Solution:</strong> Focus on past behavior, current perceptions, or
                specific barriers. Instead of "Would you buy this?", ask "What would need to
                be true for you to consider buying this?"
              </p>
            </div>

            <div class="warning-box">
              <div class="warning-box-header">
                <span class="warning-icon">⚠️</span>
                <h4>Pitfall #2: Assuming Universal Brand Awareness</h4>
              </div>
              <p>
                <strong>Problem:</strong> Not all respondents know your brand. Questions that
                assume familiarity exclude important perspectives.
              </p>
              <p>
                <strong>Solution:</strong> Include a qualifier or provide brief context. "If
                you're familiar with [Brand], what's your impression?" or provide a one-line
                brand description.
              </p>
            </div>

            <div class="warning-box">
              <div class="warning-box-header">
                <span class="warning-icon">⚠️</span>
                <h4>Pitfall #3: Asking About Price Without Context</h4>
              </div>
              <p>
                <strong>Problem:</strong> "What would you pay for this?" generates unrealistically
                low numbers. Everyone wants things cheaper.
              </p>
              <p>
                <strong>Solution:</strong> Provide competitive context or use van Westendorp
                pricing methodology. "At what price would you consider this a bargain?" / "At
                what price would it seem too expensive?"
              </p>
            </div>
          </section>

          <section class="content-section">
            <h2>Real-World Examples</h2>

            <h3>Example 1: Spirits Brand (Discus-Relevant)</h3>
            <div class="practice-examples">
              <div class="practice-example">
                <span class="example-label">Research Goal:</span>
                <span class="example-text">
                  Understand premium whiskey purchase drivers for craft distillery
                </span>
              </div>
              <div class="practice-example">
                <span class="example-label">Question:</span>
                <span class="example-text">
                  "When you're shopping for premium whiskey ($50+), what factors influence your
                  choice? Think about your last purchase - what made you select that particular
                  bottle?"
                </span>
              </div>
              <div class="practice-example">
                <span class="example-label">Why it works:</span>
                <span class="example-text">
                  Specific category and price point, grounds in actual behavior, open-ended to
                  discover unexpected drivers
                </span>
              </div>
            </div>

            <h3>Example 2: Brand Perception</h3>
            <div class="practice-examples">
              <div class="practice-example">
                <span class="example-label">Research Goal:</span>
                <span class="example-text">
                  Understand how sustainability messaging is perceived
                </span>
              </div>
              <div class="practice-example">
                <span class="example-label">Question:</span>
                <span class="example-text">
                  "If [Brand] started highlighting their commitment to sustainability - like using organic ingredients, reducing carbon emissions, and supporting local farmers - would this change how you view the brand? Why or why not?"
                </span>
              </div>
              <div class="practice-example">
                <span class="example-label">Why it works:</span>
                <span class="example-text">
                  Sets up a clear scenario with specific details, asks for perception impact and reasoning, allows personas to evaluate the concept without needing prior exposure
                </span>
              </div>
            </div>

            <h3>Example 3: Product Development</h3>
            <div class="practice-examples">
              <div class="practice-example">
                <span class="example-label">Research Goal:</span>
                <span class="example-text">
                  Test interest in new ready-to-drink cocktail line
                </span>
              </div>
              <div class="practice-example">
                <span class="example-label">Question:</span>
                <span class="example-text">
                  "Imagine [Brand] launches a line of premium ready-to-drink cocktails using
                  their spirits. What would make you more or less likely to try them compared to
                  making cocktails yourself?"
                </span>
              </div>
              <div class="practice-example">
                <span class="example-label">Why it works:</span>
                <span class="example-text">
                  Sets clear scenario, explores both positive and negative factors, includes
                  relevant comparison point
                </span>
              </div>
            </div>
          </section>

          <section class="content-section">
            <h2>Need Help?</h2>
            <p>
              Writing great research questions is both an art and a science. If you're unsure
              about your questions or want feedback before launching a study, reach out to your
              Six Seeds team. We're here to help you get the most actionable insights possible.
            </p>
            <div class="info-box">
              <div class="info-box-header">
                <span class="info-icon">📧</span>
                <h4>Contact Your Team</h4>
              </div>
              <p>
                Email us at{' '}
                <a href="mailto:hello@sixseedsconsulting.com">
                  hello@sixseedsconsulting.com
                </a>{' '}
                with your draft questions and we'll provide feedback within 24 hours.
              </p>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
})

export default questions
