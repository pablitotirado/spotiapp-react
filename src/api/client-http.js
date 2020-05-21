export class HttpMethods {
	queryToken = 'https://accounts.spotify.com/api/token'
	body = new URLSearchParams({
		grant_type: 'client_credentials',
		client_id: '8dc4079d89f04217b4cf7e3c67bae7d4',
		client_secret: 'b77f4340300f4b32bf972ae838827c72'
	})
	headers = {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
	requestOptions = {
		method: 'POST',
		headers: this.headers,
		body: this.body
	}
	async fetchToken() {
		const request = await fetch(this.queryToken, this.requestOptions)
		const response = await request.json()
		return response
	}
}
