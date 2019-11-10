<script>
  import List from "../components/List.svelte";
  import { lists } from "../../stores/lists";

  const onCreateList = () => console.log("hahaha");
</script>

<div>
  <button on:click={onCreateList}>Create List</button>
</div>
<div>
  {#if lists.length > 0}
    {#each lists as list}
      <List {list} />
    {/each}
  {:else}Start your collection here!{/if}
</div>
