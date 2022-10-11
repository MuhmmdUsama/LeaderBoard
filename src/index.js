import './index.css';

const leaderForm = document.getElementById('form-score'),
  leaderName = document.getElementById('name'),
  leaderScore = document.getElementById('score');

const sendingData = () => {
    const leaderData = {
        user: leaderName.value,
        score: leaderScore.value,
    };
    sendLeaderScore(leaderData);
    console.log(leaderData);
      leaderName.value = '';
      leaderScore.value = '';
};

leaderForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    sendingData()
});

// https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/leaderProj08ScorE00Mit/scores/
const apiURL =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/leaderProj08ScorE00Mit/scores/';

const sendLeaderScore = async (leaderData) => {
  await fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(leaderData),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

const receivedData = async () => {
  try {
    const response = await fetch(apiURL);
    if (response.status === 200) {
      const data = await response.json();
      updateUi(data);
    }
  } catch (e) {
    console.log(e);
  }
};
receivedData();
