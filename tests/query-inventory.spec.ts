jest.unmock('axios')

import { getCsgoInventory } from '../src'

describe('get-csgo-inventory Test Suite', () => {
    test('Instance should exist', async (done) => {
        expect.assertions(2)
        const response = await getCsgoInventory('76561198288930862')
        expect(getCsgoInventory).toBeDefined()
        expect(response).toBeDefined()
        response.items.forEach(item => console.log(item.name))
        done()
    })
})