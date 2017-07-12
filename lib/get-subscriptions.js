const fetch = require('./fetch')

const apiVersion = '2016-06-01'

module.exports = ({ token }) =>
  fetch(
    'https://management.azure.com:443' +
      '/subscriptions' +
      '?api-version=' + apiVersion, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(body => body.value)