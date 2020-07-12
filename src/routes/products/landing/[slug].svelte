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
h1{
	padding-top: 150px;
	padding-left: 50px;
}
section{
	width: 100%;
}
.row{
	margin-right: 10px;
	margin-left: 10px;
	display: flex;
	flex-wrap: wrap;
}
.container, .row{
	width: 100%;
	display: flex;
	flex-direction: row;
}
.card{
	margin: 2%;
	position: relative;
	width: 20%;
	max-height: 400px;
	border: 1px solid #dcdee3;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	object-fit: contain;

}
img{
	padding: 5%;
	max-width: 240px;
	max-height: 240px;
}
.black{
	color: black;
}
@media (max-width: 992px){
.container,	.row{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.card{
		width: 40%;
		margin-left: 20%;
	}
	img{
		width: 90%;
	}
}
@media (max-width: 750px){
	.card{
		width: 60%;
		margin-left: 10%;
	}
	img{
		width: 90%;
	}
}

</style>

<h1>{group.name}</h1>
<section class="section-name  padding-y-sm" id="grid">
<ul class="container">
<ul class="row">
    {#each group.products as product}
        <li class="card card-product-grid">
			<a href="/products/{product.slug}">

				<!-- The [0] means get the first image from the array -->
				<img src={product.images[0].src} alt={product.images[0].alt} />

				<h6>{product.name}</h6>
				<p class="black">From £{product.price}</p>
			</a>
        </li>
    {/each}
</ul>
</ul>
</section>
