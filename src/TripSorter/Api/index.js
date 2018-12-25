// @flow
export default class Fetcher {
  static baseUrl: ?string = '/response.json'
  
  static get(params?: mixed) {
    return fetch(Fetcher.baseUrl)
            .then(res => res.json())
  }
}
  