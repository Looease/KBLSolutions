<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
        // this file is called [slug].svelte
		const res = await this.fetch(`products/landing/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { group: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let group;
</script>

<style>
*{
	list-style: none;
}
ul{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
ul li{
	margin: 20px;
}
</style>

<h1>{group.name}</h1>

<ul>
    {#each group.products as product}
        <li>
			<a href="/products/{product.slug}">

				<!-- The [0] means get the first image from the array -->
				<img src={product.images[0].src} alt={product.images[0].alt} />

				<h2>{product.name}</h2>
				<p>From £{product.price}</p>
			</a>
        </li>
    {/each}
</ul>
