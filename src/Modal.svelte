<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>

<script>
    let open = false;
    export function show() {
        open = true;
    }
    export function hide() {
        open = false;
    }
    
</script>

{#if open}
    <div class="pop-up">
        <div class="modal">
            <span class="close" on:click={() => hide()}>&times;</span>
            <slot />
        </div>
    </div>
{/if}
<style>
    .pop-up {
        /* background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.6); */
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .modal {
        background-color: rgba(245, 130, 174, 0.3);
        color: black;
        
        max-width: 80vw;
        padding: 1rem;
        margin: 15% auto;
        border: 3px solid #001858;
        border-radius: 3px;

        width: 350px;
        height: 190px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        /* left: 120px;
        top: 125px; */
    }

    .close {
        float: right;
        cursor: pointer;
    }

    .close:hover {
        font-weight: bold;
    }
</style>
