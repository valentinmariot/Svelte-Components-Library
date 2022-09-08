<script>
    import Omelette from "../Omelette/Omelette.svelte";
    export let isLoading // <Boolean> 
    let selectedColor = 'pink' // <String> "pink" | "blue"
    
</script>

{#if isLoading}
<div class="loader">
    <Omelette color={selectedColor}/>
    <div class="color-radios">
        <label class="color-radios__label">
            <input class="color-radios__input" type=radio bind:group={selectedColor} name="pink" value={"pink"}>
        Theme 1
        </label>
        <label class="color-radios__label">
            <input class="color-radios__input" type=radio bind:group={selectedColor} name="blue" value={"blue"}>
        Theme 2
        </label>
    </div>
</div>
{/if}

<style>
    .loader{
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }

    .color-radios {
        padding-top : 20px;
        display: flex;
        flex-direction: column;
    }

    .color-radios__label {
        padding-top: 10px;
    }


</style>
