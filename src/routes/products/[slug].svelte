<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`products/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { products: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let products;
</script>

<style>
    .hero {
        background-color: #ffffff;
    }
    .content {
        background-color: #f6f7f9;
    }
</style>

<svelte:head>
	<title>{products.name} - KBL Solutions</title>
</svelte:head>

<article>

    <div class="hero">

        {#if products.images}
            <figure>
                {#each products.images as {alt, src}}
                    <img {alt} {src}>
                {/each}
            </figure>
        {/if}

        <h1>{products.name}</h1>
        <p>{products.teaser}</p>

        <!-- Use Svelte to loop over features (only show if present) -->
        {#if products.features}
            <ul>
                {#each products.features as feature}
                    <li>{feature}</li>
                {/each}
            </ul>
        {/if}

        {#if products.price}
            <h2>£{products.price}</h2>
        {/if}

        <!--
            Quick quote request form
            - This could be a component?
        -->

    </div>

    <div class="content">

        <h3>Description</h3>
        <p>{products.description}</p>

        <!-- Use Svelte to loop over downloads (only show if present) -->
        {#if products.downloads}
            <ul>
                {#each products.downloads as {name, file}}
                    <li>
                        <a href={file}>{name}</a>
                    </li>
                {/each}
            </ul>
        {/if}

        <h3>Specifications</h3>
        <dl>
            {#each products.specifications as {label, value}}
                <dt>{label}</dt>
                {#if value}
                    <dd> {value}</dd>
                {/if}
            {/each}
        </dl>

    </div>

    <!--
        Sidebar (aside)
        - This could be a component?
    -->

</article>
