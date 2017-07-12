const fetch = require('./fetch')

const apiVersion = '2017-05-10'

module.exports = ({ token, subscription }) =>
  fetch(
    'https://management.azure.com:443' +
      '/subscriptions/' + subscription +
      '/resourcegroups' +
      '?api-version=' + apiVersion, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(body => body.value)