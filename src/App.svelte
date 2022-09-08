<script>
	import PasswordChecker from "./components/PasswordChecker/PasswordChecker.svelte";
	import Switch from "./components/Switch/SwitchSection.svelte";
	import Toolbar from "./components/Toolbar/Toolbar.svelte";
	import Loader from "./components/Loader/Loader.svelte";
	import PopUp from "./components/PopUp/PopUp.svelte";
	import Checkbox from "./components/Checkbox/Checkbox.svelte";
	import Modal from "./components/Modal/Modal.svelte";
	import ToggleAccordeon from "./components/ToggleAccordeon/ToggleAccordeon.svelte";
	import Slider from "./components/Slider/Slider.svelte";
	import Section from "./components/Section/Section.svelte";

	import Omelette from "./components/Omelette/Omelette.svelte";

	import Card from "./components/Card/Card.svelte";
	import AlertMessage from "./components/AlertMEssage/AlertMessage.svelte";
	import CreditCard from "./components/CreditCard/CreditCard.svelte";

	import {
		toolbarProps,
		switchProps,
		passwordProps,
		loadingProps,
		modalProps,
		popupProps,
		checkboxProps,
		sliderProps,
	} from "./config/properties";

	let tabElements = ["Naruto", "Tanjiro", "Luffy", "Asta"];
	let tabData = [];
</script>

<div class="header">
	<img src="./src/assets/OMELETTE.png" alt="logo" width="150px" />
	<h1>SVELTE COMPONENTS LIBRARY</h1>
	<h2 id="hhfp">-An Happy Hues fans project-</h2>
</div>
<div class="container">
	<Section title={"Toolbar"} props={toolbarProps}>
		<Toolbar isRight />
	</Section>

	<Section title="Switch" props={switchProps}>
		<Switch />
	</Section>

	<Section title="Switch" props={switchProps}>
		<PasswordChecker
			lenght_characters={10}
			uppercase={true}
			special_charact={true}
			number={true}
			face={true}
		/>
	</Section>

	<Section
		title="Loader"
		props={[
			{ title: "isLoading", description: "Display loader on load" },
			{ title: "selectedColor", description: "Pink or blue" },
		]}
	>
		<Loader isLoading />
	</Section>

	<Section title="ToggleAccordeon" props={""}>
		<ToggleAccordeon />
	</Section>

	<!-- ! ici composant s'affiche pas -->
	<Section title="Modal" props={""}>
		<Modal />
	</Section>

	<Section title="CreditCard" props={""}>
		<CreditCard />
	</Section>

	<Section title="Slider" props={""}>
		<div class="thefameuxslider">
			<Slider min="0" max="100" defaultValue="0" />
		</div>
	</Section>

	<Section title="Card" props={""}>
		<Card
			title=" Mackenzie Child"
			shortDescription="Some Lorem Ipsum Bacon Vegan here"
			longDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
		/>
	</Section>

	<Section title="AlerMessage" props={""}>
		<AlertMessage />
		<AlertMessage typeAlert="info" />
		<AlertMessage typeAlert="danger" />
		<AlertMessage typeAlert="success" />
		<AlertMessage typeAlert="pink" />
		<AlertMessage typeAlert="beige" />
	</Section>
	<Section title="Checkbox" props={""}>
		<Checkbox
			styleType="checkbox"
			data={tabData}
			elements={tabElements}
			style="primary"
		/>
	</Section>
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

	#hhfp {
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

	.thefameuxslider {
		margin: 50px 0;
	}
</style>
