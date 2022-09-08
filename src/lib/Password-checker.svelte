<script>
    export let lenght_characters = 0
    export let uppercase = false
    export let special_charact = false
    export let number = false
    export let face = false
    let password_write = ""
    let visible = false
    let face_humor = 1
    let class_mouth_humor = "weak"
    let background_face = "#F582AE"
    let text_message_humor = "Weak"
    let color_text_message_humor = "#F582AE"
    let secure_password_points = 0


    function show_password() {
        if (visible) {
            document.getElementById("input_password").type = "password"
            document.getElementById("eye_icon").className = "ico-eye"
            visible = false
        } else {
            document.getElementById("input_password").type = "text"
            document.getElementById("eye_icon").className = "ico-eye-blocked"
            visible = true
        }
    }

    function check_uppercase(str) {
        return (/[A-Z]/.test(str));
    }

    function check_special(str) {
        return (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str));
    }

    function check_number(str) {
        return (/[0-9]/.test(str));
    }

    // regex to check that a string not contain 3 or more consecutive characters
    function check_consecutive(str) {
        return (/([a-zA-Z0-9])\1{2,}/.test(str));
    }

    function check_only_numbers(str) {
        return (/^[0-9]+$/.test(str));
    }

    function lenght_characters_respected(str) {
        return str.length >= lenght_characters;
    }

    function points_assignment(password_write) {
        secure_password_points = 0
        if (password_write.length >= 10) {
            secure_password_points += 12
        }
        if (check_uppercase(password_write)) {
            secure_password_points += 2
        }
        if (check_special(password_write)) {
            secure_password_points += 2
        }
        if (check_number(password_write)) {
            secure_password_points += 1
        }
        if ( password_write.length >= 7 && password_write.length <= 9) {
            secure_password_points += 5
        }
        if (check_consecutive(password_write) || password_write.length < 5) {
            secure_password_points -= 2
        }
        if (check_only_numbers(password_write) && password_write.length < 5 ) {
            secure_password_points -= 3
        }
        return secure_password_points
    }

    function change_face() {
        if (face) {
            if (face_humor === 1) {
                class_mouth_humor = "weak";
                color_text_message_humor = "#F582AE"
                background_face = "#F582AE"
                text_message_humor = "Weak"
            } else if (face_humor === 2) {
                class_mouth_humor = "medium";
                color_text_message_humor = "#F3D2C1";
                background_face = "#F3D2C1";
                text_message_humor = "Medium"
            } else if (face_humor === 3) {
                class_mouth_humor = "high";
                color_text_message_humor = "#8BD3DD";
                background_face = "#8BD3DD";
                text_message_humor = "High"
            }
        }
    }

    function password_checker() {
        if (points_assignment(password_write) >= 5 && points_assignment(password_write) <= 9) {
            face_humor = 2
            change_face()
        } else if (points_assignment(password_write) > 9) {
            face_humor = 3
            change_face()
        } else {
            face_humor = 1
            change_face()
        }
    }

    password_checker()
</script>

<div id="input_face">
    <div class="input">
        <input type="password" name="password_checker" id="input_password" bind:value={password_write}
               placeholder="@Passw0rd" on:input={password_checker}>
        <div class="show-password" id="show_password">
            <span class="ico-eye" id="eye_icon" on:click={show_password} style="color: #001858"></span>
        </div>
    </div>

    <div id="face-icon" class="face" style="display: {face && password_write ? 'block' : 'none'};
        background: {background_face}">
        <div class="eyes">
            <div class="eye"></div>
            <div class="eye"></div>
        </div>
        <div class="mouth {class_mouth_humor}" id="mouth"></div>
    </div>
    <span id="text_message_humor" style="color: {color_text_message_humor};
        display: {face && password_write ? 'block' : 'none'}">{text_message_humor}</span>
</div>
{#if password_write}
    <div id="checked_boxes">
        <div class="checkbox" id="uppercase" style="display: { uppercase ? 'block' : 'none'}">
            <input type="checkbox" disabled="disabled" name="uppercase" checked={check_uppercase(password_write)}>
            <label for="uppercase">Uppercase letter</label>
        </div>
        <div class="checkbox" id="special_charact" style="display: { special_charact ? 'block' : 'none'}">
            <input type="checkbox" disabled="disabled" name="special_charact" checked={check_special(password_write)}>
            <label for="special_charact">A special character</label>
        </div>
        <div class="checkbox" style="display: { number ? 'block' : 'none'}">
            <input type="checkbox" disabled="disabled" name="number" id="number" checked={check_number(password_write)}>
            <label for="number">A number</label>
        </div>
        <div class="checkbox">
            <input type="checkbox" disabled="disabled" name="number" id="lenght_characters"
                   checked={lenght_characters_respected(password_write)}>
            <label for="number">{lenght_characters} characters minimum</label>
        </div>
    </div>
{/if}


<style>
    #input_password {
        background: #FEF6E4;
        border: 3px solid #001858;
        border-radius: 5px;
        width: 200px;
        height: 30px;
    }

    .input {
        position: relative;
        display: flex;
        flex-direction: row-reverse;
    }

    #show_password{
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        margin-right: 10px;
    }

    #input_face{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        width: 100%;
        height: 25%;
        border-radius: 4px;
        box-sizing: border-box;
    }

    #face-icon {
        width: 35px;
        height: 35px;
        border: 1.5px solid #001858;
        border-radius: 50%;
        position: relative;
        display: flex;
        align-items: center;

    }

    .eyes{
        width: 45%;
        height: 25%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 5px;
        position: absolute;
        flex-direction: row;
    }

    .eye{
        width: 7px;
        height: 7px;
        background: #001858;
        border-radius: 50%;
        position: relative;
        top: 10px;
        left: 10px;
    }

    .mouth{
        width: 50%;
        height: 10%;
        position: absolute;
        top: 68%;
        left: 25%;
        border-radius:50%;
    }

    .mouth.weak{
        border-bottom: 2px solid #001858;
        transform: rotate(180deg);
    }

    .mouth.medium{
        background: #001858;
    }

    .mouth.high{
        border-top: 5px solid #001858;
        transform: rotate(180deg);
        top: 60%;
    }

    #checked_boxes{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 13rem;
        height: 10rem;
        box-sizing: border-box;
        background: #FFFFFF;
        box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        justify-content: center;
        padding: 10px;
    }

</style>