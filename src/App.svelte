<!-- <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'> -->
<script>
    import Checkbox from "./components/Checkbox.svelte";
    let tabElements = ["Naruto", "Tanjiro", "Luffy", "Asta"];
    let tabData = [];
</script>
<Checkbox 
    styleType = 'radio'
    data = {tabData}
    elements = {tabElements}
    style = ''
></Checkbox>
