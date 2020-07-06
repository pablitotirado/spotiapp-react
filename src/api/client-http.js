export default class Http {
	query = 'https://api.spotify.com/v1/'
	queryReleases = 'browse/new-releases'
	queryBrowCategories = 'browse/categories'
	queryRecentlyPlayed = 'me/player/recently-played'
	queryGenreSeeds = 'recommendations/available-genre-seeds'
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
			`${this.query}${this.queryReleases}${validationCountrie}limit=5`
		)
		return response
	}

	async getGenreSeeds() {
		const response = await this.httpGet(`${this.query}${this.queryGenreSeeds}`)
		return response
	}

	async getProfile() {
		const response = await this.httpGet(`${this.query}me`)
		return response
	}

	async getRecentlyPlayed() {
		const response = await this.httpGet(
			'https://api.spotify.com/v1/me/player/recently-played?limit=5'
		)
		return response
	}

	async getSearch(search, type = 'artist') {
		const response = await this.httpGet(
			`https://api.spotify.com/v1/search?q=${search}&type=${type}${
				type === 'track' ? '&limit=30' : ''
			}`
		)
		return response
	}

	async getBrowCategories() {
		const response = await this.httpGet(
			`${this.query}${this.queryBrowCategories}`
		)
		return response
	}

	async pagination(url) {
		const response = await this.httpGet(url)
		return response
	}
}
