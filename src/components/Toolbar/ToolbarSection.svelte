<script>
	import Toolbar from "./Toolbar.svelte";
</script>

<div>
	<div class="m-top position-absolute">
		<Toolbar isRight />
	</div>

	<br />
	<br />
</div>

<style>
	.position-absolute {
		position: absolute;
		width: 30%;
	}

	.m-top {
		margin-top: 50px;
	}
</style>
