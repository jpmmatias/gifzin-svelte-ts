<script lang="ts">
	import Header from './components/Header.svelte';
	import Hint from './components/Hint.svelte';
	import Search from './components/Search.svelte'
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
console.log(randomNumber)
				const selectedGif = gifs[randomNumber]
				const currentGif = {src: selectedGif.images.original.mp4}

				allGifs = [...allGifs, currentGif];

console.log(allGifs)

				gifShowing = true
		} catch (error) {
			console.log(error)
		}
	}


</script>

<main>
	<Header reset={reset} gifShowing = {gifShowing} />
	<Search bind:value="{textSearch}" gifShowing = {gifShowing}/>
	<Hint textSearch="{textSearch}" gifShowing = {gifShowing}/>

	{#if gifShowing}
	<div class="videoContainer">
		{#each allGifs as gif}
			<video autoPlay loop src={gif.src}>
				<track kind="captions">
			</video>
		{/each}

	</div>
	{/if}
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
	.videoContainer {
		width: 100%;
	 	display: grid;
  	place-items: center;
		position: relative;
}

video{
	background-color: rgba(0, 0, 0, 0.085);
  display: block;
	position: absolute;
  width: 100%;
  max-width: 480px;
  max-height: 480px;
  box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.68);

  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  outline: 1px solid transparent;
	opacity: 1;
  transform: scale(1) rotate(0deg);
}

video:nth-of-type(2n) {
  transform: scale(1) rotate(5deg);
}

video:nth-of-type(3n) {
  transform: scale(1) rotate(-5deg);
}

video:nth-of-type(4n) {
  transform: scale(1) rotate(7deg);
}
</style>