export default class Http {
	query = 'https://api.spotify.com/v1/'
	queryReleases = 'browse/new-releases?limit=5'
	queryRecentlyPlayed = 'me/player/recently-played'
	queryUser = 'me'
	queryGenreSeeds = 'recommendations/available-genre-seeds'
	token = localStorage.getItem('access_token')
	tokenType = localStorage.getItem('token_type')
	headersGet = {
		'Authorization': `${this.tokenType} ${this.token}`
	}

	async newReleases() {
		const requestOptions = {
			headers: this.headersGet
		}
		const request = await fetch(`${this.query}${this.queryReleases}`, requestOptions)
		const response = await request.json()
		return response
	}

	async GenreSeeds() {
		const requestOptions = {
			headers: this.headersGet
		}
		const request = await fetch(`${this.query}${this.queryGenreSeeds}`, requestOptions)
		const response = await request.json()
		return response
	}

	async getProfile() {
		const requestOptions = {
			headers: this.headersGet
		}
		const request = await fetch(`${this.query}${this.queryUser}`, requestOptions)
		const response = await request.json()
		return response
	}

	async getRecentlyPlayed() {
		const requestOptions = {
			headers: this.headersGet
		}
		const request = await fetch(
			'https://api.spotify.com/v1/me/player/recently-played?limit=5',
			requestOptions
		)
		const response = await request.json()

		return response
	}

	async getSearch(search) {
		const requestOptions = {
			headers: this.headersGet
		}
		const request = await fetch(
			`https://api.spotify.com/v1/search?q=${search}&type=artist`,
			requestOptions
		)
		const response = await request.json()
		return response
	}
}
