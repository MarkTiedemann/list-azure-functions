const fetch = require('./fetch')

// See: https://github.com/Azure/azure-powershell/issues/2494
// https://www.sepago.com/blog/2016/08/09/create-a-bearer-access-token-for-Azure-REST-silent-user-password

const url = 'https://login.microsoftonline.com/Common/oauth2/token'
const powershellId = '1950a258-227b-4e31-a9cf-717495945fc2'

module.exports = ({ email, password }) =>
  fetch(url, {
    method: 'POST',
    body: prepareBody(email, password)
  })
  .then(body => body.access_token)

function prepareBody (email, password) {
  return buildForm({
    resource: 'https://management.core.windows.net/',
    client_id: powershellId,
    grant_type: 'password',
    username: email,
    scope: 'openid',
    password: password
  })
}

function buildForm (obj) {
  return Object.entries(obj)
    .map(([key, val]) => key + '=' + val)
    .join('&')
}