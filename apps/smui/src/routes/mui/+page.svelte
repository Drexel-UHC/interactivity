<script>
  import D3Drawer from "../../components/D3/D3Drawer.svelte";
 
</script>
<div class="main-box">
<D3Drawer items={['Line','Box','Map',]} /> 
</div>

<style>
  .main-box {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1500px;
    /* margin: 0 auto; */
  }
</style>
 