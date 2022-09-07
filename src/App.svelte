<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>

<script>
    let styleType = 'checkbox';
    let data = [];
    let elements = ["Naruto", "Tanjiro", "Luffy", "Asta"];
    let style = 'secondary' 
</script>
<div class='app'>
{#if styleType == 'checkbox'}
    {#each elements as element}
        <label class='container'>
            {element}
            <input type='checkbox' bind:group={data} value={element} />
            <span class='checkmark'></span>
        </label>
        {#if style == 'primary'}
            <style>
                body{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                }
                .container {
                display: block;
                position: relative;
                padding-left: 35px;
                margin-bottom: 12px;
                cursor: pointer;
                font-size: 22px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                font-family: 'Roboto', sans-serif;
                }
            
                /* Hide the browser's default checkbox */
                .container input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
                }
            
                /* Create a custom checkbox */
                .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                height: 25px;
                width: 25px;
                background-color: #eee;
                border-radius: 3px;
                }
            
                /* On mouse-over, add a grey background color */
                .container:hover input ~ .checkmark {
                background-color: #ccc;
                }
            
                /* When the checkbox is checked, add a blue background */
                .container input:checked ~ .checkmark {
                background-color: #8BD3DD;
                }
            
                /* Create the checkmark/indicator (hidden when not checked) */
                .checkmark:after {
                content: "";
                position: absolute;
                display: none;
                }
            
                /* Show the checkmark when checked */
                .container input:checked ~ .checkmark:after {
                display: block;
                }
            
                /* Style the checkmark/indicator */
                .container .checkmark:after {
                left: 9px;
                top: 5px;
                width: 5px;
                height: 10px;
                border: solid #172C66;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
                }
            </style>
            {:else if style == 'secondary'}
            <style>
                body{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                }
                .container {
                display: block;
                position: relative;
                padding-left: 35px;
                margin-bottom: 12px;
                cursor: pointer;
                font-size: 22px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                font-family: 'Roboto', sans-serif;
                }
            
                /* Hide the browser's default checkbox */
                .container input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
                }
            
                /* Create a custom checkbox */
                .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                height: 25px;
                width: 25px;
                background-color: #eee;
                border-radius: 3px;
                }
            
                /* On mouse-over, add a grey background color */
                .container:hover input ~ .checkmark {
                background-color: #ccc;
                }
            
                /* When the checkbox is checked, add a blue background */
                .container input:checked ~ .checkmark {
                background-color: #F582AE;
                }
            
                /* Create the checkmark/indicator (hidden when not checked) */
                .checkmark:after {
                content: "";
                position: absolute;
                display: none;
                }
            
                /* Show the checkmark when checked */
                .container input:checked ~ .checkmark:after {
                display: block;
                }
            
                /* Style the checkmark/indicator */
                .container .checkmark:after {
                left: 9px;
                top: 5px;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
                }
            </style>
            {:else}
                <style>
                    body{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    }
                    .container {
                    display: block;
                    position: relative;
                    padding-left: 35px;
                    margin-bottom: 12px;
                    cursor: pointer;
                    font-size: 22px;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    font-family: 'Roboto', sans-serif;
                    }
                
                    /* Hide the browser's default checkbox */
                    .container input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                    }
                
                    /* Create a custom checkbox */
                    .checkmark {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 25px;
                    width: 25px;
                    background-color: #eee;
                    border: 3px solid #001858;
                    border-radius : 3px;
                    }
                
                    /* On mouse-over, add a grey background color */
                    .container:hover input ~ .checkmark {
                    background-color: #001858;
                    }
                
                    /* When the checkbox is checked, add a blue background */
                    .container input:checked ~ .checkmark {
                    background-color: #001858;
                    }
                
                    /* Create the checkmark/indicator (hidden when not checked) */
                    .checkmark:after {
                    content: "";
                    position: absolute;
                    display: none;
                    }
                
                    /* Show the checkmark when checked */
                    .container input:checked ~ .checkmark:after {
                    display: block;
                    }
                
                    /* Style the checkmark/indicator */
                    .container .checkmark:after {
                    left: 9px;
                    top: 5px;
                    width: 5px;
                    height: 10px;
                    border: solid white;
                    border-width: 0 3px 3px 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                    }
                </style>
        {/if}
    {/each}
{:else if styleType == 'radio'}
{#each elements as element}
        <label class='containerButton'>
            {element}
            <input type='radio' bind:group={data} value={element} />
            <span class='checkmarkButton'></span>
        </label>
        {#if style == 'primary'}
            <style>
                body{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                /* Customize the label (the container) */
                .containerButton {
                display: block;
                position: relative;
                padding-left: 35px;
                margin-bottom: 12px;
                cursor: pointer;
                font-size: 22px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                }
            
                /* Hide the browser's default radio button */
                .containerButton input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
                }
            
                /* Create a custom radio button */
                .checkmarkButton {
                position: absolute;
                top: 0;
                left: 0;
                height: 25px;
                width: 25px;
                background-color: #eee; 
                border-radius: 50%;
                font-family: 'Roboto', sans-serif;
                }
            
                /* On mouse-over, add a grey background color */
                .containerButton:hover input ~ .checkmarkButton {
                background-color: #ccc;
                }
            
                /* When the radio button is checked, add a blue background */
                .containerButton input:checked ~ .checkmarkButton {
                background-color: #8BD3DD;
                }
            
                /* Create the indicator (the dot/circle - hidden when not checked) */
                .checkmarkButton:after {
                content: "";
                position: absolute;
                display: none;
                }
            
                /* Show the indicator (dot/circle) when checked */
                .containerButton input:checked ~ .checkmarkButton:after {
                display: block;
                }
            
                /* Style the indicator (dot/circle) */
                .containerButton .checkmarkButton:after {
                top: 9px;
                left: 9px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                /* background: white; */
                background: #172C66;
                
                }
            </style>
            {:else if style == 'secondary'}
            <style>
                body{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                /* Customize the label (the container) */
                .containerButton {
                display: block;
                position: relative;
                padding-left: 35px;
                margin-bottom: 12px;
                cursor: pointer;
                font-size: 22px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                font-family: 'Roboto', sans-serif;
                }
            
                /* Hide the browser's default radio button */
                .containerButton input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
                }
            
                /* Create a custom radio button */
                .checkmarkButton {
                position: absolute;
                top: 0;
                left: 0;
                height: 25px;
                width: 25px;
                background-color: #eee;
                border-radius: 50%;
                }
            
                /* On mouse-over, add a grey background color */
                .containerButton:hover input ~ .checkmarkButton {
                background-color: #ccc;
                }
            
                /* When the radio button is checked, add a blue background */
                .containerButton input:checked ~ .checkmarkButton {
                background-color: #F582AE;
                }
            
                /* Create the indicator (the dot/circle - hidden when not checked) */
                .checkmarkButton:after {
                content: "";
                position: absolute;
                display: none;
                }
            
                /* Show the indicator (dot/circle) when checked */
                .containerButton input:checked ~ .checkmarkButton:after {
                display: block;
                }
            
                /* Style the indicator (dot/circle) */
                .containerButton .checkmarkButton:after {
                top: 9px;
                left: 9px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: white; 
                }
            </style>
            {:else}
                <style>
                    body{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    }
                    /* Customize the label (the container) */
                    .containerButton {
                    display: block;
                    position: relative;
                    padding-left: 35px;
                    margin-bottom: 12px;
                    cursor: pointer;
                    font-size: 22px;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    font-family: 'Roboto', sans-serif;
                    }
                
                    /* Hide the browser's default radio button */
                    .containerButton input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                    }
                
                    /* Create a custom radio button */
                    .checkmarkButton {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 25px;
                    width: 25px;
                    background-color: #eee;
                    border-radius: 50%;
                    border: 3px solid #001858;
                    }
                
                    /* On mouse-over, add a grey background color */
                    .containerButton:hover input ~ .checkmarkButton {
                    background-color: #ccc;
                    }
                
                    /* When the radio button is checked, add a blue background */
                    .containerButton input:checked ~ .checkmarkButton {
                    background-color: #001858;
                    }
                
                    /* Create the indicator (the dot/circle - hidden when not checked) */
                    .checkmarkButton:after {
                    content: "";
                    position: absolute;
                    display: none;
                    }
                
                    /* Show the indicator (dot/circle) when checked */
                    .containerButton input:checked ~ .checkmarkButton:after {
                    display: block;
                    }
                
                    /* Style the indicator (dot/circle) */
                    .containerButton .checkmarkButton:after {
                    top: 9px;
                    left: 9px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: white;
                    }
                </style>
        {/if}
        <!-- <label for={element}>{element}</label> -->
{/each}
{:else}
        <h1>Veuillez Choisir dans la variable styleType 'radio' ou 'checkbox'</h1>
{/if}
</div>

