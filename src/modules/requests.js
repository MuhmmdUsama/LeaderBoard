const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/leaderProj08ScorE00Mit/scores/';

// #################### POST User-Data to API ######
export const sendLeaderScore = async (leaderData) => {
  await fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(leaderData),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

// #################### Fetch User-Data from API ######
export const receivedData = async () => { // eslint-disable-line
  try {
    const response = await fetch(apiURL);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  } catch (e) {
    return e;
  }
};
