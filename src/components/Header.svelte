<script lang="ts">
	import { gifShowing, reset } from '../stores/appStore';
</script>

{#if $gifShowing}
	<header>
		<button on:click={reset}>
			<img src="imgs/close-icon.svg" alt="Icone de fechar" />
		</button>
	</header>
{:else}
	<header>
		<h1 class="title">Gifzin</h1>
	</header>
{/if}

<style>
	header {
		margin-bottom: 1.4rem;
		line-height: 50px;
		display: grid;
		place-items: center;
	}
	h1 {
		margin: 0;
		font-size: 38px;
	}

	button {
		background: none;
		border: none;
	}
</style>
