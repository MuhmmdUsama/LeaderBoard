import { receivedData } from './requests.js';

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

export default updateUi;
