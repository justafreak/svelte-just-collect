<script>
  import ListItem from "./ListItem.svelte";

  let list = [];
</script>

<div>
  {#each list as item}
    <ListItem {...item} />
  {/each}
</div>
