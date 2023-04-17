<!-- Drawer.svelte -->

<script>
  export let items = [];
  export let searchText = "";
  
  const filteredItems = () => {
    return items.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
  }
</script>

<div class="drawer">
  <div class="search-box">
    <input type="text" bind:value={searchText} placeholder="Search items" />
  </div>
  <ul class="item-list">
    {#each filteredItems() as item}
      <li>{item.name}</li>
    {/each}
  </ul>
</div>

<style>
  .drawer {
    width: 300px;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: -300px;
    transition: left 0.3s ease-in-out;
  }
  
  .drawer.open {
    left: 0;
  }
  
  .search-box {
    padding: 10px;
  }
  
  .item-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .item-list li {
    padding: 10px;
    cursor: pointer;
  }
  
  .item-list li:hover {
    background-color: #f5f5f5;
  }
</style>
