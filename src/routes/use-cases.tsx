import { Hono } from 'hono'
import { Layout } from '../components/Layout'

const useCases = new Hono()

useCases.get('/', (c) => {
  return c.html(
    <Layout
      currentPage="use-cases"
      title="Use Cases"
      description="When to use synthetic research and spirits industry applications"
    >
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Use Cases for Synthetic Research</h1>
          <p class="hero-subtitle">
            When to use it, when not to use it, and spirits industry examples
          </p>
        </div>
      </section>

      <div class="container">
        <main>
          <section class="content-section">
            <h2>When to Use Synthetic Research</h2>
            <p>
              6 Seeds Synthetic Research excels in specific scenarios where speed, scale, and cost matter.
              Here are the ideal use cases:
            </p>

            <h3>1. Brand Health Tracking</h3>
            <p>
              Monitor consumer sentiment over time with consistent measurement. Track NPS, awareness,
              consideration, and preference metrics on a weekly or monthly basis.
            </p>
            <div class="practice-example">
              <span class="example-label">Spirits Example:</span>
              <span class="example-text">
                Track quarterly brand health for a whiskey portfolio across 5 brands, measuring
                awareness, trial, and advocacy trends among premium spirits consumers.
              </span>
            </div>

            <h3>2. Concept Testing</h3>
            <p>
              Test new product ideas, packaging designs, or messaging before launch. Get rapid
              feedback on multiple variations to identify the strongest concepts early.
            </p>
            <div class="practice-example">
              <span class="example-label">Spirits Example:</span>
              <span class="example-text">
                Test 8 different RTD (ready-to-drink) cocktail concepts to identify which flavors,
                alcohol content, and packaging formats resonate most with target consumers before
                investing in production.
              </span>
            </div>

            <h3>3. Competitive Analysis</h3>
            <p>
              Understand how consumers perceive your brand vs. competitors. Identify your
              strengths, weaknesses, and opportunities for differentiation.
            </p>
            <div class="practice-example">
              <span class="example-label">Spirits Example:</span>
              <span class="example-text">
                Compare consumer perceptions of your craft bourbon against 4 competitors on dimensions
                like quality, authenticity, value, and heritage to inform positioning strategy.
              </span>
            </div>

            <h3>4. Market Entry Research</h3>
            <p>
              Explore new markets or categories quickly. Understand consumer needs, preferences,
              and barriers before investing in full-scale market entry.
            </p>
            <div class="practice-example">
              <span class="example-label">Spirits Example:</span>
              <span class="example-text">
                Evaluate opportunities for a tequila brand to enter the premium vodka category by
                understanding consumer openness, perceived fit, and potential barriers.
              </span>
            </div>

            <h3>5. Campaign Evaluation</h3>
            <p>
              Measure the impact of marketing campaigns in real-time. Test creative concepts before
              launch or track awareness and perception shifts during live campaigns.
            </p>
            <div class="practice-example">
              <span class="example-label">Spirits Example:</span>
              <span class="example-text">
                Pre-test 5 different advertising concepts for a whiskey brand's holiday campaign,
                measuring message recall, brand fit, and purchase intent before committing media budget.
              </span>
            </div>

            <h3>6. Price Testing & Optimization</h3>
            <p>
              Understand price sensitivity, optimal price points, and value perceptions without
              revealing your actual pricing strategy to the market.
            </p>
            <div class="practice-example">
              <span class="example-label">Spirits Example:</span>
              <span class="example-text">
                Test price elasticity for a new premium gin across $35-$65 range to identify the
                optimal price point that maximizes both volume and premium positioning.
              </span>
            </div>
          </section>

          <section class="content-section">
            <h2>When NOT to Use Synthetic Research</h2>
            <p>
              Synthetic research is powerful, but it's not appropriate for every situation. Here's when
              you should use traditional research methods instead:
            </p>

            <div class="best-practices-grid">
              <div class="practice-card dont">
                <div class="practice-card-header">
                  <span class="practice-icon">⚖️</span>
                  <h3>Regulated/Legal Decisions</h3>
                </div>
                <p>
                  When research findings will be used in regulatory filings, legal proceedings, or
                  compliance documentation requiring traditional methodology.
                </p>
                <div class="practice-example">
                  <span class="example-label">Example:</span>
                  <span class="example-text">
                    TTB (Alcohol and Tobacco Tax and Trade Bureau) label approval requiring consumer
                    confusion testing must use traditional methods.
                  </span>
                </div>
              </div>

              <div class="practice-card dont">
                <div class="practice-card-header">
                  <span class="practice-icon">📋</span>
                  <h3>Stakeholder Requirements</h3>
                </div>
                <p>
                  When investors, board members, or partners explicitly require traditional research
                  for decision validation.
                </p>
                <div class="practice-example">
                  <span class="example-label">Example:</span>
                  <span class="example-text">
                    Board approval for $10M product launch requiring traditional quantitative research
                    with n=1000+ consumers.
                  </span>
                </div>
              </div>
            </div>

            <div class="best-practices-grid">
              <div class="practice-card dont">
                <div class="practice-card-header">
                  <span class="practice-icon">👃</span>
                  <h3>Sensory/Physical Testing</h3>
                </div>
                <p>
                  When consumers need to taste, smell, touch, or physically experience products to
                  provide meaningful feedback.
                </p>
                <div class="practice-example">
                  <span class="example-label">Example:</span>
                  <span class="example-text">
                    Blind taste tests comparing new whiskey formulations require real consumers to
                    evaluate actual product samples.
                  </span>
                </div>
              </div>

              <div class="practice-card dont">
                <div class="practice-card-header">
                  <span class="practice-icon">🎯</span>
                  <h3>Ultra-Niche Audiences</h3>
                </div>
                <p>
                  When your target is extremely specific or requires very specialized knowledge that
                  synthetic personas may not accurately represent.
                </p>
                <div class="practice-example">
                  <span class="example-label">Example:</span>
                  <span class="example-text">
                    Research specifically targeting master sommeliers or certified cicerones may benefit
                    from traditional methods.
                  </span>
                </div>
              </div>
            </div>

            <div class="quote">
              "Use synthetic research for speed and scale in the 90% of decisions that don't require
              traditional methods. Reserve traditional research for the 10% where it's truly necessary."
            </div>
          </section>

          <section class="content-section">
            <h2>Spirits Industry Deep Dive</h2>
            <p>
              Synthetic research is particularly well-suited for spirits and beverage brands. Here are
              detailed use cases relevant to the industry:
            </p>

            <h3>Premium Whiskey Purchase Drivers</h3>
            <p>
              <strong>Challenge:</strong> Understanding what motivates consumers to choose premium
              whiskey ($50+) over mid-tier or competitive brands.
            </p>
            <p>
              <strong>Synthetic Research Approach:</strong> Ask synthetic personas about their last
              premium whiskey purchase - what factors influenced their choice, what alternatives they
              considered, and what would make them switch brands.
            </p>
            <p>
              <strong>Why Synthetic Works:</strong> Fast iteration across multiple brands and price
              points without recruiting dozens of premium whiskey consumers.
            </p>

            <h3>RTD Cocktail Line Development</h3>
            <p>
              <strong>Challenge:</strong> Determining which cocktail flavors, alcohol content, and
              formats to launch in a crowded RTD market.
            </p>
            <p>
              <strong>Synthetic Research Approach:</strong> Present 10+ concept variations and ask
              synthetic personas which they'd be most likely to try, what occasions they'd drink them,
              and how they compare to making cocktails themselves.
            </p>
            <p>
              <strong>Why Synthetic Works:</strong> Test many variations quickly before committing to
              formulation and production. Narrow to 2-3 finalists for traditional testing.
            </p>

            <h3>Craft Distillery Positioning</h3>
            <p>
              <strong>Challenge:</strong> A new craft distillery needs to differentiate itself in a
              region with 20+ competitors.
            </p>
            <p>
              <strong>Synthetic Research Approach:</strong> Test different positioning angles
              (heritage, innovation, sustainability, local ingredients) and measure which resonates
              most with target consumers.
            </p>
            <p>
              <strong>Why Synthetic Works:</strong> Rapidly test positioning hypotheses before
              committing to brand strategy and marketing investments.
            </p>

            <h3>Distribution Expansion Decisions</h3>
            <p>
              <strong>Challenge:</strong> Should a regional spirits brand expand to new markets?
              Which markets show the most promise?
            </p>
            <p>
              <strong>Synthetic Research Approach:</strong> Test brand fit, awareness potential, and
              competitive landscape in 5-10 target markets simultaneously to prioritize expansion.
            </p>
            <p>
              <strong>Why Synthetic Works:</strong> Evaluate multiple markets in parallel without the
              cost of recruiting panels in each geography.
            </p>
          </section>

          <section class="content-section">
            <h2>Getting the Most Value</h2>
            <p>
              To maximize the value of synthetic research:
            </p>
            <ul>
              <li>
                <strong>Start with synthetic, refine with traditional:</strong> Use synthetic research
                for early-stage screening and hypothesis generation. Validate finalists with traditional
                methods.
              </li>
              <li>
                <strong>Test more, test often:</strong> The cost efficiency means you can test ideas
                you'd never have researched before. Take advantage of this.
              </li>
              <li>
                <strong>Iterate quickly:</strong> If results surprise you, refine your questions and
                test again the same day. Rapid iteration is your advantage.
              </li>
              <li>
                <strong>Focus on "why" not "how many":</strong> Use synthetic research for qualitative
                insights and directional guidance, not precise market sizing.
              </li>
            </ul>

            <div class="info-box">
              <div class="info-box-header">
                <span class="info-icon">💡</span>
                <h4>Ready to Apply This?</h4>
              </div>
              <p>
                Visit our <a href="/questions">Question Writing Guide</a> to learn how to craft
                questions for your specific use case, or check out our{' '}
                <a href="/getting-started">Getting Started guide</a> for step-by-step instructions.
              </p>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
})

export default useCases
