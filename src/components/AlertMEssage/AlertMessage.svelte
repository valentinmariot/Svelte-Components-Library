<script>
    // Choisissez le type de message d'alerte parmis les suivantes : warning, danger, success, info, pink, beige ou blueprints et mettez le dans la variable 'typeAlert'

    export let typeAlert = 'warning';

    const setTextColor = () => {
        if (typeAlert == 'danger') {
            return '#FEF6E4'; 
        } else {
            return '#172C66';
        }
    }


    const setBackgroundColor = () => {
        if (typeAlert == 'warning') {
            return '#FBDD74';
        } else if (typeAlert == 'danger') {
            return '#FF5470';
        } else if (typeAlert == 'success') {
            return '#9AEC9E'
        } else if (typeAlert == 'info'){
            return '#8BD3DD'
        } else if (typeAlert == 'pink'){
            return '#F582AE'
        } else if (typeAlert == 'beige'){
            return '#F3D2C1'
        } else if (typeAlert == 'blueprints') {
            return '#FBDD74'
        } else {
            console.log("Il faut rentrer un des types d'alerte suivant : warning, danger, success, info, pink, beige ou blueprints");
        }
    };

    let backgroundColor = setBackgroundColor()
    let textColor = setTextColor()

    let open = true

    const hide = () => {
        open = false
    }

</script>

{#if (open)}
    <div class="container" style="color: {textColor}; background: {backgroundColor};">
        <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <span class="ico-close icon" style="color: {textColor}; background: {backgroundColor};" on:click={() => hide()}/>
    </div>
{/if}

<style>

    .container {
        display: flex;
        border-radius: 5px;
    }

    .content {
        flex: 9;
        padding-left: 25px;
        border-radius: 5px;
    }

    .icon {
        padding-top: 7px;
        padding-right: 10px;
        border-radius: 5px;
        cursor: pointer;
    }

</style>
