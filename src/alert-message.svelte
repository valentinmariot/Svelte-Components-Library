<script>
    // Choisissez le type de message d'alerte parmis les suivantes : warning, danger, success, info, pink, beige ou blueprints et mettez le dans la variable 'typeAlert'

    let typeAlert = 'warning';

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

</script>

<div class=container style="color: {textColor}; background: {backgroundColor};">
    <p class="content">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
    <span class="ico-close icon" style="color: {textColor}; background: {backgroundColor};"/>
</div>

<style>
    .container:before {
        width: 100%;
        display: block;
        text-align: center;
        position: absolute;
        z-index: 10;
    }

    .container .content {
        position: relative;
        width: 60%;
    }

    .container .icon {
        position: relative;
        left: 60%;
        width: 40%;
    }

</style>
