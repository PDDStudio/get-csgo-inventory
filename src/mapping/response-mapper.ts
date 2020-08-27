import { CsgoInventoryResponse, PlayerInventoryResponse, CsgoItem, AssetsEntry, DescriptionEntry, DescriptionLine } from "../data"

export class ResponseMapper {

    public mapExternalResponseModel(response: CsgoInventoryResponse): PlayerInventoryResponse {
        const { assets, descriptions, total_inventory_count } = response
        return {
            totalItemCount: total_inventory_count,
            items: this.mergeAssetsAndDescription(assets, descriptions)
        }
    }

    private mergeAssetsAndDescription(assets: AssetsEntry[], descriptions: DescriptionEntry[]): CsgoItem[] {
        const mappings = new Map<AssetsEntry, DescriptionEntry>()
        assets.forEach(entry => {
            const description = this.getDescriptionEntry(entry.classid, descriptions)
            if (description) {
                mappings.set(entry, description)
            }
        })

        let csgoItems: CsgoItem[] = []
        mappings.forEach((value, key) => {
            const item = this.mapToCsgoItem(key, value)
            if (item) {
                csgoItems.push(item)
            }
        })

        return csgoItems
    }

    private mapToCsgoItem(asset: AssetsEntry, description: DescriptionEntry): CsgoItem {
        return {
            appId: asset.appid,
            assetId: asset.assetid,
            classId: asset.classid,
            instanceId: asset.instanceid,
            amount: asset.amount,
            currency: description.currency,
            backgroundColor: description.background_color,
            iconUrl: description.icon_url,
            descriptions: this.extractDescriptionTexts(description.descriptions),
            tradable: description.tradable,
            name: description.name,
            nameColor: description.name_color,
            type: description.type,
            marketName: description.market_name,
            marketHashName: description.market_hash_name,
            commodity: description.commodity,
            marketTradableRestriction: description.market_tradable_restriction,
            marketable: description.marketable
        }
    }

    private extractDescriptionTexts(descriptionLines: DescriptionLine[]): string[] {
        return descriptionLines.map(entry => entry.value)
    }

    private getDescriptionEntry(id: string, descriptions: DescriptionEntry[]): DescriptionEntry | undefined {
        return descriptions.find(item => item.classid === id)
    }
}