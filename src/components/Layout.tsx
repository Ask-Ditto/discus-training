import { Sidebar } from './Sidebar'
import CSS from '../../public/static/style.css?raw'

export const Layout = (props: { children: any; currentPage: string; title: string; description: string }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title} - Six Seeds Academy</title>
        <meta name="description" content={props.description} />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function toggleSidebar() {
                const sidebar = document.querySelector('.sidebar');
                const overlay = document.querySelector('.sidebar-overlay');
                sidebar.classList.toggle('open');
                overlay.classList.toggle('open');
              }

              function closeSidebar() {
                const sidebar = document.querySelector('.sidebar');
                const overlay = document.querySelector('.sidebar-overlay');
                sidebar.classList.remove('open');
                overlay.classList.remove('open');
              }
            `,
          }}
        />
      </head>
      <body>
        <div class="app-layout">
          <button class="hamburger" onclick="toggleSidebar()">
            ☰
          </button>
          <div class="sidebar-overlay" onclick="closeSidebar()"></div>
          <Sidebar currentPage={props.currentPage} />
          <div class="main-content">
            {props.children}
            <footer class="footer">
              <div class="footer-content">
                <p>
                  <strong>Six Seeds Consulting</strong>
                </p>
                <p>
                  Questions? Contact us at{' '}
                  <a href="mailto:hello@sixseedsconsulting.com">hello@sixseedsconsulting.com</a>
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
