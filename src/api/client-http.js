const urls = {
  query: process.env.REACT_APP_QUERY,
  queryReleases: process.env.REACT_APP_QUERY_RELEASES,
  queryBrowCategories: process.env.REACT_APP_CATEGORIES,
  queryRecentlyPlayed: process.env.REACT_APP_RECENTLY_PLAYED,
  queryGenreSeeds: process.env.REACT_APP_SEEDS
}

const { query, queryReleases, queryBrowCategories, queryGenreSeeds } = urls

export default class Http {
  token = localStorage.getItem('access_token')
  requestOptions = {
    headers: {
      'Authorization': `Bearer ${this.token}`
    }
  }

  async httpGet(url, options = {}) {
    const request = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    })
    const response = await request.json()
    return response
  }

  async newReleases(countrie = '') {
    const validationCountrie = countrie !== '' ? `?country=${countrie}&` : '?'
    const response = await this.httpGet(
      `${query}${queryReleases}${validationCountrie}limit=5`
    )
    return response
  }

  async getGenreSeeds() {
    const response = await this.httpGet(`${query}${queryGenreSeeds}`)
    return response
  }

  async getProfile() {
    const response = await this.httpGet(`${query}me`)
    return response
  }

  async getRecentlyPlayed() {
    const response = await this.httpGet(`${query}${queryGenreSeeds}?limit=5`)
    return response
  }

  async getSearch(search, type = 'artist') {
    const response = await this.httpGet(
      `${query}search?q=${search}&type=${type}${
        type === 'track' ? '&limit=30' : ''
      }`
    )
    return response
  }

  async getBrowCategories() {
    const response = await this.httpGet(`${query}${queryBrowCategories}`)
    return response
  }

  async pagination(url) {
    const response = await this.httpGet(url)
    return response
  }
}
