import { NowRequest, NowResponse } from '@vercel/node'
import { getCsgoInventory } from '../src'

const userAlias = new Map<string, string>([
    ["sneybre", "76561198288930862"],
    ["sati", "76561198216893325"],
    ["snoozed", "76561198367916464"]
])

function getIdForAlias(alias: string): string | undefined {
    return userAlias.get(alias)
}

function checkIsAlias(id: string): boolean {
    return userAlias.has(id)
}

export default async (request: NowRequest, response: NowResponse) => {
    const { id = undefined } = request.query

    if (!id) {
        response.status(400).json({ error: 'Missing mandatory query parameter: id (Steam ID)' })
        return
    }

    let steamId

    if (Array.isArray(id)) {
        steamId = id[0]
    } else {
        steamId = id
    }

    if (checkIsAlias(steamId)) {
        steamId = getIdForAlias(steamId)
    }

    if (!steamId) {
        response.status(400).json({ error: 'Failed to resolve alias. Try again with proper Steam ID.' })
        return
    }

    const inventory = await getCsgoInventory(steamId)
    response.status(200).json(inventory)
} 