/*tekið frá https://www.youtube.com/watch?v=xMK7txZuT2E*/
import React, { useEffect, useRef } from 'react';
import './Sections.css'; 

function Verkefni() {
  const containerRef = useRef(null);

  useEffect(() => {
    const username = 'thorsanchez';
    
    if (!containerRef.current) {
      console.error("Container ref ekki til");
      return;
    }
    
    console.log("Fetcha git repo fyrir git/", username);
    
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        if(response.ok){
          return response.json();
        } else {
          throw new Error(`Git api error: ${response.statusText}`);
        }
      })
      .then(result => {
        console.log("Repos fetch:", result);
        let reposAdded = 0;
        
        //þetta er fyrir verkefni card röðun
        // Filter starred repos first
        const starredRepos = result.filter(repo => repo.stargazers_count > 0);

        // flokka eftir created_at date
        const sortedRepos = starredRepos.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });

        //lagar 2x af sama repo
        containerRef.current.innerHTML = '';

        sortedRepos.forEach(repo => {
          var proj = `<div class="projects-container">
            <div class="header">
            <img 
            src=${`https://raw.githubusercontent.com/${username}/${repo.name}/${repo.default_branch}/Thumbnail/thumbnail.png`}
            alt="thumbnail" 
            class="src">
            </div>
            <div class="title"><strong>${repo.name}</strong></div>
            <div class="description">${repo.description || 'No description available'}</div>
            <div class="links">
              <a href="https://github.com/${username}/${repo.name}" target="_blank">Github Repo</a>
            </div>
          </div>`;
          containerRef.current.insertAdjacentHTML('beforeend', proj);
        });

        console.log("repos bætt við:", sortedRepos.length);

        if (sortedRepos.length === 0) {
          containerRef.current.innerHTML = '<p>0 starred repo fundust.</p>';
        }
      })
      .catch(err => {
        console.error("Error fetching repos:", err);
        if (containerRef.current) {
          containerRef.current.innerHTML = `<p>Error loading repositories: ${err.message}</p>`;
        }
      });
  }, []);

  return (
    <div className="section-container">
      <div className="content-wrapper">
        <h2>Verkefni</h2>
        <div className="container" ref={containerRef}>
          <p>Fleiri verkefni væntanleg...</p>
        </div>
      </div>
    </div>
  );
}

export default Verkefni;