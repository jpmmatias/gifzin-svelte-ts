<script lang="ts">
	import { gifShowing, textSearch } from '../stores/appStore';
</script>

{#if !$gifShowing}
	<input bind:value={$textSearch} placeholder="Nome do Gif" type="text" />
{/if}

<style>
	input {
		background: none;
		font-size: 72px;
		width: calc(100vw - 4rem);
		border: none;
		outline: none;
		text-align: center;
		padding: 0;
	}
	input::placeholder {
		color: #323232;
	}
</style>
