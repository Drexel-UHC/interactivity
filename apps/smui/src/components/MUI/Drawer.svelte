<script lang="ts">
  import Drawer, { AppContent, Content } from '@smui/drawer';
  import List, { Item, Text } from '@smui/list';

  export let items = [];

  let clicked = 'nothing yet';
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
      App content.
      <br />
      <pre class="status">Clicked: {clicked}</pre>
    </main>
  </AppContent>
</div>

<style>
  /* These classes are only needed because the
    drawer is in a container on the page. */
  .drawer-container {
    position: relative;
    display: flex;
    height: 350px;

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
