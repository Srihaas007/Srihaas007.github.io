// Theme switcher with localStorage
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Check localStorage for theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeSwitch.textContent = "Switch to Light Mode";
} else {
  themeSwitch.textContent = "Switch to Dark Mode";
}

themeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  themeSwitch.textContent = theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode";
});

// Lazy-load GitHub repos
import { fetchGitHubRepos } from './githubApi.js';
fetchGitHubRepos('Srihaas007');
