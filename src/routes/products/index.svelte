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
