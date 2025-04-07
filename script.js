document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.createElement('button');
    toggle.textContent = 'Dark Mode';
    toggle.style.position = 'fixed';
    toggle.style.top = '20px';
    toggle.style.right = '20px';
    toggle.style.padding = '0.5rem 1rem';
    toggle.style.background = '#2c3e50';
    toggle.style.color = '#ecf0f1';
    toggle.style.border = 'none';
    toggle.style.borderRadius = '4px';
    toggle.style.cursor = 'pointer';
    document.body.appendChild(toggle);

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

const darkModeStyles = `
    .dark-mode { background: #2c3e50; color: #ecf0f1; }
    .dark-mode nav { background: #1a252f; }
    .dark-mode header { background: #34495e; color: #ecf0f1; border-bottom-color: #1a252f; }
    .dark-mode header::before { background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><line x1="0" y1="100" x2="200" y2="100" stroke="rgba(236,240,241,0.1)" stroke-width="1"/><line x1="100" y1="0" x2="100" y2="200" stroke="rgba(236,240,241,0.1)" stroke-width="1"/><circle cx="50" cy="50" r="2" fill="rgba(236,240,241,0.2)"/><circle cx="150" cy="150" r="2" fill="rgba(236,240,241,0.2)"/></svg>'); }
    .dark-mode .hero h1 { color: #ecf0f1; }
    .dark-mode .credentials { color: #bdc3c7; }
    .dark-mode .project-card { background: #34495e; border-color: #1a252f; }
    .dark-mode h2 { color: #3498db; border-bottom-color: #3498db; }
    .dark-mode .skills-container h3 { color: #3498db; }
    .dark-mode footer { background: #1a252f; }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = darkModeStyles;
document.head.appendChild(styleSheet);