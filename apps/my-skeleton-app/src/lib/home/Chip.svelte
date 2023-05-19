<script>
  export let label;
</script>

<style>
  .chip {
    display: inline-flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 16px;
    background-color: #e0e0e0;
    color: #424242;
    font-size: 14px;
    font-family: Arial, sans-serif;
    cursor: default;
    user-select: none;
    margin-right: 8px;
  }

  .deleteIcon {
    margin-left: 4px;
    fill: #757575;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .deleteIcon:hover {
    fill: #424242;
  }
</style>

{#if typeof label !== 'undefined'}

<div class="chip">
  <span>{label}</span> 
    <svg class="deleteIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  on:click>
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
    </svg> 
</div>

{/if}