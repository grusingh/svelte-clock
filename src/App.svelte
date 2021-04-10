<script lang="ts">
  import Clock from './Clock.svelte';

  let showClock = true;
</script>

<main>
  <label>{ showClock ? 'Hide' : 'Show'} Clock
    <input type="checkbox" bind:checked={showClock}/>
  </label>

  {#if showClock }
    <Clock/>
  {/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>