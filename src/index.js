import './index.css';

const form = document.getElementById('form-score'),
  leaderName = document.getElementById('name'),
  leaderScore = document.getElementById('form-score');

const sendingData = (e) => {
  e.preventDefault();
  const leaderData = {
    user: leaderName.value,
    score: leaderScore.value,
  };
  sendLeaderScore(leaderData)
};

form.addEventListener('submit', sendingData);

// https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/leaderProj08ScorE00Mit/scores/

const sendLeaderScore = (leaderData) => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/leaderProj08ScorE00Mit/scores/',
    {
      method: 'POST',
      body: JSON.stringify(leaderData),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }
  );
};



