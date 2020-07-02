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

<!-- <Quickquote.svelte/> -->

<style>
		*{
		list-style: none;
		}
    /* .hero {
        background-color: #fff;

    } */
     .content {
        background-color: #f6f7f9;
    }
		.pdf{
			width: 30px;
		}




</style>

<svelte:head>
	<title>{products.name} - KBL Solutions</title>
</svelte:head>

<article class="card">
	<div class="row no-gutters">
		<aside class="col-sm-6 border-right">
			<article class="gallery-wrap">
				<div class="img-big-wrap">
    <!-- <div class="hero"> -->
    {#if products.images}
        <figure>
            {#each products.images as {alt, src}}
                <img {alt} {src}>
            {/each}
        </figure>
    {/if}
		</div> <!-- img-big-wrap.// -->
			</article> <!-- gallery-wrap .end// -->
	 </aside>
	 	<main class="col-sm-6">
			<article class="content-body">

							<h1 class="title">{products.name}</h1>
							<p>{products.teaser}</p>
        <!-- Use Svelte to loop over features (only show if present) -->
        {#if products.features}
            <ul class="list-check mb-4" >
                {#each products.features as feature}
                    <li>{feature}</li>
                {/each}
            </ul>
        {/if}
				<span class="price h4">
				{#if products.price}
						<h2>£{products.price}</h2>
				{/if}
				</span>

			</article>
		</main>

        <!--
            Quick quote request form
            - This could be a component?
        -->

    </div>
</article>
<section class="section-name padding-y bg">
	<div class="container">
		<div class="row">
    	<div class="content">
				<div class="col-md-8">
	        <h3 class="title-description">Description</h3>
	        <p>{products.description}</p>

	        <!-- Use Svelte to loop over downloads (only show if present) -->
	        {#if products.downloads}
	            <ul>
	                {#each products.downloads as {name, file}}
	                    <li>
	                        <img src="img/pdf.jpg" alt="PDF Download" class="pdf"><a href={file}>{name}</a>
	                    </li>
	                {/each}
	            </ul>
	        {/if}

        <h3>Specifications</h3>
					<table class="table table-bordered">
        <dl>
            {#each products.specifications as {label, value}}
                <dt>{label}</dt>
                {#if value}
                    <dd> {value}</dd>
                {/if}
            {/each}
        </dl>
				</table>

    </div>

    <!--
        Sidebar (aside)
        - This could be a component?
    -->
		</div> <!-- box.// -->

	</div> <!-- row.// -->

	</div> <!-- container .//  -->
</section>
