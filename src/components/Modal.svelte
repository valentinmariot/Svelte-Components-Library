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
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .modal {
        background-color: rgba(245, 130, 174, 0.3);
        color: white;
        padding: 1em;
        padding-bottom: 3em;
        margin: 5% auto;
        border-radius: 3px;
        width: 350px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        background: #001858; 
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    .close {
        float: right;
        cursor: pointer;
        color: #F582AE;
        font-size: 50px;
        font-weight: bold;
    }

    .close:hover {
        font-weight: bold;
    }
</style>
