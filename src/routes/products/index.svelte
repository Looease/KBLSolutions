<script>
    import products from './_products.js';
    // Crude check to see if it's a group or single product
    function getPath(group) {
        return !!group.products ? `/products/landing/${group.slug}`: `/products/${group.slug}`;
    }

</script>

<style>
*{
	list-style: none;
}
h1{
	padding-top: 150px;
	padding-left: 50px;
}
h6{
  padding-left: 10px;
}
section{
	width: 100%;
}
.container, .row{
	width: 100%;
	display: flex;
	flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
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
@media (max-width: 992px){
h1{
	margin: 0;
	padding: 150px 0px 0px 0px;
}
.container{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.card{
		width: 33%;
		margin: 0px 33% 10px 33%;
	}
	img{
		width: 50%;
		height: auto;
	}
}
@media (max-width: 750px){
	.card{
		width: 75%;
		margin: 0px 13% 10px 17%;
		padding: 0px;
	}
	img{
		width: 90%;
	}
	h6{
		padding: 5px;
		text-align: center;
	}
}


</style>

<h1>Products and Services</h1>

<section class="section-name  padding-y-sm" id="grid">

<ul class="container">
<ul class="row">
    {#each products as group}
        <li class="card card-product-grid">
            <a href={getPath(group)}>

                <!-- The [0] means get the first image from the array -->
                <img src={group.images[0].src} alt={group.images[0].alt} />

                <h6>{group.name}</h6>
            </a>
        </li>
    {/each}
</ul>
</ul>
</section>
