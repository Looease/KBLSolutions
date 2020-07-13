<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import Sidebar from '../components/Sidebar.svelte';

</script>

<Nav />

<main>
	<slot></slot>

</main>

<Footer />
