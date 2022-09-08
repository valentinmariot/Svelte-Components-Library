<script>
	import Modal from "../Modal/Modal.svelte";
	let modal;
	export let title = 'Exemple title';
	export let text = 'Some text here';
</script>

<div class="container">
	<button class="modal-button" on:click={() => modal.show()}
		>CLICK</button
	>
</div>

<Modal bind:this={modal}>
	<h2 class='modal-text'>{title}</h2>
	<p class='modal-text'>{text}</p>
	<div class="proposition">
		<p class='modal-text'>Are you sure ?</p>
	</div>
	<div class="container-btn">
		<div class="btn-holder">
			<button class="modal-button" on:click={() => modal.hide()}>
				APPLY
			</button>
			<button class="modal-button" on:click={() => modal.hide()}>
				CANCEL
			</button>
		</div>
	</div>
</Modal>

<style>

	.modal-button {
		background: #f582ae;
		border-radius: 3px;
		padding: 25px 30px;
		border: 1px solid #f582ae;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #172c66;
	}

	.modal-button:hover {
		background-color: #F9BCC9;
		border: 1px solid #F9BCC9;
		cursor: pointer;
	}

	.modal-text {
		color: #fef6e4;
	}
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.firstButton {
		background-color: #f582ae;
		justify-content: center;
		width: 100px;
		height: 80px;
	}

	button {
		position: block;
		background: #f582ae;
		border-radius: 3px;
		width: 80px;
		height: 50px;
	}
	.selected {
		background: #f9bcc9;
		color: #d04077;
	}
	.proposition {
		flex-direction: row;
		display: flex;
		justify-content: flex-end;
		margin-right: 100px;
		color: #fef6e4;
	}

	.container-btn .btn-holder {
		flex-direction: row;
		display: flex;
		justify-content: flex-end;
	}
	.container-btn .btn-holder button:nth-child(2) {
		margin-left: 30px;
	}
</style>
