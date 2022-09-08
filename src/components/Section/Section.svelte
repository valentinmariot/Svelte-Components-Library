<script>
	export let title = undefined;
	export let props = undefined;
</script>

<div>
	<section class="m-top">
		<h2>{title ? title : "Enter title name"}</h2>
		<hr />
		<div class="m-top">
			<slot />
		</div>
		<legend>
			{#if props}
				<h3>Properties :</h3>
				<ul>
					{#each props as property}
						<li>
							<span class="title">{property.title}</span>
							<p>{property.description}</p>
						</li>
					{/each}
				</ul>
			{:else}
				<span />{/if}
		</legend>
	</section>
</div>

<style>
	.m-top {
		margin-top: 50px;
	}

	.title {
		font-weight: 700;
		font-size: 1.125rem;
		text-decoration: underline;
	}

	.m-top {
		margin-top: 50px;
	}
	legend {
		margin-top: 20px;
	}
</style>
