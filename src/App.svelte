<script>
	import PasswordChecker from "./components/PasswordChecker/Password-checker.svelte";
	import SwitchSection from "./components/Switch/SwitchSection.svelte";
	import ToolbarSection from "./components/Toolbar/ToolbarSection.svelte";
	import Omelette from "./components/Omelette/Omelette.svelte";
	import Loader from "./components/Loader/Loader.svelte";
	import PopUp from "./components/PopUp/PopUp.svelte";
	import Checkbox from "./components/Checkbox/Checkbox.svelte";
import AlertMessage from "./components/AlertMEssage/AlertMessage.svelte";
import CreditCard from "./components/CreditCard/CreditCard.svelte";
import ToggleAccordeon from "./components/ToggleAccordeon/ToggleAccordeon.svelte";

let tabElements = ["Naruto", "Tanjiro", "Luffy", "Asta"];
    let tabData = [];
</script>

<div class="header">
    <img src="./src/assets/OMELETTE.png" alt="logo" width="150px" />
    <h1>SVELTE COMPONENTS LIBRARY</h1>
    <h2 id="hhfp">-An Happy Hues fans project-</h2>
</div>

<div class="container">
	<h1>Omelette Library</h1>
	<p />
	<section class="m-top">
		<h2>Menu</h2>
		<hr />

		<ToolbarSection />

		<legend>
			<h3>Properties :</h3>

			<li>
				<span class="title">isRight</span>:
				<p>
					place toolbar to the right side by default is placed to the left side
				</p>
			</li>
			<li>
				<span class="title">isDisabled </span>:
				<p>to disable a link</p>
			</li>
		</legend>
	</section>

	<section class="m-top">
		<h2>Alert Message</h2>
		<hr />
        <div class="alertmessage">
		    <AlertMessage />
        </div>
        <div class="alertmessage">
		    <AlertMessage typeAlert='info' />
        </div>
        <div class="alertmessage">
            <AlertMessage typeAlert='danger' />

        </div>
        <div class="alertmessage">
            <AlertMessage typeAlert='success' />

        </div>
        <div class="alertmessage">
            <AlertMessage typeAlert='pink' />

        </div>
		<AlertMessage typeAlert='beige' />


		<legend>

		</legend>
	</section>

	<section class="m-top">
		<h2>Credit Card</h2>
		<hr />
        <CreditCard />

		<legend>

		</legend>
	</section>
<!-- 
	<section class="m-top">
		<h2>Checkbox</h2>
		<hr />
        <div class="checkboxxx">

        <div class='boxxx'>
        <Checkbox 
    styleType = 'radio'
    data = {tabData}
    elements = {tabElements}
    style = ''
></Checkbox>
</div>
<div class='boxxx'>

        <Checkbox 
    styleType = 'checkbox'
    data = {tabData}
    elements = {tabElements}
    style = 'primary'
></Checkbox>
</div>
</div>


		<legend>

		</legend>
	</section> -->

	<section class="m-top">
		<h2>Switch</h2>
		<hr />

		<div class="container m-top">
			<SwitchSection />
		</div>
		<legend />
	</section>
	<section>
		<h2>PasswordChecker</h2>
		<hr />
		<div class="m-top">
			<PasswordChecker
				lenght_characters={10}
				uppercase={true}
				special_charact={true}
				number={true}
				face={true}
			/>
			<legend>
				<h3>Properties :</h3>
				<ul>
					<li>
						<span class="title">enght_characters </span>:
						<p>checks the lenght of characters</p>
					</li>
					<li>
						<span class="title">uppercase</span>:
						<p>checks if password has uppercase letters</p>
					</li>
					<li>
						<span class="title">special_charact</span>:
						<p>checks if password has special characters</p>
					</li>
					<li>
						<span class="title">number</span>:
						<p>checks if password has numbers</p>
					</li>
					<li>
						<span class="title">face</span>:
						<p>enable face emoji</p>
					</li>
				</ul>
			</legend>
		</div>
	</section>

	<section class="m-top">
		<h2>Loader</h2>
		<hr />
		<Loader isLoading />

		<legend>
			<h3>Properties :</h3>
		</legend>
	</section>

	<section class="m-top">
		<h2>Dropdown</h2>
		<hr />
		<ToggleAccordeon />

	</section>

</div>

<style>

.boxxx {
    margin: 0 100px;
}


.checkboxxx {
    display: flex;
    align-items: space-between;
    justify-content: center;
    width: 500px;
}
    .alertmessage {
        margin: 15px 0;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    #hhfp{
        color: #f582ae;
    }
	.container {
		width: 500px;
	}

	.m-top {
		margin-top: 50px;
	}
	legend {
		margin-top: 92px;
	}

	.title {
		font-weight: 700;
		font-size: 1.125rem;
		text-decoration: underline;
	}
</style>
