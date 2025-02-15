import React from 'react';
import Leaderboard from './leaderboard';

function LeaderMain() {
  const categories = [
    'Web Development',
    'Data Science',
    'Mobile App Development',
    'Cybersecurity',
    'Artificial Intelligence',
    'ML',
    'DevOps',
    'Cloud Computing',
    'Blockchain',
    'Game Development',
  ];

  return (
    <div className="space-y-6 p-4">
      {categories.map((category) => (
        <Leaderboard key={category} category={category} />
      ))}
    </div>
  );
}

export default LeaderMain;
