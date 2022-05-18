import type { IGif } from '../@types/IGif';
import { writable } from 'svelte/store';
import { validTextSearch } from '../helpers/validTextSearch';
import { fetchGif } from '../services/fetchGif';

const gifShowing = writable(false);
let textSearch = writable('');
const allGifs = writable([] as IGif[]);

function reset() {
	gifShowing.set(false);
	textSearch.set('');
	allGifs.set([]);
}

function get__search() {
	let $search: string;
	textSearch.subscribe(($) => ($search = $))();
	return $search;
}

async function fetchGifs(event: KeyboardEvent) {
	const search = get__search();

	if (!validTextSearch(search) || event.key !== 'Enter') return;
	try {
		const currentGif = await fetchGif(search);

		allGifs.update((gifs) => [...gifs, currentGif]);
		gifShowing.set(true);
	} catch (error) {
		console.log(error);
	}
}
export { gifShowing, textSearch, allGifs, reset, fetchGifs };
