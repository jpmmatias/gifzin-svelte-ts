const giphyApiKey = GIPHY_API_KEY;

export async function fetchGif(textSearch: string) {
	try {
		const response = await fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${textSearch}&limit=50&offset=0&rating=PG-13&lang=pt`
		);
		const data = await response.json();

		const gifs = data.data;
		const randomNumber = Math.floor(Math.random() * gifs.length);
		const selectedGif = gifs[randomNumber];
		const currentGif = { src: selectedGif.images.original.mp4 };
		return currentGif;
	} catch (error) {
		console.log(error);
	}
}
