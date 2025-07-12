import React from 'react';

export default function About() {
  return (
    <div className="about">
      <div className="profile-container">
        <div className="profile-image">
          <img 
            src={require('../assets/image/strekoza_2.png')} 
            alt="strekoza" 
          />
        </div>
        
        <div className="bio">
          <p>меня зовут <span className="highlight">ковалева дарья</span>, я графический и веб-дизайнер. живу и работаю в <span className="highlight">санкт-петербурге</span>.</p>
          <p>в своих работах я сосредоточена на минимализме и современных направлениях в дизайне. делаю так, как подсказывает сердце.</p>
        </div>
      </div>
    </div>
  );
}