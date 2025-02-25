
class ApiMethods {
  static apiRequest(method, url, body=null) {
    url = import.meta.env.VITE_API_ENDPOINT + url;
    const params = body
      ? {method, body: JSON.stringify(body)}
      : {method}

    return new Promise((resolve, reject) => {
      fetch(url, params)
        .then(res => res.json())
        .then(resolve)
        .catch(reject)
    })
  }

  static get(url) {
    return this.apiRequest('GET', url)
  }

  static post(url, data=undefined) {
    return this.apiRequest('POST', url, data)
  }

  static put(url, data=undefined) {
    return this.apiRequest('PUT', url, data)
  }

  static patch(url, data) {
    return this.apiRequest('PATCH', url, data)
  }

  static delete(url) {
    return this.apiRequest('DELETE', url)
  }
}

export default ApiMethods;