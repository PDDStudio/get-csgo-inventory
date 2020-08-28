jest.unmock('axios')

import { getCsgoInventory } from '../src'

describe('get-csgo-inventory Test Suite', () => {
    test('Instance should exist', async (done) => {
        expect.assertions(2)
        const response = await getCsgoInventory('76561198336029776')
        expect(getCsgoInventory).toBeDefined()
        expect(response).toBeDefined()
        done()
    })
})