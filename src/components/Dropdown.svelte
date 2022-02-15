<script>
    
	let testers = [
        { text: `A2`, productCode: `ABSLA2`, price1to10:`£43.71`, price10: `£42.41`, price100: null },
        { text: `A1`, productCode: `ABSLA1`, price1to10:`£59.68`, price10: `£57.89`, price100: null },
        { text: `A0`, productCode: `ABSLA0,`, price1to10:`£92.09`, price10: ` £89.34`, price100: null },
        { text: `2030`, productCode: `ABSL2030,`, price1to10:`£50.21`, price100: `£48.71`, price100: null },
        { text: `3040`, productCode: `ABSL3040`, price1to10:`£68.13`, price10: `£66.10`, price100: null },
	];

	let selected;

	let chosenItem = '';

</script>

<h5>Select Size</h5>

<form on:submit|preventDefault class="form-">
	<select bind:value={selected} on:blur="{() => chosenItem = ''}">
		{#each testers as product}
			<option value={product}>
				{product.text}
                </option>
		{/each}
	</select>
</form>
{#if testers.price1to10 !== null}
 <h5>1-10</h5> 
<p>{selected ? selected.price1to10 : '[waiting...]'}</p>
{/if}
{#if testers.price10 !== null}
<h5>10+</h5>
<p>{selected ? selected.price10 : '[waiting...]'}</p>
{/if}




<style>
    select{
        margin: 3% 0 3% 0;
        width: 100px;
        height: 35px;
        border-radius: 8px;
    }
</style>