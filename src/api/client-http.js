export default class Http {
	queryReleases = 'https://api.spotify.com/v1/browse/new-releases?limit=5'
	queryToken = 'https://accounts.spotify.com/api/token'
	queryRecentlyPlayed = 'https://api.spotify.com/v1/me/player/recently-played'
	queryGenreSeeds = 'https://api.spotify.com/v1/recommendations/available-genre-seeds'
	token = localStorage.getItem('access_token')
	tokenType = localStorage.getItem('token_type')
	headersGet = {
		'Authorization': `${this.tokenType} ${this.token}`
	}

	async fetchToken() {
		const body = new URLSearchParams({
			grant_type: 'client_credentials',
			client_id: '8dc4079d89f04217b4cf7e3c67bae7d4',
			client_secret: 'b77f4340300f4b32bf972ae838827c72'
		})
		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
		const requestOptions = {
			method: 'POST',
			headers,
			body
		}
		const request = await fetch(this.queryToken, requestOptions)
		const response = await request.json()
		return response
	}

	async newReleases() {
		const requestOptions = {
			headers: this.headersGet
		}
		const request = await fetch(this.queryReleases, requestOptions)
		const response = await request.json()
		return response
	}

	async RecentlyPlayed() {
		const requestOptions = {
			headers: this.headersGet
		}
		const request = await fetch(this.queryRecentlyPlayed, requestOptions)
		const response = await request.json()
		return response
	}

	async GenreSeeds() {
		const requestOptions = {
			headers: this.headersGet
		}
		const request = await fetch(this.queryGenreSeeds, requestOptions)
		const response = await request.json()
		return response
	}
}
