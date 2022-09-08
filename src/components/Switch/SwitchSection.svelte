<script>
	import Switch from "./Switch.svelte";

	const handleToggle = (value) => {
		console.log(value);
	};
</script>

<section class="auto">
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
</section>

<style>
	.right {
		display: flex;
		justify-content: right;
	}
	.auto {
		width: 50%;
		margin: 0 auto;
	}
</style>
