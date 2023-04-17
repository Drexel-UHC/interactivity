<script lang="ts">
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Paper, { Content } from '@smui/paper';

  // Import D3 components
  import LineA from './LineA.svelte';
  import LineB from './LineB.svelte';

  let active = 'A';

  const tabs = [
    { id: 'A', component: LineA },
    { id: 'B', component: LineB },
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
