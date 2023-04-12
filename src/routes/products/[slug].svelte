<script context="module">
	export async function preload({ params, query }) {
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

	import Quickquote from '../../components/Quickquote.svelte'
	import Sidebar from '../../components/Sidebar.svelte';
	onMount(() => {

		const featureImg = document.querySelector('.feature-image');
		document.querySelectorAll('.thumbnails img').forEach( image => {
			image.addEventListener('click', function() {
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
			width: 60%;
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
		</div> 
			</article> 
		</aside>
	 	<main class="col-sm-6">
			<article class="content-body">

				<h1 class="title">{products.name}</h1>
				<p>{products.teaser}</p>
				{#if products.features}
					<ul class="list-check mb-4" >
						{#each products.features as feature}
							<li>{feature}</li>
						{/each}
					</ul>
				{/if}

				{#if products.subprice}
				<h5>Select an item:</h5>
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
					<br>
				<ul class="priceContainer">		
					<ul> 
						<li>{selected && selected.quantityOpt1 ? selected.quantityOpt1 + ' items:' : ''}</li>
						<li class="price h4">{selected ? selected.priceOpt1 : ''}</li>
					</ul>
			
					<ul>
						<li>{selected && selected.quantityOpt2 ? selected.quantityOpt2 + ' items:' : ''}</li>
						<li class="price h4">{selected ? selected.priceOpt2 : ''}</li>
					</ul>

					<ul>
						<li>{selected && selected.quantityOpt3 ? selected.quantityOpt3 + ' items:' : ''}</li>
						<li class="price h4">{selected ? selected.priceOpt3 : ''}</li>
					</ul>
					
				</ul>
			</div>
				<br>
				{:else}
				<span class="price h4">
						{#if products.price}
							<h2>£{products.price}</h2>
							{:else}
							<h5>Contact for pricing</h5>
						{/if}
				</span>

				{/if}
					<Quickquote productName={products.name} productSize={selected ? products.name && selected.text : ''} />
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
			    	</div> 

			    </div> 

			    </div> 
			    </section>

    </div>


<Sidebar />


		</div> 

	</div> 

	</div> 
</section>
