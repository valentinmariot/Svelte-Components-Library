<script>
<<<<<<< HEAD
	import PasswordChecker from "./components/PasswordChecker/Password-checker.svelte";
	import SwitchSection from "./components/Switch/SwitchSection.svelte";
	import ToolbarSection from "./components/Toolbar/ToolbarSection.svelte";
	import Omelette from "./components/Omelette/Omelette.svelte";
	import Loader from "./components/Loader/Loader.svelte";
	import Modal from "./components/Modal/Modal.svelte";
	import PopUp from "./components/PopUp/PopUp.svelte";
	import Checkbox from "./components/Checkbox/Checkbox.svelte";
</script>

<div class="container">
	<h1>Omelette Library</h1>
	<p />
	<section class="m-top">
		<h2>Menu</h2>
		<hr />

		<ToolbarSection />

		<legend>
			<h3>Properties :</h3>

			<li>
				<span class="title">isRight</span>:
				<p>
					place toolbar to the right side by default is placed to the left side
				</p>
			</li>
			<li>
				<span class="title">isDisabled </span>:
				<p>to disable a link</p>
			</li>
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
		<h2>PasswordChecker</h2>
		<hr />
		<div class="m-top">
			<PasswordChecker
				lenght_characters={10}
				uppercase={true}
				special_charact={true}
				number={true}
				face={true}
			/>
			<legend>
				<h3>Properties :</h3>
				<ul>
					<li>
						<span class="title">enght_characters </span>:
						<p>checks the lenght of characters</p>
					</li>
					<li>
						<span class="title">uppercase</span>:
						<p>checks if password has uppercase letters</p>
					</li>
					<li>
						<span class="title">special_charact</span>:
						<p>checks if password has special characters</p>
					</li>
					<li>
						<span class="title">number</span>:
						<p>checks if password has numbers</p>
					</li>
					<li>
						<span class="title">face</span>:
						<p>enable face emoji</p>
					</li>
				</ul>
			</legend>
		</div>
	</section>

	<section class="m-top">
		<h2>Omelette</h2>
		<hr />

		<Omelette />

		<legend>
			<h3>Properties :</h3>
		</legend>
	</section>

	<section class="m-top">
		<h2>Loader</h2>
		<hr />
		<Loader isLoading />

		<legend>
			<h3>Properties :</h3>
		</legend>
	</section>
	<!-- ! ici composant s'affiche pas -->
	<section class="m-top">
		<h2>Modal</h2>
		<hr />
		<Modal />

		<legend>
			<h3>Properties :</h3>
		</legend>
	</section>

	<section class="m-top">
		<h2>PopUp</h2>
		<hr />
		<PopUp />

		<legend>
			<h3>Properties :</h3>
		</legend>
	</section>
	<!-- ! doesn't work -->
	<!-- ? En ajoutant un de valeurs indiqués dans prop, il y a pas d'affichage ? -->
	<section class="m-top">
		<h2>Checkbox</h2>
		<hr />
		<Checkbox />

		<legend>
			<h3>Properties :</h3>
		</legend>
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

	.title {
		font-weight: 700;
		font-size: 1.125rem;
		text-decoration: underline;
	}
</style>
=======
  import Card from './components/Card/Card.svelte'

  let title ="Beyonce Knowles" ;
  let shortDescription = "Chanteuse afro-américaine née le 04 septembre 1981, elle est l'une des artistes les plus populaires de sa génération." ;
  let longDescription ="Et magnis Rheni difficultatibus cogitationibus convolantibus Rheni suspendere cum quid attonitus capesseret prope nimia multis fluminis obrutis suspendere conpage vetabantur prope pontem difficultatibus cum vi inpossibile ad multis callibus telis capesseret Rauracum vi supercilia resistente itaque vetabantur quid Romani fluminis suspendere supercilia Rheni nive quid Romani convolantibus plurimis cogitationibus conpage." ;
  let listIcons = [ "X", "O", "I"]
</script>

<Card  
  title={title} 
  shortDescription={shortDescription}
  longDescription={longDescription}  
  listIcons={listIcons} 
/>

>>>>>>> 1b7d2be (Card with css and action)
