<script>
    import { onMount } from 'svelte';
    export let jsonData;

    onMount (() => {
        var elem = document.querySelector('.main-carousel');
        var flkty = new Flickity( elem, {
        // options
            cellAlign: 'left',
            contain: true
        });
        
        // element argument can be a selector string
        //   for an individual element
        var flkty = new Flickity( '.main-carousel', {
        // options
        });
    });
</script>
<div class="main-carousel" >
    {#each jsonData as item,i }
        <div class= "carousel-cell">
            <img src={item} alt={i} height="200px">
        </div>
    {/each}
</div>