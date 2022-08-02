const API_KEY = '0LstB7RQT5O32IvVwfGpvZ0kW2Eius1r'

const getGifs = ({keyword = 'Marvel'} = {}) => {
	const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`
	return (
		fetch(URL)
		.then(res => res.json())
		.then(response => {
			const {data} = response;
			const gifs = data.map(unGif => unGif.images.downsized_medium.url)
			return gifs
		})
	)
}
	
export default getGifs;