<script lang="ts">
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Paper, { Content } from '@smui/paper';

  // Import D3 components
  import MapA from './MapA.svelte';
  import MapB from './MapB.svelte';
  import MapC from './MapC.svelte';
  import MapD from './MapD.svelte';
  import MapE from './MapE.svelte';
  import MapF from './MapF.svelte';

  let active = 'A';

  const tabs = [
    { id: 'A', component: MapA },
    { id: 'B', component: MapB },
    { id: 'C', component: MapC },
    { id: 'D', component: MapD },
    { id: 'E', component: MapE },
    { id: 'F', component: MapF },
  ];
  const tabNames = tabs.map((tab) => tab.id);
</script>

<div>
  <TabBar tabs={tabNames} let:tab bind:active>
    <!-- Note: the `tab` property is required! -->
    <Tab {tab}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>

  {#each tabs as { id, component }}
    {#if active === id}
      <Paper variant="unelevated">
        <Content>
          <svelte:component this={component} />
        </Content>
      </Paper>
    {/if}
  {/each}
</div>
