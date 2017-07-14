const fetch = require('./fetch')

module.exports = ({ token, functionApp }) =>
  // use kudu virtual file system API to get the proxy.json file
  fetch(`https://${functionApp}.scm.azurewebsites.net/api/vfs/site/wwwroot/proxies.json`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })