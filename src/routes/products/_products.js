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

export default products;
