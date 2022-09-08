<script>
	// toggle state
	export let isToggled = false;
	// optional button's label
	export let label = undefined;
	// allow to link label to toggle
	export let id = "button";
	// function to export boolean's value
	export let onToggle = undefined;
	// allow to disable button
	export let isDisabled = false;
	// allow to change style
	export let isLocked = false;

	const handleToggle = () => {
		isToggled = !isToggled;
		onToggle(isToggled);
	};

	const isToggledActive = !isDisabled && !isLocked;

	const setState = (state) => {
		if (isToggledActive) {
			if (state === true) {
				return "bg-toggled";
			}
			return "bg-untoggled";
		} else if ((isDisabled && !isLocked) || (isDisabled && isLocked)) {
			return "bg-disabled";
		} else if (isLocked && !isDisabled) {
			return "bg-locked";
		}
	};
</script>

<div class="switchContainer">
	{#if label}
		<label for={id}>{label}</label>
	{/if}

	<button
		{id}
		class={setState(isToggled ?? isDisabled)}
		on:click={handleToggle}
		disabled={isDisabled}
	>
		<div class="button-switch" class:isToggled />
	</button>
</div>

<style>
	.switchContainer {
		display: flex;
		align-items: center;
	}

	label {
		margin-right: 16px;
	}

	button {
		flex-shrink: 0;
		cursor: pointer;
		height: 35px;
		width: 75px;
		border-radius: 35px;
		cursor: pointer;
		display: flex;
		position: relative;
		transition: background-color 150ms ease-in-out;
		padding: 0 0;
		border: 2px solid #172c66;
	}

	.button-switch {
		height: 25px;
		width: 25px;
		align-items: center;
		margin-top: 3px;
		margin-left: 3px;
		background-color: white;
		border-radius: inherit;
		position: relative;
		transition: transform 150ms ease-in-out;
		z-index: 1;
	}

	button:focus {
		outline: none;
	}

	.isToggled {
		transform: translateX(40px);
	}

	.bg-toggled {
		background-color: #8bd3dd;
	}

	.bg-untoggled {
		background-color: #f582ae;
	}

	.bg-disabled {
		cursor: not-allowed;
		background-color: #f3d2c1;
		opacity: 75%;
	}

	.bg-locked {
		cursor: not-allowed;
		background-color: #f3d2c1;
	}
</style>
