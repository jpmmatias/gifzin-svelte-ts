<script lang="ts">
	import {Header,Hint,Search, Gifs} from './components'
	import {validTextSearch} from './helpers/validTextSearch'
	import type { IGif } from './@types/IGif'

	let gifShowing = false;
	let textSearch = '';
	let allGifs:IGif[] = [] as IGif[]

	export function reset() {
		gifShowing = false;
		textSearch = '';
	 	allGifs= [] as IGif[]
	}

export async function fetchGifs(event:KeyboardEvent) {
		if (!validTextSearch(textSearch) || event.key !== 'Enter') return

		try {
			 const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${textSearch}&limit=50&offset=0&rating=PG-13&lang=pt`)
      	const data = await response.json()

				const gifs = data.data
        const randomNumber =  Math.floor(Math.random()*gifs.length)
				const selectedGif = gifs[randomNumber]
				const currentGif = {src: selectedGif.images.original.mp4}

				allGifs = [...allGifs, currentGif];
				gifShowing = true
		} catch (error) {
			console.log(error)
		}
	}


</script>

<main>
	<Header reset={reset} gifShowing = {gifShowing} />
	<Search bind:value="{textSearch}" gifShowing = {gifShowing}/>
	<Gifs allGifs={allGifs} gifShowing = {gifShowing}/>
	<Hint textSearch="{textSearch}" gifShowing = {gifShowing}/>
</main>

<svelte:window on:keypress={(event)=>fetchGifs(event)} />

<style>
	main{
		min-height: 100vh;
  	padding: 5vh 2rem;
  	display: flex;
  	flex-direction: column;
		justify-content: center;
	}
</style>