<script lang="ts">
	import { validTextSearch } from '../helpers/validTextSearch';
	import { gifShowing, textSearch } from '../stores/appStore';
</script>

{#if $gifShowing}
	<p>Clique enter para novamente pesquisar {$textSearch}</p>
{:else if validTextSearch($textSearch) && !$gifShowing}
	<p>Clique enter para pesquisar {$textSearch}</p>
{:else if !validTextSearch($textSearch) && $textSearch !== '' && !$gifShowing}
	<p>Por favor pesquise um gif com mais de 2 caracteres</p>
{:else}
	<p>Pesquise o gif para nos acharmos o melhor do universo para vc</p>
{/if}

<style>
	p {
		margin-top: 2rem;
		text-align: center;
		font-size: 1.2rem;
		line-height: 38px;
		min-height: 38px;
	}
</style>
