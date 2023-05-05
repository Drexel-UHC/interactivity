
<script>
import TopAppBar, {
  Row,
  Section,
  Title,
  AutoAdjust,
} from '@smui/top-app-bar';
import Button, { Label } from '@smui/button'
import IconButton from '@smui/icon-button';

let topAppBar;
</script>

<TopAppBar bind:this={topAppBar} variant="standard">
  <Row>
    <Section style="display:flex; justify-content:center;">
     	<Button href="/">
  			<Label>Home</Label>
			</Button>
			<Button href="/mui" >
  			<Label>Tabs</Label>
			</Button>
			<Button href="/interactives"  >
  			<Label>Interactives</Label>
			</Button>
    </Section>

  </Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
</AutoAdjust>
 
 
<style>
  /* Hide everything above this component. */
  :global(#smui-app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }
</style>