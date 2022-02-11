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

	import { onMount } from 'svelte';

	import Sidebar from '../../components/Sidebar.svelte';

	/* onMount in Svelte runs after
	 the component has 'loaded'/rendered */
	onMount(() => {

		// Store a reference of the feature image
		const featureImg = document.querySelector('.feature-image');

		// Loop over all 'thumbnails' and listen for a click
		document.querySelectorAll('.thumbnails img').forEach( image => {
			image.addEventListener('click', function() {

				// Set feature image src as thumbnail src
				featureImg.src = this.src;
			});
		});
	});

	let selected;

	let chosenItem = '';

</script>

<style>
		*{
		list-style: none;
		}
		article{
			padding-top: 80px;
		}
     .content {
        background-color: #f6f7f9;
    }
		.pdf{
			width: 30px;
		}
		td{
			width: 100%;
		}
		figure{
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.feature-image{
			max-width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.thumbnails{
			display: flex;
			flex-direction: row;
			justify-content: center;
		}
		.thumbnails img{
			margin: 0 5px 0 5px;
			max-width: 40px;
			max-height: 40px;
		}
		h4, .subprice{
			margin-left: 5%;
		}
		li{
			margin-bottom: 5px;
		}
		select{
        margin: 1% 0 3% 0;
        width: 100px;
        height: 35px;
        border-radius: 4px;
    	}
		.priceContainer{
			width: 50%;
			display: flex;
			justify-content: space-between;
		}
		@media screen and (max-width:1350px){
			.priceContainer{
			width: 65%;
		}
	}
		@media screen and (max-width:1200px){
			.priceContainer{
			padding-top: 10px;
			padding-bottom: 10px;
			width: 100%;
			display: flex;
			flex-direction: column
		}
	}
		@media screen and (max-width:600px){
			.feature-image{
			padding-right: 5%;
			max-width: 95%;
			height: auto;
			}
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
			<img alt={products.images[0].alt} src={products.images[0].src} class="feature-image"/>
		</figure>
		<div class="thumbnails">
			{#each products.images as {alt, src}}
					<img {alt} {src} />
            {/each}
		</div>
    {/if}
		</div> <!-- img-big-wrap.// -->
			</article> <!-- gallery-wrap .end// -->
			<br>

			{#if products.subprice}
				<h4 class="price">Price</h4>
				<ul class="subprice">
					{#each products.subprice as subprice}
						<li>{subprice}</li>
					{/each}
				</ul>
			{/if}
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
				<h5>Select a size:</h5>

				<form on:submit|preventDefault class="form-">
					<select bind:value={selected} on:blur="{() => chosenItem = ''}">
						{#each products.subprice as product}
							<option value={product}>
								{product.text}
								</option>
							
						{/each}
					</select>
				</form>
				<div>
					Price per item:
					<br><br>
				<ul class="priceContainer">
					<ul>
						<li>1-10 items</li>
						<li class="price h4">{selected ? selected.price1to10 : '[waiting...]'}</li>
					</ul>
					<ul>
						<li>10+ items:</li>
						<li class="price h4">{selected ? selected.price10 : '[waiting...]'}</li>
					</ul>
					<!-- {#if testers.price100 != null}
					<ul>
						<li>100+</li>
						<li class="price h4">{selected ? selected.price10 : '[waiting...]'}</li>
					</ul>
					{/if} -->
				</ul>
			</div>
				<br>
				<!-- <span class="price h4">
						{#if products.price}
							<h2>£{products.price}</h2>
						{/if}
				</span> -->

					<!-- Passing the product name as a 'prop'-->
					<section class="padding-bottom">
						<div class="card card-body">
						  <h4 class="title py-3">Request a quote</h4>
						  <form action="https://formspree.io/mrgljdow" method="POST" class="quickQuoteForm">
							<div class="form-group">
							  <input class="form-control" name="{products.name}" value="{products.name}" type="text">
							  <input class="form-control" name="{selected ? products.name && selected.text : '[waiting...]'}" value="{selected ? selected.text : '[waiting...]'}" type="text">

							</div>
							<div class="form-group">
							  <div class="input-group">
								<input class="form-control" placeholder="Quantity" name="Quantity" type="text">
							  </div>
							</div>
							<div class="form-group text-muted">
							  <label class="form-check form-check-inline">
								<input class="form-check-input" type="checkbox" value="Request Price" name="Request Price">
								<div class="form-check-label">Request price</div>
							  </label>
							  <label class="form-check form-check-inline">
								<input class="form-check-input" type="checkbox" value="More info" name="More info">
								<div class="form-check-label">Request more information</div>
							  </label>
							</div>
							<label>
							  <input class="form-control" type="text" name="name" placeholder="Your Name">
							</label>
							<label>
							  <input class="form-control" type="email" name="_replyto" placeholder="Your Email address">
							</label>
							<div class="form-group">
							  <input class="btn  btn-primary"  type="submit" value="Send">
							  <!-- <button class="btn btn-warning">Request for quote</button> -->
							</div>
						  </form>
						</div>
					  </section>

			</article>
		</main>



    </div>
</article>
<section class="section-name padding-y bg">
	<div class="container">
		<div class="row">
    	<div class="content">
				<div class="col-md-8">
	        <h3 class="title-description">Description</h3>
	        <li>{products.description}</li>




	        <!-- Use Svelte to loop over downloads (only show if present) -->
	        {#if products.downloads}
	            <ul>
					<br>
					<h3>Downloads</h3>
	                {#each products.downloads as {name, file}}
	                    <li>
	                        <img src="img/pdf.jpg" alt="PDF Download" class="pdf"><a href={file}>{name}</a>
	                    </li>
	                {/each}
	            </ul>
	        {/if}
					<section class="section-name padding-y bg">
			    <div class="container">
						  <h3>Specifications</h3>
			    <div class="row">
			    	<div class="col-md-8">
			    		<table class="table table-bordered">
									{#each products.specifications as {label, value}}
							 <tr><dt>{label}</dt></tr>
											{#if value}
							 <td><dd> {value}</dd></td>
											{/if}
									{/each}
			    		</table>
			    	</div> <!-- col.// -->

			    </div> <!-- row.// -->

			    </div> <!-- container .//  -->
			    </section>

    </div>


<Sidebar />


		</div> <!-- box.// -->

	</div> <!-- row.// -->

	</div> <!-- container .//  -->
</section>
