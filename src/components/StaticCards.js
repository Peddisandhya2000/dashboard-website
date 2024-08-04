import React from 'react';

const StaticCard = ({ title, count, growth, icon }) => {
  return (
    <div className="stats-card">
      <div className="icon">{icon}</div>
      <div className="info">
        <h4>{title}</h4>
        <p>{count}</p>
        <small>{growth}</small>
      </div>
    </div>
  );
}

export default StaticCard;
