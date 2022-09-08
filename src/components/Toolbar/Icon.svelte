<script>
	export let open = false;
	export let iconMenu = undefined;
	export let onClick = () => {
		open = !open;
	};

	export let ariaLabel = "toggle menu";
</script>

<button on:click={onClick} aria-expanded={open} aria-label={ariaLabel}>
	<span class:iconMenu class={iconMenu} />
	<svg class:open class="icon icon-chevron"
		><use xlink:href="#icon-chevron-up" /></svg
	>
	<symbol id="icon-chevron-up" viewBox="0 0 24 24">
		<path
			d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
		/>
	</symbol>
</button>

<style>
	.iconMenu {
		font-size: 20px;
	}
	.icon {
		display: inline-block;
		color: #172c66;
		width: 1em;
		height: 1em;
		fill: currentColor;
		font-size: 48px;
	}

	.icon-chevron {
		transform: rotate(0deg);
	}

	:root {
		--transition-duration: 400ms;
	}

	button {
		position: relative;
		z-index: 1;
		background-color: #f582ae;
		color: #172c66;
		cursor: pointer;
		display: flex;
		align-items: center;
		overflow: hidden;
		border: unset;
		border-radius: 10px;
		padding: 10px 20px;
	}

	.open {
		transform: rotate(180deg);
	}

	.open .icon {
		transform: rotate(90deg);
		margin-top: 1px;
	}
</style>
