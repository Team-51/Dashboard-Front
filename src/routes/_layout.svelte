<script>
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>


<Tailwindcss />

<Nav {segment}/>

<main>
	<slot></slot>
</main>