
<script lang="ts">
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Paper, { Content } from '@smui/paper';

  // Import D3 components
  import LineA from './LineA.svelte';
  import LineB from './LineB.svelte';


  let active = 'A';
</script>


<div>

  <TabBar tabs={['A', 'B' ]} let:tab bind:active>
    <!-- Note: the `tab` property is required! -->
    <Tab {tab}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>

  {#if active === 'A'}
    <Paper variant="unelevated">
      <Content>
        <LineA />
      </Content>
    </Paper>
  {:else if active === 'B'}
    <Paper variant="unelevated">
      <Content>
        <LineB />
      </Content>
    </Paper> 
  {/if}


</div>
