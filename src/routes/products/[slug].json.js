import products from './_products.js';

const lookup = new Map();
products.forEach( group => {
	// Check if group or single product
	if (group.products) {
		group.products.forEach(product => {
			lookup.set(product.slug, JSON.stringify(product));
		});
	} else {
		lookup.set(group.slug, JSON.stringify(group));
	}
});

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
