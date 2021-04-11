<script>
	export let state = 0;
	export let profile = "saksham";
	/**
	 * 0: not logged in, genereal page
	 * 1: logged and all ok
	 * 2: changing security settings
	 * 3: logging in
	*/
	import Login from './routes/Login.svelte';
	import Home from './routes/Home.svelte';
	import NewAccount from './routes/NewAccount.svelte';
	import Settings from './routes/Settings.svelte';
	import Tailwindcss from './Tailwindcss.svelte';
	import Carousel from './components/Carousel.svelte';
</script>

<button on:click={() => {state ++;state=state%5}}>
go next{">"}
</button>

<main>
	<slot>
		{#if state == 0}
		<Login />
		{:else if state == 1} 
		<Home />
		{:else if state == 2} 
		<Settings />
		{:else if state == 3} 
		<!-- <Home {profile}/> -->
		<Carousel jsonData={["./favicon.png","./logo.svg","./logo.svg","./logo.svg"]}/>
		{:else if state == 4} 
			<NewAccount />
		{/if}
	</slot>
</main>
<Tailwindcss />
<style>
	main {
		/* padding: 1em; */
		margin: 0 auto;
	}
</style>
