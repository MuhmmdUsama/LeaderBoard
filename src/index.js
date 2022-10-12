import './index.css';
import updateUi from './modules/userInterface.js';
import { sendLeaderScore } from './modules/requests.js';

const leaderForm = document.getElementById('form-score');
const leaderName = document.getElementById('name');
const leaderScore = document.getElementById('score');
const refresh = document.getElementById('refresh');

// #################### Sending User-Data To API ######
const sendingData = () => {
  const leaderData = {
    user: leaderName.value,
    score: leaderScore.value,
  };
  sendLeaderScore(leaderData);
  leaderName.value = '';
  leaderScore.value = '';
};

// #################### EventListeners ######
leaderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sendingData();
});

refresh.addEventListener('click', () => {
  const listBody = document.getElementById('list-body');
  listBody.innerHTML = '';
  updateUi();
});

document.addEventListener('DOMContentLoaded', () => {
  updateUi();
});
