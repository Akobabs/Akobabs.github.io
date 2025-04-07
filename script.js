document.addEventListener('DOMContentLoaded', () => {
    // Add Dark Mode Toggle Button
    const toggle = document.createElement('button');
    toggle.textContent = 'Dark Mode';
    toggle.style.position = 'fixed';
    toggle.style.top = '20px';
    toggle.style.right = '20px';
    toggle.style.padding = '0.5rem 1rem';
    toggle.style.background = '#333';
    toggle.style.color = '#fff';
    toggle.style.border = 'none';
    toggle.style.borderRadius = '4px';
    toggle.style.cursor = 'pointer';
    toggle.style.fontFamily = '"Roboto Mono", monospace';
    document.body.appendChild(toggle);

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
});

// Dark Mode Styles
const darkModeStyles = `
    .dark-mode { background: #2d2d2d; color: #ddd; }
    .dark-mode header { background: #333; border-bottom-color: #444; }
    .dark-mode header::before { background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><line x1="0" y1="100" x2="200" y2="100" stroke="rgba(255,255,255,0.05)" stroke-width="1"/><line x1="100" y1="0" x2="100" y2="200" stroke="rgba(255,255,255,0.05)" stroke-width="1"/><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="150" cy="150" r="2" fill="rgba(255,255,255,0.1)"/></svg>'); }
    .dark-mode nav { background: #222; border-bottom-color: #333; }
    .dark-mode .site-title, .dark-mode .hero h1, .dark-mode h2, .dark-mode h3 { color: #fff; }
    .dark-mode nav a { color: #bbb; }
    .dark-mode nav a:hover { color: #00c4cc; }
    .dark-mode .affiliation, .dark-mode .intro, .dark-mode .summary-item p, .dark-mode .summary-item ul { color: #bbb; }
    .dark-mode .credentials { color: #888; }
    .dark-mode .summary-card, .dark-mode .summary-item { background: #333; border-color: #444; box-shadow: 0 2px 4px rgba(255,255,255,0.05); }
    .dark-mode .summary-card p:first-child { color: #00c4cc; }
    .dark-mode .summary-item:hover { box-shadow: 0 4px 8px rgba(255,255,255,0.1); }
    .dark-mode footer { background: #333; color: #bbb; border-top-color: #444; }
    .dark-mode .cv-button { background: #00c4cc; }
    .dark-mode .cv-button:hover { background: #009ba1; }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = darkModeStyles;
document.head.appendChild(styleSheet);