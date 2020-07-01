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