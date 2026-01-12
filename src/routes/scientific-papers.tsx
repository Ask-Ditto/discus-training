import { Hono } from 'hono'
import { Layout } from '../components/Layout'

const scientificPapers = new Hono()

scientificPapers.get('/', (c) => {
  return c.html(
    <Layout
      currentPage="scientific-papers"
      title="Scientific Papers"
      description="Research papers that power synthetic research methodology"
    >
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Scientific Papers</h1>
          <p class="hero-subtitle">
            Research backing the methodology behind synthetic research
          </p>
        </div>
      </section>

      <div class="container">
        <main>
          <section class="content-section">
            <h2>The Science Behind Synthetic Research</h2>
            <p>
              Synthetic research isn't just a new tool - it's built on rigorous scientific research
              into how AI models can simulate human behavior and decision-making. Here are some of the
              key papers that inform this methodology.
            </p>
          </section>

          <section class="content-section">
            <h3>The State of Synthetic Research in 2025</h3>
            <p>
              <strong>Christopher Silvestri</strong> · Published July 2025
              <br />
              <a href="https://christophersilvestri.com/research-reports/state-of-synthetic-research-in-2025/" target="_blank" rel="noopener noreferrer">
                Read the full report →
              </a>
            </p>
            <p>
              This industry report maps out where synthetic research works and where it doesn't. The field
              is splitting into two paths: behavioral simulation for product testing and qualitative
              exploration for marketing insights. Both have their place.
            </p>
            <p>
              The report is honest about current limitations - AI can be overly positive, miss emotional
              nuance, and amplify existing biases. The solution? Use synthetic research for fast,
              low-stakes exploration and early-stage testing, but always validate critical decisions with
              real human data.
            </p>
            <p>
              <strong>Key takeaway:</strong> Treat synthetic research as a complement to traditional
              methods, not a replacement. Build a risk-based framework to decide when each approach makes
              sense for your business.
            </p>
          </section>

          <section class="content-section">
            <h3>Human Cognition Through Large Language Models</h3>
            <p>
              <strong>Marcel Binz, Elif Akata, et al.</strong> · Published January 2025
              <br />
              <a href="https://www.nature.com/articles/s41586-025-09215-4" target="_blank" rel="noopener noreferrer">
                Read the paper (Nature) →
              </a>
            </p>
            <p>
              Researchers fine-tuned an LLM on over 10 million real human choices from 160 psychology
              experiments. The result - called Centaur - predicts human behavior more accurately than both
              generic AI models and traditional cognitive models.
            </p>
            <p>
              What matters here: Centaur doesn't just predict the average response. It captures the full
              range of how different people actually behave. It generalizes to new situations it's never
              seen. And its internal patterns match human brain activity better than generic models.
            </p>
            <p>
              <strong>Key takeaway:</strong> When you train AI on rich, structured human behavioral data,
              it gets remarkably good at thinking like people do. This is the foundation that makes
              synthetic research possible.
            </p>
          </section>

          <section class="content-section">
            <h3>Improving LLM Social Modeling Through Simulation</h3>
            <p>
              <strong>Niles Egan</strong> · Stanford CS224R · January 2025
              <br />
              <a href="https://cs224r.stanford.edu/projects/pdfs/224R_Final_Paper.pdf" target="_blank" rel="noopener noreferrer">
                Read the paper (PDF) →
              </a>
            </p>
            <p>
              This paper tested different ways to train AI models to predict human interview responses
              using 250 two-hour interviews. Standard fine-tuning matched exact phrasing well, but a
              method called Direct Preference Optimization (DPO) was much better at capturing the full
              sentiment and meaning of what people said.
            </p>
            <p>
              The interesting part: DPO worked consistently across different demographic groups without
              adding bias. And even a small 1B parameter model nearly matched GPT-4o when trained this way.
            </p>
            <p>
              <strong>Key takeaway:</strong> How you train matters as much as model size. For synthetic
              research to feel human, the model needs to learn not just what people say, but how they
              really think and feel about topics.
            </p>
          </section>

          <section class="content-section">
            <h3>AI Personas for Replicating Media Effects Research</h3>
            <p>
              <strong>Leo Yeykelis, Kaavya Pichai, James J. Cummings, Byron Reeves</strong> · Published August 2024
              <br />
              <a href="https://arxiv.org/pdf/2408.16073" target="_blank" rel="noopener noreferrer">
                Read the paper (arXiv) →
              </a>
            </p>
            <p>
              This study created 19,447 AI personas to replicate 133 findings from 45 published marketing
              experiments. Using the exact same stimuli and measures, the AI replications matched human
              results 76% of the time for main effects - rising to 83% for strong effects (p &lt; 0.001).
            </p>
            <p>
              Here's what didn't work as well: only 27% of interaction effects were reproduced, and
              marginal or small effects were inconsistent. But that's similar to rates in human
              replications. The cost savings are dramatic - nearly 20,000 simulated participants in hours
              for tens of dollars.
            </p>
            <p>
              <strong>Key takeaway:</strong> Use AI personas for rapid message testing and screening of
              concepts, especially when original effects are strong. But don't trust them for subtle
              interactions or marginal findings - those need human validation.
            </p>
          </section>

          <section class="content-section">
            <h3>OPeRA: Real Shopping Behavior vs. AI Predictions</h3>
            <p>
              <strong>Ziyi Wang, Yuxuan Lu, et al.</strong> · Published June 2025
              <br />
              <a href="https://arxiv.org/pdf/2506.05606" target="_blank" rel="noopener noreferrer">
                Read the paper (arXiv) →
              </a>
            </p>
            <p>
              Researchers collected 36,691 real shopping actions from 54 users, complete with their
              personas and self-reported reasons for each choice. They then tested how well top LLMs
              (GPT-4.1, Claude-3.7, DeepSeek-R1, Llama-3.3) could predict what people would do next.
            </p>
            <p>
              The best model - GPT-4.1 - only achieved 18.5% accuracy for predicting the exact next action.
              That's not great. Models struggled even more with personalization, and removing persona or
              rationale context made things worse. The gap between AI and human behavior is still large for
              complex, personalized decisions.
            </p>
            <p>
              <strong>Key takeaway:</strong> Current LLMs can capture broad patterns but fall short on
              predicting specific, personalized behaviors. When you need to understand nuanced decision
              flows - especially in e-commerce - real human data is still essential.
            </p>
          </section>

          <section class="content-section">
            <div class="info-box">
              <div class="info-box-header">
                <span class="info-icon">📚</span>
                <h4>More Research Coming</h4>
              </div>
              <p>
                The field of synthetic research is rapidly evolving. We'll update this page as new
                research emerges that informs and validates the methodology.
              </p>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
})

export default scientificPapers
