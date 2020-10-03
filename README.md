# getCsgoInventory()

> A simple JavaScript module to query a Steam user's CSGO inventory.

## Story

When querying a Steam User's Inventory via Steam, I found the returned response was kinda messy and you always had to get information from different sources in the response model just to get all the Counter Strike: Global Offensive related information into one place.  
This module tackles this issue by doing the same requests against the official steam endpoints but also doing the mapping of the responses to a nice use-case adjusted response model that includes all available information about a CS:GO Player's Steam Inventory. 

## Installation

Add the dependency:

```sh
# when using yarn
yarn add get-csgo-inventory

# when using npm
npm i get-csgo-inventory
```

## API

The API of this module is simple.  
There's only one function which you can call:

```js
import { getCsgoInventory } from 'get-csgo-inventory'


const inventoryResponse = await getCsgoInventory("SOME_STEAM_ID")

```

## Response Model

The `getCsgoInventory()` function returns a `PlayerInventoryResponse` or `undefined` in case of an Error/Invalid Data.

### PlayerInventoryResponse

```js
interface PlayerInventoryResponse {
    totalItemCount: number
    items: CsgoItem[]
}
```

The `items` array contains the list of CS:GO Items from the User's inventory:

### CsgoItem

```js
interface CsgoItem {
    appId: number
    assetId: string
    classId: string
    instanceId: string
    amount: string
    currency: number
    backgroundColor: string
    iconUrl: string
    descriptions: string[]
    tradable: number
    name: string
    nameColor: string
    type: string
    marketName: string
    marketHashName: string
    commodity: number
    marketTradableRestriction: number
    marketable: number
}
```

The properties are named the same as the ones returned from the official endpoint, it's just using camel case instead of snake case.  
(TODO: Find the link to the official steam docs and link it here)

## License

This Project is Licensed under the [MIT License](./LICENSE).  
