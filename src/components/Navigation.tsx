export const Navigation = (props: { currentPage?: string }) => {
  return (
    <nav class="navbar">
      <div class="navbar-container">
        <a href="/" class="navbar-brand">
          <img src="/static/6seeds-logo.webp" alt="Six Seeds" class="navbar-logo-img" />
          <div class="navbar-subtitle">Synthetic Research Training</div>
        </a>
        <div class="navbar-links">
          <a
            href="/"
            class={`navbar-link ${props.currentPage === 'home' ? 'active' : ''}`}
          >
            Overview
          </a>
          <a
            href="/questions"
            class={`navbar-link ${props.currentPage === 'questions' ? 'active' : ''}`}
          >
            Question Guide
          </a>
        </div>
      </div>
    </nav>
  )
}
