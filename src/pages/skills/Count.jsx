
import React, { useState, useEffect } from 'react';

const Count = ({ skill, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = skill.percentage;
      if (start === end) return;

      const duration = 1800; 
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, skill.percentage]);

  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
      </div>
      <div className="progress-bar-container-modern">
        <div 
          className="progress-level-modern"
          style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
        >
          <span className="skill-percentage-moving">{count}%</span>
        </div>
      </div>
    </div>
  );
};

export default Count;