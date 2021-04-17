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
	import Profile from './routes/Profile.svelte';
	import Search	 from './routes/Search.svelte';
	import Feed	 from './routes/Feed.svelte';
	import Cast	 from './routes/Cast.svelte';
</script>

<button on:click={() => {state ++;state=state%8}}>
go next{">"}
</button>

<main>
	<slot>
		{#if state == 0}
		<Cast />
		{:else if state == 1}
		<Search />
		{:else if state == 2} 
		<Profile />
		{:else if state == 3} 
		<Home />
		{:else if state == 4} 
		<Settings />
		{:else if state == 5} 
		great
		<!-- <Home {profile}/> -->
		<!-- <Carousel jsonData={["./favicon.png","./logo.svg","./logo.svg","./logo.svg"]}/> -->
		{:else if state == 6} 
			<NewAccount />
		{:else if state == 7} 
		<Login />

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
