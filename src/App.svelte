<script lang="ts">
import {Header,Hint,Search, Gifs} from './components'
import { fetchGifs } from './stores/appStore';

</script>

<main>
	<Header />
	<Search />
	<Gifs />
	<Hint />
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