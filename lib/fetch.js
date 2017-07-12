const fetch = require('node-fetch')

module.exports = (url, options) =>
  fetch(url, options)
  .then(res => res.status !== 200
    ? Promise.reject(new Error(res.status))
    : res.json()
  )