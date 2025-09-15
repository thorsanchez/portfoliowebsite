/*tekið frá https://www.youtube.com/watch?v=xMK7txZuT2E*/
import React, { useEffect, useState } from 'react';

function Verkefni() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const username = 'thorsanchez';
    console.log("Fetching GitHub repos for:", username);

    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
      })
      .then(result => {
        console.log("Repos fetched:", result);
        const starredRepos = result.filter(repo => repo.stargazers_count > 0);
        const sortedRepos = starredRepos.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        setRepos(sortedRepos);
        setLoading(false);
        console.log("Starred repos found:", sortedRepos.length);
      })
      .catch(err => {
        console.error("Error fetching repos:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getTechTag = (repo) => {
    if (repo.language) return repo.language;
    const name = repo.name.toLowerCase();
    if (name.includes('react') || name.includes('jsx')) return 'React';
    if (name.includes('java')) return 'Java';
    if (name.includes('python')) return 'Python';
    if (name.includes('tesla')) return 'React';
    return 'JavaScript';
  };
  
  const getProjectClass = (repo) => {
    const tech = getTechTag(repo).toLowerCase();
    if (tech === 'react') return 'react';
    if (tech === 'java') return 'java';
    if (repo.name.toLowerCase().includes('tesla')) return 'tesla';
    return '';
  };

  if (loading) {
    return (
      <div className="section-container">
        <div className="content-wrapper">
          <h2>Verkefni</h2>
          <p>Hleð verkefnum...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="section-container">
        <div className="content-wrapper">
          <h2>Verkefni</h2>
          <p>Villa við að hlaða verkefnum: {error}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="section-container">
      <div className="content-wrapper">
        <h2>Verkefni</h2>
        <div className="projects-container">
          {repos.length === 0 ? (
            <p>Engin starred verkefni fundust.</p>
          ) : (
            repos.map((repo) => (
              <div key={repo.id} className={`project-card ${getProjectClass(repo)}`}>
                <img
                  src={`https://raw.githubusercontent.com/thorsanchez/${repo.name}/${repo.default_branch}/Thumbnail/thumbnail.png`}
                  alt={repo.name}
                  className="project-image"
                  onError={(e) => {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'project-image-placeholder';
                    placeholder.textContent = '📷'; // kannski place holder mynd næst
                    e.target.parentNode.replaceChild(placeholder, e.target);
                  }}
                />
                
                <div className="project-overlay">
                  <h3 className="project-title">{repo.name}</h3>
                  <p className="project-description">
                    {repo.description || 'engin lýsing hefur verið skrifuð'}
                  </p>
                  <div className="project-footer">
                    <span className="project-tech">{getTechTag(repo)}</span>
                    <a
                      href={repo.html_url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Verkefni; 