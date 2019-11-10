<script>
  import Overview from "./views/pages/Overview.svelte";

  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>{name}</h1>
<Overview />
