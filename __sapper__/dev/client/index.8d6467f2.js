import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_each_argument, v as validate_slots, e as element, a as space, t as text, c as claim_element, f as children, b as claim_space, g as claim_text, h as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, p as destroy_each } from './client.d0bc9304.js';

const products = [
    {
        slug: 'forcourt-signs',
        name: 'Forecourt/Pavement Signs',
        teaser: '',
        images: [{
            alt: 'Some alternative text for accessibility',
            src: 'https://www.adversetdisplay.co.uk/images/cms/products_23_0_detail.jpg?1542105898'
        }],
        products: [
            {
                slug: 'forecourt-swinger-swing',
                name: 'Swinger Swing Sign - Panel/ Poster',
                teaser: 'Our top selling Swinger model. Contact us for print prices',
                images: [{
                    alt: 'Some alternative text for accessibility',
                    src: 'https://www.adversetdisplay.co.uk/images/cms/products_23_0_detail.jpg?1542105898'
                },
                {
                    alt: 'alt text',
                    src: 'https://www.adversetdisplay.co.uk/images/cms/products_23_2_detail.jpg?1542105898'
                }],
                features: [
                    'Gloss white aluminium panel (500 x 750mm) – ideal for direct to surface print or vinyl graphics.',
                    'Alternative top opening polycarbonate double sided A2 poster pocket with magnetic seals.'
                ],
                description: 'Gloss white aluminium panel (500 x 750mm) – ideal for direct to surface print or vinyl graphics. Alternative top opening polycarbonate double sided A2 poster pocket with magnetic seals. Poster pocket designed with header area for permanent branding - ideal for either direct to surface print or vinyl graphics. Stylish steel tube frame (32mm diameter) – available in black or white from stock. Frames available in any RAL colour (minimum order quantity 25). Patented D-Flex panel hangers make panel fitting quick and easy. Solid black recycled PVC base provides excellent stability. Clip-on Tactical Headers also available, giving extra promotional space at minimal cost.',
                specifications: [{
                    label: 'Swinger Swing Sign Panel(solid black PVC base) - Unprinted'
                },
                {
                    label: 'External Size(mm)',
                    value: '367 x 280'
                }],
                downloads: [{
                    name: 'Lockable Poster Specification',
                    file: 'spec/lockposterspec.pdf'
                },
                {
                    name: 'Lockable Poster Showboard',
                    file: 'spec/lockposter.pdf'
                }],
                price: '58'
            }
        ]
    },
    {
        slug: 'covid19',
        name: 'COVID-19',
        description: 'Our range of Covid-19 signage solutions to help your customers maintain social distancing by providing information and reminders.',
        images: [{
            alt: 'Some alternative text for accessibility',
            src: 'https://looease.github.io/KBL/img/sign/covid/55.jpg'
        }],
        products: [
            {
                slug: 'floor-stickers',
                name: 'Floor Stickers',
                teaser: 'Floor Stickers are the perfect way to advise on social distancing',
                images: [{
                    alt: 'Wait here red floor sticker',
                    src: 'https://looease.github.io/KBL/img/sign/covid/55.jpg'
                }],
                features: [
                    'Generic social distancing designs available or custom',
                    'Full colour printed',
                    'Printed on permanent monomeric vinyl then laminated with anti slip laminate'
                ],
                description: 'Floor stickers are the perfect way to advise on social distancing. Our Floor stickers are full colour printed on a permanent monomeric vinyl then laminated with a textured anti-slip laminate. These custom floor stickers can then be cut to custom shapes using a Zund CNC cutter, so there are no die or setup charges, even with low quantities.',
                specifications: [
                    {
                        label: 'Width',
                        value: '1000mm'
                    },
                    {
                        label: 'Length',
                        value: '1000mm'
                    }
                ],
                downloads: [{
                    name: 'Floor Sticker Specification',
                    file: 'spec/lockposterspec.pdf'
                }],
                price: '45'
            }
        ]
    },
    {
        slug: 'compact-screen',
        name: 'Compact Privacy Screen',
        teaser: 'Block off the Incident or Emergency Scene with MDI’s Compact ® Privacy Screen.',
        images: [{
            alt: 'Privacy screen covering vehicle',
            src: 'https://looease.github.io/KBL/img/sign/compact/43.jpg'
        }],
        features: [
            'Tool less setup be one person in approximately four minutes',
        ],
        description: 'At the scene of an emergency, the Compact Privacy Screen protects the confidentiality of victims while guarding against gawkers, helping vehicle and foot traffic flow safely. Unlike other screens which have to be transported on purpose built trailers, The Compact Privacy screen comes in 4 hand held carry bags that can be easily transported in the back of a Vehicle.',
        specifications: [
            {
                label: 'Width',
                value: '1000mm'
            },
            {
                label: 'Length',
                value: '1000mm'
            }
        ],
        downloads: [{
            name: 'Compact Privacy Screen Specification',
            file: 'spec/lockposterspec.pdf'
        }]
    }
];

/* src/routes/products/index.svelte generated by Svelte v3.23.2 */
const file = "src/routes/products/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	return child_ctx;
}

// (13:4) {#each products as group}
function create_each_block(ctx) {
	let li;
	let a;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let h2;
	let t1_value = /*group*/ ctx[0].name + "";
	let t1;
	let a_href_value;
	let t2;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			img = element("img");
			t0 = space();
			h2 = element("h2");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true });
			var a_nodes = children(a);
			img = claim_element(a_nodes, "IMG", { src: true, alt: true });
			t0 = claim_space(a_nodes);
			h2 = claim_element(a_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, t1_value);
			h2_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t2 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*group*/ ctx[0].images[0].src)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*group*/ ctx[0].images[0].alt);
			add_location(img, file, 17, 16, 465);
			add_location(h2, file, 19, 16, 542);
			attr_dev(a, "href", a_href_value = getPath(/*group*/ ctx[0]));
			add_location(a, file, 14, 12, 348);
			add_location(li, file, 13, 8, 331);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, img);
			append_dev(a, t0);
			append_dev(a, h2);
			append_dev(h2, t1);
			append_dev(li, t2);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(13:4) {#each products as group}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let ul;
	let each_value = products;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Products and Services");
			t1 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Products and Services");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 8, 0, 255);
			add_location(ul, file, 11, 0, 288);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*getPath, products*/ 0) {
				each_value = products;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(ul);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function getPath(group) {
	return !!group.products
	? `/products/landing/${group.slug}`
	: `/products/${group.slug}`;
}

function instance($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Products> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Products", $$slots, []);
	$$self.$capture_state = () => ({ products, getPath });
	return [];
}

class Products extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Products",
			options,
			id: create_fragment.name
		});
	}
}

export default Products;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOGQ2NDY3ZjIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJvZHVjdHMvX3Byb2R1Y3RzLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9wcm9kdWN0cy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvZHVjdHMgPSBbXG4gICAge1xuICAgICAgICBzbHVnOiAnZm9yY291cnQtc2lnbnMnLFxuICAgICAgICBuYW1lOiAnRm9yZWNvdXJ0L1BhdmVtZW50IFNpZ25zJyxcbiAgICAgICAgdGVhc2VyOiAnJyxcbiAgICAgICAgaW1hZ2VzOiBbe1xuICAgICAgICAgICAgYWx0OiAnU29tZSBhbHRlcm5hdGl2ZSB0ZXh0IGZvciBhY2Nlc3NpYmlsaXR5JyxcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vd3d3LmFkdmVyc2V0ZGlzcGxheS5jby51ay9pbWFnZXMvY21zL3Byb2R1Y3RzXzIzXzBfZGV0YWlsLmpwZz8xNTQyMTA1ODk4J1xuICAgICAgICB9XSxcbiAgICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzbHVnOiAnZm9yZWNvdXJ0LXN3aW5nZXItc3dpbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdTd2luZ2VyIFN3aW5nIFNpZ24gLSBQYW5lbC8gUG9zdGVyJyxcbiAgICAgICAgICAgICAgICB0ZWFzZXI6ICdPdXIgdG9wIHNlbGxpbmcgU3dpbmdlciBtb2RlbC4gQ29udGFjdCB1cyBmb3IgcHJpbnQgcHJpY2VzJyxcbiAgICAgICAgICAgICAgICBpbWFnZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGFsdDogJ1NvbWUgYWx0ZXJuYXRpdmUgdGV4dCBmb3IgYWNjZXNzaWJpbGl0eScsXG4gICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vd3d3LmFkdmVyc2V0ZGlzcGxheS5jby51ay9pbWFnZXMvY21zL3Byb2R1Y3RzXzIzXzBfZGV0YWlsLmpwZz8xNTQyMTA1ODk4J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhbHQ6ICdhbHQgdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vd3d3LmFkdmVyc2V0ZGlzcGxheS5jby51ay9pbWFnZXMvY21zL3Byb2R1Y3RzXzIzXzJfZGV0YWlsLmpwZz8xNTQyMTA1ODk4J1xuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICdHbG9zcyB3aGl0ZSBhbHVtaW5pdW0gcGFuZWwgKDUwMCB4IDc1MG1tKSDigJMgaWRlYWwgZm9yIGRpcmVjdCB0byBzdXJmYWNlIHByaW50IG9yIHZpbnlsIGdyYXBoaWNzLicsXG4gICAgICAgICAgICAgICAgICAgICdBbHRlcm5hdGl2ZSB0b3Agb3BlbmluZyBwb2x5Y2FyYm9uYXRlIGRvdWJsZSBzaWRlZCBBMiBwb3N0ZXIgcG9ja2V0IHdpdGggbWFnbmV0aWMgc2VhbHMuJ1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdHbG9zcyB3aGl0ZSBhbHVtaW5pdW0gcGFuZWwgKDUwMCB4IDc1MG1tKSDigJMgaWRlYWwgZm9yIGRpcmVjdCB0byBzdXJmYWNlIHByaW50IG9yIHZpbnlsIGdyYXBoaWNzLiBBbHRlcm5hdGl2ZSB0b3Agb3BlbmluZyBwb2x5Y2FyYm9uYXRlIGRvdWJsZSBzaWRlZCBBMiBwb3N0ZXIgcG9ja2V0IHdpdGggbWFnbmV0aWMgc2VhbHMuIFBvc3RlciBwb2NrZXQgZGVzaWduZWQgd2l0aCBoZWFkZXIgYXJlYSBmb3IgcGVybWFuZW50IGJyYW5kaW5nIC0gaWRlYWwgZm9yIGVpdGhlciBkaXJlY3QgdG8gc3VyZmFjZSBwcmludCBvciB2aW55bCBncmFwaGljcy4gU3R5bGlzaCBzdGVlbCB0dWJlIGZyYW1lICgzMm1tIGRpYW1ldGVyKSDigJMgYXZhaWxhYmxlIGluIGJsYWNrIG9yIHdoaXRlIGZyb20gc3RvY2suIEZyYW1lcyBhdmFpbGFibGUgaW4gYW55IFJBTCBjb2xvdXIgKG1pbmltdW0gb3JkZXIgcXVhbnRpdHkgMjUpLiBQYXRlbnRlZCBELUZsZXggcGFuZWwgaGFuZ2VycyBtYWtlIHBhbmVsIGZpdHRpbmcgcXVpY2sgYW5kIGVhc3kuIFNvbGlkIGJsYWNrIHJlY3ljbGVkIFBWQyBiYXNlIHByb3ZpZGVzIGV4Y2VsbGVudCBzdGFiaWxpdHkuIENsaXAtb24gVGFjdGljYWwgSGVhZGVycyBhbHNvIGF2YWlsYWJsZSwgZ2l2aW5nIGV4dHJhIHByb21vdGlvbmFsIHNwYWNlIGF0IG1pbmltYWwgY29zdC4nLFxuICAgICAgICAgICAgICAgIHNwZWNpZmljYXRpb25zOiBbe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1N3aW5nZXIgU3dpbmcgU2lnbiBQYW5lbChzb2xpZCBibGFjayBQVkMgYmFzZSkgLSBVbnByaW50ZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRXh0ZXJuYWwgU2l6ZShtbSknLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzM2NyB4IDI4MCdcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBkb3dubG9hZHM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdMb2NrYWJsZSBQb3N0ZXIgU3BlY2lmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6ICdzcGVjL2xvY2twb3N0ZXJzcGVjLnBkZidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0xvY2thYmxlIFBvc3RlciBTaG93Ym9hcmQnLFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiAnc3BlYy9sb2NrcG9zdGVyLnBkZidcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBwcmljZTogJzU4J1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNsdWc6ICdjb3ZpZDE5JyxcbiAgICAgICAgbmFtZTogJ0NPVklELTE5JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdPdXIgcmFuZ2Ugb2YgQ292aWQtMTkgc2lnbmFnZSBzb2x1dGlvbnMgdG8gaGVscCB5b3VyIGN1c3RvbWVycyBtYWludGFpbiBzb2NpYWwgZGlzdGFuY2luZyBieSBwcm92aWRpbmcgaW5mb3JtYXRpb24gYW5kIHJlbWluZGVycy4nLFxuICAgICAgICBpbWFnZXM6IFt7XG4gICAgICAgICAgICBhbHQ6ICdTb21lIGFsdGVybmF0aXZlIHRleHQgZm9yIGFjY2Vzc2liaWxpdHknLFxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9sb29lYXNlLmdpdGh1Yi5pby9LQkwvaW1nL3NpZ24vY292aWQvNTUuanBnJ1xuICAgICAgICB9XSxcbiAgICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzbHVnOiAnZmxvb3Itc3RpY2tlcnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdGbG9vciBTdGlja2VycycsXG4gICAgICAgICAgICAgICAgdGVhc2VyOiAnRmxvb3IgU3RpY2tlcnMgYXJlIHRoZSBwZXJmZWN0IHdheSB0byBhZHZpc2Ugb24gc29jaWFsIGRpc3RhbmNpbmcnLFxuICAgICAgICAgICAgICAgIGltYWdlczogW3tcbiAgICAgICAgICAgICAgICAgICAgYWx0OiAnV2FpdCBoZXJlIHJlZCBmbG9vciBzdGlja2VyJyxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9sb29lYXNlLmdpdGh1Yi5pby9LQkwvaW1nL3NpZ24vY292aWQvNTUuanBnJ1xuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICdHZW5lcmljIHNvY2lhbCBkaXN0YW5jaW5nIGRlc2lnbnMgYXZhaWxhYmxlIG9yIGN1c3RvbScsXG4gICAgICAgICAgICAgICAgICAgICdGdWxsIGNvbG91ciBwcmludGVkJyxcbiAgICAgICAgICAgICAgICAgICAgJ1ByaW50ZWQgb24gcGVybWFuZW50IG1vbm9tZXJpYyB2aW55bCB0aGVuIGxhbWluYXRlZCB3aXRoIGFudGkgc2xpcCBsYW1pbmF0ZSdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmxvb3Igc3RpY2tlcnMgYXJlIHRoZSBwZXJmZWN0IHdheSB0byBhZHZpc2Ugb24gc29jaWFsIGRpc3RhbmNpbmcuIE91ciBGbG9vciBzdGlja2VycyBhcmUgZnVsbCBjb2xvdXIgcHJpbnRlZCBvbiBhIHBlcm1hbmVudCBtb25vbWVyaWMgdmlueWwgdGhlbiBsYW1pbmF0ZWQgd2l0aCBhIHRleHR1cmVkIGFudGktc2xpcCBsYW1pbmF0ZS4gVGhlc2UgY3VzdG9tIGZsb29yIHN0aWNrZXJzIGNhbiB0aGVuIGJlIGN1dCB0byBjdXN0b20gc2hhcGVzIHVzaW5nIGEgWnVuZCBDTkMgY3V0dGVyLCBzbyB0aGVyZSBhcmUgbm8gZGllIG9yIHNldHVwIGNoYXJnZXMsIGV2ZW4gd2l0aCBsb3cgcXVhbnRpdGllcy4nLFxuICAgICAgICAgICAgICAgIHNwZWNpZmljYXRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnV2lkdGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxMDAwbW0nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTGVuZ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMTAwMG1tJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBkb3dubG9hZHM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdGbG9vciBTdGlja2VyIFNwZWNpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiAnc3BlYy9sb2NrcG9zdGVyc3BlYy5wZGYnXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgcHJpY2U6ICc0NSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBzbHVnOiAnY29tcGFjdC1zY3JlZW4nLFxuICAgICAgICBuYW1lOiAnQ29tcGFjdCBQcml2YWN5IFNjcmVlbicsXG4gICAgICAgIHRlYXNlcjogJ0Jsb2NrIG9mZiB0aGUgSW5jaWRlbnQgb3IgRW1lcmdlbmN5IFNjZW5lIHdpdGggTURJ4oCZcyBDb21wYWN0IMKuIFByaXZhY3kgU2NyZWVuLicsXG4gICAgICAgIGltYWdlczogW3tcbiAgICAgICAgICAgIGFsdDogJ1ByaXZhY3kgc2NyZWVuIGNvdmVyaW5nIHZlaGljbGUnLFxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9sb29lYXNlLmdpdGh1Yi5pby9LQkwvaW1nL3NpZ24vY29tcGFjdC80My5qcGcnXG4gICAgICAgIH1dLFxuICAgICAgICBmZWF0dXJlczogW1xuICAgICAgICAgICAgJ1Rvb2wgbGVzcyBzZXR1cCBiZSBvbmUgcGVyc29uIGluIGFwcHJveGltYXRlbHkgZm91ciBtaW51dGVzJyxcbiAgICAgICAgXSxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBdCB0aGUgc2NlbmUgb2YgYW4gZW1lcmdlbmN5LCB0aGUgQ29tcGFjdCBQcml2YWN5IFNjcmVlbiBwcm90ZWN0cyB0aGUgY29uZmlkZW50aWFsaXR5IG9mIHZpY3RpbXMgd2hpbGUgZ3VhcmRpbmcgYWdhaW5zdCBnYXdrZXJzLCBoZWxwaW5nIHZlaGljbGUgYW5kIGZvb3QgdHJhZmZpYyBmbG93IHNhZmVseS4gVW5saWtlIG90aGVyIHNjcmVlbnMgd2hpY2ggaGF2ZSB0byBiZSB0cmFuc3BvcnRlZCBvbiBwdXJwb3NlIGJ1aWx0IHRyYWlsZXJzLCBUaGUgQ29tcGFjdCBQcml2YWN5IHNjcmVlbiBjb21lcyBpbiA0IGhhbmQgaGVsZCBjYXJyeSBiYWdzIHRoYXQgY2FuIGJlIGVhc2lseSB0cmFuc3BvcnRlZCBpbiB0aGUgYmFjayBvZiBhIFZlaGljbGUuJyxcbiAgICAgICAgc3BlY2lmaWNhdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1dpZHRoJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzEwMDBtbSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdMZW5ndGgnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMTAwMG1tJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBkb3dubG9hZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnQ29tcGFjdCBQcml2YWN5IFNjcmVlbiBTcGVjaWZpY2F0aW9uJyxcbiAgICAgICAgICAgIGZpbGU6ICdzcGVjL2xvY2twb3N0ZXJzcGVjLnBkZidcbiAgICAgICAgfV1cbiAgICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0cztcbiIsIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vX3Byb2R1Y3RzLmpzJztcbiAgICAvLyBDcnVkZSBjaGVjayB0byBzZWUgaWYgaXQncyBhIGdyb3VwIG9yIHNpbmdsZSBwcm9kdWN0XG4gICAgZnVuY3Rpb24gZ2V0UGF0aChncm91cCkge1xuICAgICAgICByZXR1cm4gISFncm91cC5wcm9kdWN0cyA/IGAvcHJvZHVjdHMvbGFuZGluZy8ke2dyb3VwLnNsdWd9YDogYC9wcm9kdWN0cy8ke2dyb3VwLnNsdWd9YDtcbiAgICB9XG48L3NjcmlwdD5cblxuPGgxPlByb2R1Y3RzIGFuZCBTZXJ2aWNlczwvaDE+XG5cblxuPHVsPlxuICAgIHsjZWFjaCBwcm9kdWN0cyBhcyBncm91cH1cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj17Z2V0UGF0aChncm91cCl9PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBUaGUgWzBdIG1lYW5zIGdldCB0aGUgZmlyc3QgaW1hZ2UgZnJvbSB0aGUgYXJyYXkgLS0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2dyb3VwLmltYWdlc1swXS5zcmN9IGFsdD17Z3JvdXAuaW1hZ2VzWzBdLmFsdH0gLz5cblxuICAgICAgICAgICAgICAgIDxoMj57Z3JvdXAubmFtZX08L2gyPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgIHsvZWFjaH1cbjwvdWw+XG5cblxuXG48IS0tIDxzdHlsZT5cblx0aDEsIGZpZ3VyZSwgcCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cblx0aDEge1xuXHRcdGZvbnQtc2l6ZTogMi44ZW07XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XG5cdH1cblxuXHRmaWd1cmUge1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0cCB7XG5cdFx0bWFyZ2luOiAxZW0gYXV0bztcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogNGVtO1xuXHRcdH1cblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U2FwcGVyIHByb2plY3QgdGVtcGxhdGU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuXG5cbjxwPjxzdHJvbmc+VHJ5IGVkaXRpbmcgdGhpcyBmaWxlIChzcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSkgdG8gdGVzdCBsaXZlIHJlbG9hZGluZy48L3N0cm9uZz48L3A+IC0tPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxRQUFRLEdBQUc7QUFDakIsSUFBSTtBQUNKLFFBQVEsSUFBSSxFQUFFLGdCQUFnQjtBQUM5QixRQUFRLElBQUksRUFBRSwwQkFBMEI7QUFDeEMsUUFBUSxNQUFNLEVBQUUsRUFBRTtBQUNsQixRQUFRLE1BQU0sRUFBRSxDQUFDO0FBQ2pCLFlBQVksR0FBRyxFQUFFLHlDQUF5QztBQUMxRCxZQUFZLEdBQUcsRUFBRSxrRkFBa0Y7QUFDbkcsU0FBUyxDQUFDO0FBQ1YsUUFBUSxRQUFRLEVBQUU7QUFDbEIsWUFBWTtBQUNaLGdCQUFnQixJQUFJLEVBQUUseUJBQXlCO0FBQy9DLGdCQUFnQixJQUFJLEVBQUUsb0NBQW9DO0FBQzFELGdCQUFnQixNQUFNLEVBQUUsNERBQTREO0FBQ3BGLGdCQUFnQixNQUFNLEVBQUUsQ0FBQztBQUN6QixvQkFBb0IsR0FBRyxFQUFFLHlDQUF5QztBQUNsRSxvQkFBb0IsR0FBRyxFQUFFLGtGQUFrRjtBQUMzRyxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLG9CQUFvQixHQUFHLEVBQUUsVUFBVTtBQUNuQyxvQkFBb0IsR0FBRyxFQUFFLGtGQUFrRjtBQUMzRyxpQkFBaUIsQ0FBQztBQUNsQixnQkFBZ0IsUUFBUSxFQUFFO0FBQzFCLG9CQUFvQixrR0FBa0c7QUFDdEgsb0JBQW9CLDBGQUEwRjtBQUM5RyxpQkFBaUI7QUFDakIsZ0JBQWdCLFdBQVcsRUFBRSxpcUJBQWlxQjtBQUM5ckIsZ0JBQWdCLGNBQWMsRUFBRSxDQUFDO0FBQ2pDLG9CQUFvQixLQUFLLEVBQUUsNERBQTREO0FBQ3ZGLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsb0JBQW9CLEtBQUssRUFBRSxtQkFBbUI7QUFDOUMsb0JBQW9CLEtBQUssRUFBRSxXQUFXO0FBQ3RDLGlCQUFpQixDQUFDO0FBQ2xCLGdCQUFnQixTQUFTLEVB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
