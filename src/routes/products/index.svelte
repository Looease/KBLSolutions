<script>
    import products from './_products.js';
    // Crude check to see if it's a group or single product
    function getPath(group) {
        return !!group.products ? `/products/landing/${group.slug}`: `/products/${group.slug}`;
    }
</script>

<h1>Products and Services</h1>


<ul>
    {#each products as group}
        <li>
            <a href={getPath(group)}>

                <!-- The [0] means get the first image from the array -->
                <img src={group.images[0].src} alt={group.images[0].alt} />

                <h2>{group.name}</h2>
            </a>
        </li>
    {/each}
</ul>



<!-- <style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>



<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p> -->
