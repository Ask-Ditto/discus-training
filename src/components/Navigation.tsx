export const Navigation = (props: { currentPage?: string }) => {
  return (
    <nav class="navbar">
      <div class="navbar-container">
        <a href="/" class="navbar-brand">
          <div>
            <div class="navbar-logo">Six Seeds Academy</div>
            <div class="navbar-subtitle">Ditto Training Portal</div>
          </div>
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
