# list-azure-functions

**Example of how to list all of your Azure Functions programmatically.**

**WARNING:** The code is making undocumented REST calls so use it at your own risk.

## Quickstart

```bat
:: clone repo
λ git clone https://github.com/marktiedemann/list-azure-functions

:: cd into repo
λ cd list-azure-functions

:: install deps
λ npm install

:: set env vars
λ set AZURE_EMAIL=you@example.com
λ set AZURE_PASSWORD=superSecret

:: run example
λ node example

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

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).