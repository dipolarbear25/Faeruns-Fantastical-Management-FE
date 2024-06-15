import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// get all classes
const getClass = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/allClasses`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// get single character
const getSingleClass = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/singleClass/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getClass,
  getSingleClass,
};
