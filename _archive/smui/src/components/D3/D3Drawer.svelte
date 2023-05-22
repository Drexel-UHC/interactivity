<script lang="ts">
  import Drawer, { AppContent, Content } from '@smui/drawer';
  import List, { Item, Text } from '@smui/list';

  // Import Item Components
  import Cat  from "../layout/svg/Cat.svelte";
  import Bee  from "../layout/svg/Bee.svelte";

  // Import D3 tabs
  import TabsetLine from "./line/TabsetLine.svelte";
  import TabsetBox from "./box/TabsetBox.svelte";
  import TabsetMap from "./map/TabsetMap.svelte";
  import TabsetDot from "./dot/TabsetDot.svelte";

  export let items = [];

  let clicked = items[0];

</script>

<div class="drawer-container">
  <Drawer>
    <Content>
      <List>
        {#each items as item}
          <Item href="javascript:void(0)" on:click={() => (clicked = item)}>
            <Text>{item}</Text>
          </Item>
        {/each}
      </List>
    </Content>
  </Drawer>

  <AppContent class="app-content">
    <main class="main-content">
  
      {#if clicked === "Line"}
        <TabsetLine />
      {:else if clicked === "Box"}
        <TabsetBox />
      {:else if clicked === "Map"}
        <TabsetMap />
      {:else if clicked === "Dot"}
        <TabsetDot />
      {:else}
        <p>MISSING SVG</p>
      {/if}
    </main>
  </AppContent>
</div>

<style>
  /* These classes are only needed because the
    drawer is in a container on the page. */
  .drawer-container {
    position: relative;
    display: flex;
    background-color: white;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    min-width: 1400px;
 

    border: 1px solid black;
    overflow: hidden;
    z-index: 0;
  }

  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }
</style>
