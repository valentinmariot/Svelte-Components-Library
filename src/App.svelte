<script>
	import PasswordChecker from "./components/PasswordChecker/Password-checker.svelte";
	import SwitchSection from "./components/Switch/SwitchSection.svelte";
	import ToolbarSection from "./components/Toolbar/ToolbarSection.svelte";
</script>

<div class="container">
	<section class="m-top">
		<h2>Menu</h2>
		<hr />

		<ToolbarSection />

		<legend>
			<h4>Properties :</h4>
			<ul>
				- <strong>isRight</strong> : place toolbar to the right side by default is
				placed to the left side
			</ul>
		</legend>
	</section>

	<section class="m-top">
		<h2>Switch</h2>
		<hr />

		<div class="container m-top">
			<SwitchSection />
		</div>
		<legend />
	</section>
	<section>
		<PasswordChecker
			lenght_characters={10}
			uppercase={true}
			special_charact={true}
			number={true}
			face={true}
		/>
	</section>
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
</style>
