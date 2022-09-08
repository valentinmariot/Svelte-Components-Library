<script>
	import Switch from "./Switch.svelte";
	import Menu from "../Toolbar/Toolbar.svelte";

	const handleToggle = (value) => {
		console.log(value);
	};
</script>

<div>
	<section>
		<h2>Switch</h2>
		<hr />
		<br />
		<br />
		<div>
			<div>
				<div>
					<Switch label={"Toggle"} onToggle={handleToggle} />
				</div>

				<br />

				<div>
					<Switch label={"Locked"} isLocked />
				</div>

				<br />

				<div>
					<Switch label={"Disabled"} isDisabled />
				</div>
				<br />
			</div>
		</div>
	</section>
</div>

<style>
</style>
