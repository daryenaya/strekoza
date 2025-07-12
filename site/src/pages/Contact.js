import React from 'react';

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-card">
        <h3>{"{ электронная почта }"}</h3>
        <a href="mailto:daryenayakov@gmail.com" className="contact-link">
          @daryenayakov@gmail.com
        </a>
      </div>
      
      <div className="contact-card">
        <h3>{"{ телеграм-канал }"}</h3>
        <a href="https://t.me/strekoza_design" target="_blank" rel="noopener noreferrer" className="contact-link">
          strekoza design
        </a>
      </div>
      
      <div className="contact-card">
        <h3>{"{ инстаграм }"}</h3>
        <a href="https://instagram.com/strekoza_designer" target="_blank" rel="noopener noreferrer" className="contact-link">
          @strekoza_designer
        </a>
      </div>
    </div>
  );
}