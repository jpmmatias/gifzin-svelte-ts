import type { IGif } from '../@types/IGif';
import { validTextSearch } from '../helpers/validTextSearch';

interface IState {
	gifShowing: boolean;
	allGifs: IGif[];
	currentGif: IGif;
	textSearch: string;
}

export async function fetchGifs(
	event: KeyboardEvent,
	{ allGifs, currentGif, gifShowing, textSearch }: IState
) {
	if (!validTextSearch(textSearch) || event.key !== 'Enter') return;

	if (gifShowing) {
		const randomNumber = Math.floor(Math.random() * allGifs.length);
		currentGif = allGifs[randomNumber];
		return;
	}

	try {
		const response = await fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${textSearch}&limit=50&offset=0&rating=PG-13&lang=pt`
		);
		const data = await response.json();

		allGifs = data.data.map((gif) => ({
			id: gif.id,
			src: gif.images.original.mp4,
		}));

		const randomNumber = Math.floor(Math.random() * allGifs.length);

		currentGif = allGifs[randomNumber];

		gifShowing = true;
	} catch (error) {
		console.log(error);
	}
}
