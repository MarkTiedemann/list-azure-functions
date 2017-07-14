const getToken = require('../lib/get-token')
const getSubscriptions = require('../lib/get-subscriptions')
const getResourceGroups = require('../lib/get-resource-groups')
const getFunctionApps = require('../lib/get-function-apps')

const email = process.env.AZURE_EMAIL
const password = process.env.AZURE_PASSWORD

getToken({ email, password }).then(token => {
  getSubscriptions({ token }).then(subscriptions => {
    subscriptions.map(s => s.subscriptionId).forEach(subscription => {
      getResourceGroups({ token, subscription }).then(resourceGroups => {
        resourceGroups.map(r => r.name).forEach(resourceGroup => {
          getFunctionApps({ token, subscription, resourceGroup }).then(functionApps => {
            functionApps.map(f => f.name).forEach(functionApp => {
              log({ subscription, resourceGroup, functionApp })
            })
          })
        })
      })
    })
  })
})

function log ({ subscription, resourceGroup, functionApp }) {
  console.log('\n' + [
   `Subscription:   ${subscription}`,
   `Resource Group: ${resourceGroup}`,
   `Function App:   ${functionApp}`
  ].join('\n'))
}