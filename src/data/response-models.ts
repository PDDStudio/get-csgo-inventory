
export interface CsgoInventoryResponse {
    assets: AssetsEntry[]
    descriptions: DescriptionEntry[]
    total_inventory_count: number
    success: number
    rwgrsn: number
}

export interface AssetsEntry {
    appid: number
    contextid: string
    assetid: string
    classid: string
    instanceid: string
    amount: string
}

export interface DescriptionEntry {
    appid: number
    classid: string
    instanceid: string
    currency: number
    background_color: string
    icon_url: string
    descriptions: DescriptionLine[]
    tradable: number
    name: string
    name_color: string
    type: string
    market_name: string
    market_hash_name: string
    commodity: number
    market_tradable_restriction: number
    marketable: number
    tags: TagsEntry[]
    market_buy_country_restriction: string
}

export interface DescriptionLine {
    type: string
    value: string
    color?: string
}

export interface TagsEntry {
    category: string
    internal_name: string
    localized_category_name: string
    localized_tag_name: string
    color?: string
}