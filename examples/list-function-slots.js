const getToken = require('../lib/get-token')
const getSubscriptions = require('../lib/get-subscriptions')
const getResourceGroups = require('../lib/get-resource-groups')
const getFunctionApps = require('../lib/get-function-apps')
const getFunctionSlots = require('../lib/get-function-slots')

const email = process.env.AZURE_EMAIL
const password = process.env.AZURE_PASSWORD

getToken({ email, password }).then(token => {
  getSubscriptions({ token }).then(subscriptions => {
    subscriptions.map(s => s.subscriptionId).forEach(subscription => {
      getResourceGroups({ token, subscription }).then(resourceGroups => {
        resourceGroups.map(r => r.name).forEach(resourceGroup => {
          getFunctionApps({ token, subscription, resourceGroup }).then(functionApps => {
            functionApps.map(f => f.name).forEach(functionApp => {
              // log default slots
              log({ subscription, resourceGroup, functionApp, functionSlot: 'default' })
              getFunctionSlots({ token, subscription, resourceGroup, functionApp }).then(functionSlots => {
                // the name of the slot is '{app}/{slot}'
                functionSlots.map(f => f.name.split('/').pop()).forEach(functionSlot => {
                  log({ subscription, resourceGroup, functionApp, functionSlot })
                })
              })
            })
          })
        })
      })
    })
  })
})

function log ({ subscription, resourceGroup, functionApp, functionSlot }) {
  console.log('\n' + [
   `Subscription:   ${subscription}`,
   `Resource Group: ${resourceGroup}`,
   `Function App:   ${functionApp}`,
   `Function Slot:  ${functionSlot}`
  ].join('\n'))
}