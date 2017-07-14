const fetch = require('./fetch')

const apiVersion = '2016-08-01'

module.exports = ({ token, subscription, resourceGroup }) =>
  fetch(
    'https://management.azure.com:443' +
      '/subscriptions/' + subscription +
      '/resourceGroups/' + resourceGroup +
      '/providers/Microsoft.Web/sites/' +
      '?api-version=' + apiVersion, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(body => body.value.filter(
    // kind may be 'functionApp,botApp', 'functionApp' or 'functionapp'
    app => app.kind && app.kind.toLowerCase() === 'functionapp'
  ))
