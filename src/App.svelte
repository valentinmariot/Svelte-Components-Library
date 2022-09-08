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
</script>

<div class="container">
	<h1>Omelette Library</h1>

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
	<Section title="Modal" props={modalProps}>
		<Modal />
	</Section>

	<Section title="Slider" props={sliderProps ? sliderProps : ""}>
		<Slider />
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
