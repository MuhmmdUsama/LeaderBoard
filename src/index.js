import './index.css';

const leaderForm = document.getElementById('form-score'),
  leaderName = document.getElementById('name'),
  leaderScore = document.getElementById('score'),
  refresh = document.getElementById('refresh');

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

const updateUi = async () => {
  const data = await receivedData();
  const listBody = document.getElementById('list-body');
  const fregment = document.createDocumentFragment();
  data.result.forEach((data) => {
    const li = document.createElement('li');
    li.className = 'score-list';

    const paraName = document.createElement('p');
    paraName.textContent = `Name: ${data.user}`;
    const paraScore = document.createElement('p');
    paraScore.textContent = `Score: ${data.score}`;

    li.appendChild(paraName);
    li.appendChild(paraScore);
    fregment.appendChild(li);
  });
  listBody.appendChild(fregment);
};

const receivedData = async () => {
  try {
    const response = await fetch(apiURL);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

const sendingData = () => {
  const leaderData = {
    user: leaderName.value,
    score: leaderScore.value,
  };
  sendLeaderScore(leaderData);
  leaderName.value = '';
  leaderScore.value = '';
};

leaderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sendingData();
});

refresh.addEventListener('click', () => {
  const listBody = document.getElementById('list-body');
  listBody.innerHTML = '';
  updateUi()
});

document.addEventListener('DOMContentLoaded', () => {
  updateUi();
});
