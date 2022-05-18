<script lang="ts">
	import type { IGif } from './../@types/IGif';

  export let allGifs:IGif[];
  export let gifShowing:boolean;
</script>


{#if gifShowing}
  <div class="videoContainer">
	{#each allGifs as gif}
		<!-- svelte-ignore a11y-media-has-caption -->
      <video autoPlay loop src={gif.src}></video>
	{/each}
  </div>
{/if}

<style>
	.videoContainer {
		flex: .7;
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