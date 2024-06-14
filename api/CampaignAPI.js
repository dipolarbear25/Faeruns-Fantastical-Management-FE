import { clientCredentials } from '../utils/client';
// API CALLS FOR ART

const endpoint = clientCredentials.databaseURL;

// get all camapaigns
const getCampaign = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/allCampaigns`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// TODO: DELETE ART
const deleteCampaign = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/deleteCampaign/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// TODO: GET SINGLE ART
const getSingleCampaign = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/singleCampaign/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: CREATE ART
const createCampaign = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/createCampaign`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: UPDATE ART
const updateCampaign = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/updateCampaign/${payload.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.text())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getCampaign,
  createCampaign,
  deleteCampaign,
  getSingleCampaign,
  updateCampaign,
};
