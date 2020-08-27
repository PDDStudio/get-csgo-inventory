export interface PlayerInventoryResponse {
    totalItemCount: number
    items: CsgoItem[]
}

export interface CsgoItem {
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
    // no tags
    // no market buy country restriction
}