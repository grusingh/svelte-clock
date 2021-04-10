<script lang="ts">
  import {onDestroy} from 'svelte';
  import {getTime} from "./utils/date";

  /**
   * Clock refresh duration in milliseconds.
   * Default is 1000ms.
   */
  export let intervalDuration = 1000;

  let currentTime = getTime();

  const handler = setInterval(() => {
    currentTime = getTime();
  }, intervalDuration);

  onDestroy(() => clearInterval(handler));
</script>

<div data-testid="clock">
  { currentTime }
</div>

<style>
    div {
        font-family: "Lucida Sans Typewriter";
        font-size: 2em;
        font-weight: bolder;
    }
</style>