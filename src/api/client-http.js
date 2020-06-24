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

	async newReleases(countrie = '') {
		const validationCountrie = countrie !== '' ? `?country=${countrie}&` : '?'
		const request = await fetch(
			`${this.query}${this.queryReleases}${validationCountrie}limit=5`,
			this.requestOptions
		)
		const response = await request.json()
		return response
	}

	async getGenreSeeds() {
		const request = await fetch(
			`${this.query}${this.queryGenreSeeds}`,
			this.requestOptions
		)
		const response = await request.json()
		return response
	}

	async getProfile() {
		const request = await fetch(`${this.query}me`, this.requestOptions)
		const response = await request.json()
		return response
	}

	async getRecentlyPlayed() {
		const request = await fetch(
			'https://api.spotify.com/v1/me/player/recently-played?limit=5',
			this.requestOptions
		)
		const response = await request.json()
		return response
	}

	async getSearch(search, type = 'artist') {
		const request = await fetch(
			`https://api.spotify.com/v1/search?q=${search}&type=${type}${
				type === 'track' ? '&limit=30' : ''
			}`,
			this.requestOptions
		)
		const response = await request.json()
		return response
	}

	async getBrowCategories() {
		const request = await fetch(`${this.query}${this.queryBrowCategories}`)
		const response = await request.json()
		return response
	}

	async pagination(url) {
		const request = await fetch(url, this.requestOptions)
		const response = await request.json()
		return response
	}
}
