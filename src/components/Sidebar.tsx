export const Sidebar = (props: { currentPage: string }) => {
  return (
    <aside class="sidebar">
      <div class="sidebar-logo">
        <img src="/static/6seeds-logo.webp" alt="Six Seeds" class="sidebar-logo-img" />
        <div class="sidebar-logo-text">Synthetic Research Training</div>
      </div>
      <nav class="sidebar-nav">
        <a
          href="/"
          class={`sidebar-nav-link ${props.currentPage === 'home' ? 'active' : ''}`}
          onclick="closeSidebar()"
        >
          Home
        </a>
        <a
          href="/what-is-synthetic-research"
          class={`sidebar-nav-link ${props.currentPage === 'what-is-synthetic-research' ? 'active' : ''}`}
          onclick="closeSidebar()"
        >
          What is Synthetic Research
        </a>
        <a
          href="/questions"
          class={`sidebar-nav-link ${props.currentPage === 'questions' ? 'active' : ''}`}
          onclick="closeSidebar()"
        >
          Question Writing Guide
        </a>
        <a
          href="/getting-started"
          class={`sidebar-nav-link ${props.currentPage === 'getting-started' ? 'active' : ''}`}
          onclick="closeSidebar()"
        >
          Getting Started
        </a>
        <a
          href="/quick-questions"
          class={`sidebar-nav-link sidebar-nav-sublink ${props.currentPage === 'quick-questions' ? 'active' : ''}`}
          onclick="closeSidebar()"
        >
          Quick Questions
        </a>
        <a
          href="/full-research-studies"
          class={`sidebar-nav-link sidebar-nav-sublink ${props.currentPage === 'full-research-studies' ? 'active' : ''}`}
          onclick="closeSidebar()"
        >
          Full Research Studies
        </a>
        <a
          href="/scientific-papers"
          class={`sidebar-nav-link ${props.currentPage === 'scientific-papers' ? 'active' : ''}`}
          onclick="closeSidebar()"
        >
          Scientific Papers
        </a>
      </nav>
    </aside>
  )
}
