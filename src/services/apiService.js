import { API_BASE_URL } from '../misc/config'

const getResource = async (url, method, headers = {}, body = {}) => {
  const res = await fetch(`${API_BASE_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: method === 'GET' ? null : JSON.stringify(body),
  })

  return { ok: res.ok, result: await res.json() }
}

export class API {
  static async loginUser(body) {
    const res = await getResource('/auth/', 'POST', {}, body)
    return res
  }

  static async registerUser(body) {
    const res = await getResource('/api/user/', 'POST', {}, body)
    return res
  }

  static async getUsers() {
    const res = await getResource('/api/user/', 'GET')
    return res.result
  }
}
