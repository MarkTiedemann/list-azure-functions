const getToken = require('./lib/get-token')
const getSubscriptions = require('./lib/get-subscriptions')
const getResourceGroups = require('./lib/get-resource-groups')
const getFunctionApps = require('./lib/get-function-apps')
const getFunctions = require('./lib/get-functions')

const email = process.env.AZURE_EMAIL
const password = process.env.AZURE_PASSWORD

getToken({ email, password }).then(token => {
  getSubscriptions({ token }).then(subscriptions => {
    subscriptions.map(s => s.subscriptionId).forEach(subscription => {
      getResourceGroups({ token, subscription }).then(resourceGroups => {
        resourceGroups.map(r => r.name).forEach(resourceGroup => {
          getFunctionApps({ token, subscription, resourceGroup }).then(functionApps => {
            functionApps.map(f => f.name).forEach(functionApp => {
              getFunctions({ token, subscription, resourceGroup, functionApp }).then(functions => {
                functions.map(f => f.properties.name).forEach(funct1on => {
                  log({ subscription, resourceGroup, functionApp, funct1on })
                })
              })
            })
          })
        })
      })
    })
  })
})

function log ({ subscription, resourceGroup, functionApp, funct1on }) {
  console.log('\n' + [
   `Subscription:   ${subscription}`,
   `Resource Group: ${resourceGroup}`,
   `Function App:   ${functionApp}`,
   `Function:       ${funct1on}`
  ].join('\n'))
}