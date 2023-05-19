<script>
// import bar_image from '$lib/images/github.svg';
// import bar_image from '$lib/images/barchart1.png';
//  export let id;
 export let name;
 export let desc;
 export let tech;
 export let path;
 export let img;
// import bar_image from img_path;


//  export let descr;
</script>
    
<div class="row">
    <div class = 'column column-left'></div>

    <div class = 'column column-center'>
      <div class = 'content'>
       <div class = 'content-row title'><a href={path}>{name}</a></div>
        <div class = 'content-row tech-row'>
          {#each tech as techItem}
            <div class = 'tech-chip'> 
              {techItem}
            </div>
          {/each}
        </div>
        <div {desc} class = 'content-row'>{desc}</div>
       
      </div>
    </div>
    <div class = 'column column-right'> 
        <img src={img} alt="A description of the image" />
    </div>
</div>
 

 

<style>
  a {
    color: inherit;
    text-decoration: none;
  }

  .row {
    border: 1px solid gainsboro;
 
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  
  .column {
    padding: 3px; 
  }
  .column-left {
    flex-basis: 20%;
  }

  .column-center {
    flex-basis: 50%;
  }

  .column-right {
    flex-basis: 30%;
    display: flex;
    justify-content: center;
  }

 .column-right img {
    max-width: 100%;
    max-height: 100px;
    object-fit: contain;
  }
  
  .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
  }

  .content-row {
    padding: 5px;
  }

  .title{
    font-size: larger;
    font-weight: bold;
  }


  .tech-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .tech-chip {
    margin-right: 5px;
    padding: 3px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: small;
  }
</style>