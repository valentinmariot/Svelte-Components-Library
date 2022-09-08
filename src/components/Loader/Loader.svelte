<script>
    import Omelette from "../Omelette/Omelette.svelte";
    export let isLoading // <Boolean> 
    let selectedColor = 'pink' // <String> "pink" | "blue"
    
</script>

{#if isLoading}
<div class="loader">
<Omelette color={selectedColor}/>
<label>
	<input type=radio bind:group={selectedColor} name="pink" value={"pink"}>
Theme 1
</label>
<label>
	<input type=radio bind:group={selectedColor} name="blue" value={"blue"}>
Theme 2
</label>
</div>
{/if}

<style>
    .loader{
    width: 100%;
    height: 100%;
    display:flex;
    position: relative;
    align-items: center;
    justify-content: center;
    }

</style>
