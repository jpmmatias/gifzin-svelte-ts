<script lang="ts">
  import {validTextSearch} from '../helpers/validTextSearch'

  export let gifShowing:boolean;
  export let textSearch:string;
</script>

{#if gifShowing}
  <p>Clique enter para novamente {textSearch}</p>
{:else if validTextSearch(textSearch) && !gifShowing}
  <p>Clique enter para pesquisar {textSearch}</p>
{:else if !validTextSearch(textSearch) && textSearch !=='' && !gifShowing}
  <p>Por favor pesquise um gif com mais de 2 caracteres</p>
{:else}
 <p>Pesquise o gif para nos acharmos o melhor do universo para vc </p>
 {textSearch}
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