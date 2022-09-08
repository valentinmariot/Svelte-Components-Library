<script>
	import PasswordChecker from "./components/PasswordChecker/PasswordChecker.svelte";
	import SwitchSection from "./components/Switch/SwitchSection.svelte";
	import Toolbar from "./components/Toolbar/Toolbar.svelte";
	import Loader from "./components/Loader/Loader.svelte";
	import Modal from "./components/Modal/Modal.svelte";
	import PopUp from "./components/PopUp/PopUp.svelte";
	import Checkbox from "./components/Checkbox/Checkbox.svelte";
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
	<Section title="Toolbar" props={toolbarProps}>
		<Toolbar />
	</Section>

	<Section title="Switch" props={switchProps}>
		<SwitchSection />
	</Section>

	<Section title="PasswordChecker" props={passwordProps}>
		<PasswordChecker />
	</Section>

	<Section title="Loader" props={loadingProps}>
		<Loader isLoading />
	</Section>

	<!-- ! ici composant s'affiche pas -->
	<Section title="Modal" props={modalProps}>
		<Modal />
	</Section>

	<!-- ! doesn't work -->
	<Section title="PopUp" props={popupProps}>
		<PopUp />
	</Section>

	<!-- ! doesn't work -->
	<!-- ? En ajoutant un de valeurs indiqués dans prop, il y a pas d'affichage ? -->
	<Section title="Checkbox" props={checkboxProps}>
		<Checkbox />
	</Section>

	<Section title="Slider" props={sliderProps ? sliderProps : ""}>
		<!-- < /> -->
	</Section>
</div>

<style>
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
