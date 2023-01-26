const axios = require('axios');

let getReposByUsername = (username, cb) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfp`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.request(options)
  .then((response) => {
      cb(null, response);
  }).catch((err) => {
    throw('error:', err);
    cb(err);
  });
}

module.exports.getReposByUsername = getReposByUsername;