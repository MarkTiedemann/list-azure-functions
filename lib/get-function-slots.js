const fetch = require('./fetch')

const apiVersion = '2016-08-01'

module.exports = ({ token, subscription, resourceGroup, functionApp }) =>
  fetch(
    'https://management.azure.com:443' +
      '/subscriptions/' + subscription +
      '/resourceGroups/' + resourceGroup + 
      '/providers/Microsoft.Web/sites/' + functionApp +
      '/slots' +
      '?api-version=' + apiVersion, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(body => body.value)