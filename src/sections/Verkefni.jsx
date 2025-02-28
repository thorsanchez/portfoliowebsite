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
        
        //lagar 2x af sama repo
        containerRef.current.innerHTML = '';
        
        for(var i=0; i < result.length; i++){
          // bæta bara við stjörnu repos
          if(result[i].stargazers_count > 0){
            var proj = `<div class="projects-container">
              <div class="header">
              <img 
              src=${`https://raw.githubusercontent.com/${username}/${result[i].name}/${result[i].default_branch}/Thumbnail/thumbnail.png`}
              alt="thumbnail" 
              class="src">
              </div>
              <div class="title"><strong>${result[i].name}</strong></div>
              <div class="description">${result[i].description || 'No description available'}</div>
              <div class="links">
                <a href="https://github.com/${username}/${result[i].name}" target="_blank">Github Repo</a>
              </div>
            </div>`;
            containerRef.current.insertAdjacentHTML('beforeend', proj);
            reposAdded++;
          }
        }
        
        console.log("repos bætt við:", reposAdded);
        
        if (reposAdded === 0) {
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