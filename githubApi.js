export async function fetchGitHubRepos(username) {
  const repoContainer = document.getElementById('github-repos');
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
  const repos = await response.json();

  repos.forEach(repo => {
    const repoDiv = document.createElement('div');
    repoDiv.classList.add('repo');
    repoDiv.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description || 'No description available'}</p>
      <a href="${repo.html_url}" target="_blank">View on GitHub</a>
    `;
    repoContainer.appendChild(repoDiv);
  });
}
