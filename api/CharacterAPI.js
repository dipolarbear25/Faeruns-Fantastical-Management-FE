import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// get all characters

const getCharacters = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/allCharacters`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// delete characters
const deleteCharacter = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/deleteCharacter/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// get single character
const getSingleCharacter = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/singleCharacter/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// create character
const createCharacter = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/createCharacter`, {
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

// update character
const updateCharacter = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/updateCharacter/${payload.id}`, {
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
  getCharacters,
  createCharacter,
  deleteCharacter,
  getSingleCharacter,
  updateCharacter,
};
