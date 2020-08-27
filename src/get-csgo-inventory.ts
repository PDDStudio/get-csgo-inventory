import axios from 'axios'
import {ResponseMapper} from './mapping/response-mapper'
import { PlayerInventoryResponse, CsgoInventoryResponse } from './data'

const _httpClient = axios.create({
    baseURL: 'https://steamcommunity.com/',
    headers: {
        Accept: 'application/json'
    }
})

const _responseMapper = new ResponseMapper()

const appId = 730
const contextId = 2

export async function getCsgoInventory(steamId: string): Promise<PlayerInventoryResponse> {
    const response = await _httpClient.get<CsgoInventoryResponse>(`inventory/${steamId}/${appId}/${contextId}`)
    return _responseMapper.mapExternalResponseModel(response.data)
}