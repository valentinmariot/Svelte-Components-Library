<script>
	import Switch from "./components/Switch/Switch.svelte";
	import Toolbar from "./components/Toolbar/Toolbar.svelte";
</script>

<div class="container">
	<section class="m-top">
		<h2>Menu</h2>
		<hr />

		<div>
			<div class="m-top position-absolute">
				<Toolbar isRight />
			</div>

			<div class="position-absolute">
				<Toolbar />
			</div>
			<br />
			<br />
		</div>

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
		<br />
		<br />
		<div class="container">
			<div class="auto">
				<div class="right auto">
					<Switch label={"Toggle"} />
				</div>

				<br />

				<div class="right auto">
					<Switch label={"Locked"} isLocked />
				</div>

				<br />

				<div class="right auto">
					<Switch label={"Disabled"} isDisabled />
				</div>
				<br />
			</div>
		</div>
		<legend />
	</section>
</div>

<style>
	.position-absolute {
		position: absolute;
		width: 30%;
	}

	.container {
		width: 500px;
	}
	.right {
		display: flex;
		justify-content: right;
	}
	.auto {
		width: 50%;
		margin: 0 auto;
	}

	.m-top {
		margin-top: 50px;
	}
	legend {
		margin-top: 92px;
	}
</style>
