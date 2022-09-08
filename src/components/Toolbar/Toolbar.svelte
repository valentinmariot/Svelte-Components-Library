<script>
	import { fade } from "svelte/transition";

	import Icon from "./Icon.svelte";

	export let open = false;
	export let iconMenu = "ico-settings";

	export let onClick = (e) => {
		open = !open;
	};

	export let isRight = undefined;
	export let items = [
		{ value: "Color picker", href: "href1", icon: "ico-picker" },
		{ value: "Edit", href: "href2", icon: "ico-pencil" },
		{ value: "Delete", icon: "ico-bin", isDisabled: true },
	];

	// export let items2 = [{value:'item 1', icon:'ico-apple'}, {value:'item 2', icon:'ico-apple'}, {value:'item 3', icon:'ico-apple'}]
</script>

<header class={isRight ? "isRight" : ""}>
	<div class="main">
		<div class="logo" />
		<Icon {open} {onClick} {iconMenu} />
	</div>

	{#if open}
		<div transition:fade>
			<!-- <div class="triangle {isRight ? 'by-left' : ''}" /> -->
			<nav id="test" class={isRight ? "by-left-nav" : ""}>
				{#each items as item}
					<a
						on:click={onClick.bind(null, item.value)}
						href={item.href ? item.href : "#"}
						class={item.isDisabled ? "disable-link" : ""}
						disabled={item.isDisabled}
					>
						<div class="link-container">
							<span class={item.icon} />
							<div class="item">{item.value}</div>
						</div>
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>

<style>
	/* #test {
		margin-top: 30px;
		padding: 10px 15px;
		width: 300px;
		box-shadow: 0 5px 15px -10px rgb(31 18 53 / 60%);
	} */
	.item {
		margin-left: 20px;
	}

	.link-container {
		display: flex;
		padding: 5px;
		/* justify-content: ; */
	}
	span {
		display: flex;
		align-items: center;
		/* justify-content: left; */
	}

	header {
		position: relative;
		font-size: 2rem;
		z-index: 2;
		/* display: flex; */
	}

	.pos-relative {
		position: absolute;
	}
	header.isRight {
		display: flex;
	}

	.main {
		display: flex;
		justify-content: space-between;
	}

	a {
		width: 100%;
		cursor: pointer;
		color: whitesmoke;
	}
	a:hover {
		background: #F9BCC9;
	}
	a:active {
	}
	a:focus {
	}
	a:link {
		text-decoration: none;
	}

	nav {
		position: absolute;
		text-align: center;
		background-color: #f582ae;
		position: absolute;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
		width: 100%;
		margin-top: 15px;
		border-radius: 10px;
		overflow: hidden;
		margin-top: 30px;
		padding: 10px 15px;
		width: 300px;
		box-shadow: 0 5px 15px -10px rgb(31 18 53 / 60%);
	}

	.disable-link {
		pointer-events: none;
		opacity: 30%;
	}

	.triangle {
		position: relative;
		float: right;
		margin-right: 40px;
		margin-top: 5px;
		width: 0;
		height: 0;
		border: 0 solid transparent;
		border-right-width: 10px;
		border-left-width: 10px;
		border-bottom: 10px solid #f582ae;
	}

	.by-left {
		/* top && left by isRight prop */
		top: 50px;
		left: -58px;
	}
	.by-left-nav {
		/* top by isRight */
		top: 50px;
		left: 0px;
	}
</style>
