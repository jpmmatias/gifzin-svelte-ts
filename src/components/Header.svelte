<script lang="ts">
  export let gifShowing:boolean;
  export let reset:()=>void;
</script>

{#if gifShowing}
<header>
  <button on:click={reset}>
    Close Button
  </button>
</header>
{:else}
<header>
  <h1 class="title">Gifzin</h1>
</header>
{/if}

<style>
  header {
  line-height: 50px;
   display: grid;
  place-items: center;
  }
  h1{
    margin: 0;
  font-size: 24px;
  }
</style>
