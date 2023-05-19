<script>
  import data from './scrollies.json'
  import Item from '../../lib/home/Item.svelte';
  import Chip from '../../lib/home/Chip.svelte'

  // Tech
  let techNames = [...new Set(data.flatMap(item => item.tech))];
  let selectTechIndex = 999;
  let selectedTechName  = techNames[selectTechIndex];
  $: selectedTechName = techNames[selectTechIndex]
  
  // Text Search
  let search = '';

  // Visisble scrollies
  $: visibleScrollies = data.filter(item => {
    if (selectTechIndex === 999&search==='') return true;
    else if (selectTechIndex === 999&search!=='') return item.name.toLowerCase().includes(search.toLowerCase());
    else if (selectTechIndex !== 999&search==='') return item.tech.includes(selectedTechName);
    else if (selectTechIndex !== 999&search!=='') return item.name.toLowerCase().includes(search.toLowerCase() )&item.tech.includes(selectedTechName);
    else
    return item.tech.includes(selectedTechName);
  });
 
  
	function handleRemoveFilter() {
		selectTechIndex = 999;
	}

</script>
 

 

<div class="container">

  <div class="content">

<div style="padding-bottom: 20px;">
       
      <input class="input" bind:value={search}  title="Input (text)" type="text" placeholder="search ... " />
    <Chip label={selectedTechName} on:click={handleRemoveFilter} />
</div>
    {#each visibleScrollies as item (item.id)}
      <Item {...item}/>
    {/each}
  </div>

  <div class="sidebar">
    <div class="filter-group">
      <h3>Categories</h3>
      {#each techNames as tech, i}
        <label>
          <input type="radio" bind:group={selectTechIndex} value = {i} />
          {tech}
        </label>
      {/each}
    </div>
  </div>

</div>


<style>
  .container {
    display: flex;
    padding-left: 10%;
    padding-right: 10%;
  }
  .sidebar {
    width: 200px;
   
    right: 0;
    height: 100%;
   
    padding: 10px;
    box-sizing: border-box;
  }
  .content {
    width: calc(100% - 200px);
    padding: 10px;
  }
  .filter-group {
    display: flex;
    flex-direction: column;
  }
</style>
