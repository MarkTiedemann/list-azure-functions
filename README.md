# list-azure-functions

**Example of how to list all of your Azure Functions programmatically.**

**WARNING:** The code is making undocumented REST calls so use it at your own risk.

## Quickstart

**Setup:**

```bat
:: clone the repository
λ git clone https://github.com/marktiedemann/list-azure-functions
λ cd list-azure-functions

:: install the dependencies
λ npm install
λ cd examples

:: set required env variables
λ set AZURE_EMAIL=you@example.com
λ set AZURE_PASSWORD=superSecret
```

**List functions:**

```
λ node list-functions

Subscription:   {subscription1}
Resource Group: {group1}
Function App:   {functionApp1}
Function Slot:  {functionSlot1}
Function:       {function1}

Subscription:   {subscription2}
Resource Group: {group2}
Function App:   {functionApp2}
Function Slot:  {functionSlot2}
Function:       {function2}
```

**List function apps:**

```
λ node list-function-apps

Subscription:   {subscription1}
Resource Group: {group1}
Function App:   {functionApp1}

Subscription:   {subscription2}
Resource Group: {group2}
Function App:   {functionApp2}
```

**List function slots:**

```
λ node list-function-slots

Subscription:   {subscription1}
Resource Group: {group1}
Function App:   {functionApp1}
Function Slot:  {functionSlot1}

Subscription:   {subscription2}
Resource Group: {group2}
Function App:   {functionApp2}
Function Slot:  {functionSlot2}
```

**List function proxies:**

```
λ node list-function-proxies

Subscription:   {subscription1}
Resource Group: {group1}
Function App:   {functionApp1}
Function Proxy:  {functionProxy1}

Subscription:   {subscription2}
Resource Group: {group2}
Function App:   {functionApp2}
Function Proxy: {functionProxy2}
```

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).