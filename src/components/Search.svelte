<script lang="ts">
   export let gifShowing:boolean;
   export let value:string;
</script>

{#if !gifShowing}
   <input bind:value placeholder='Nome do Gif' type="text">
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