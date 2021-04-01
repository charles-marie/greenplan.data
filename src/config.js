var config = {
    style: 'mapbox://styles/cyberisk233/ckmktqn3tsyt917ptt5l0d7dm',
    accessToken: 'pk.eyJ1IjoiY3liZXJpc2syMzMiLCJhIjoiY2ttajlobHJvMGt0bDJwbnp2NDAxYWh3aCJ9.y7zof4CrjhGkdQYbfYorrg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'SG Green Plan: Ambitious?',
    subtitle: '',
    byline: 'by Yale-NUS data storytellers Charles, Andrew, Alex & Lad',
    footer: '',
    chapters: [
        {
            id: '1-intro-id',
            alignment: 'centre',
            hidden: false,
            title: 'Green Plan: Expanding Green in Singapore',
            image: '',
            description: 'The Singapore government recently unveiled the Green Plan: A list of key quantitative environmental targets for 2030. In this article, we examine the government’s plans to expand green spaces in Singapore. In addition to trees, we’ve also set many targets to enlarge green spaces in Singapore over the next 10 years. For example, the government plans to develop over 130 hectares of new parks by 2030. These numbers can be hard to conceptualise, but we need to provide context before diving into some of the government’s interesting targets for green spaces. How ambitious are these targets? And what exactly do these numbers translate to, in understandable terms? ',
            location: {
                center: [103.81011, 1.36046],
                zoom: 11.09,
                pitch: 35.00,
                bearing: -0.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                // layer: 'nature-parks',
                //opacity: 1,
                //duration: 5000
                //}
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2a-million',
            alignment: 'left',
            hidden: false,
            title: 'One Million New Trees',
            // image: 'images/With.png',
            description: 'Trees are literally the living soul that underpins all cities around the world. They discard our carbon dioxide waste and replenish our cities with fresh oxygen. They cool our cities through shade and evapo-transpiration and slows climate change. ',
            location: {
                center: [103.81011, 1.36046],
                zoom: 11.09,
                pitch: 35.00,
                bearing: -0.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'nature-reserves',
                opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '3-naturecity',
            alignment: 'centre',
            hidden: false,
            title: 'A City of Nature',
            image: '',
            description: 'Singapore has a target of planting 1 million more trees to improve Singapore’s urban environment. These trees won’t just help in the above ways - they will transform Singapore into a city of nature.',
            location: {
                center: [103.81011, 1.36046],
                zoom: 11.09,
                pitch: 35.00,
                bearing: -0.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'nature-reserves',
                opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '4a-treesmeaning',
            alignment: 'left',
            hidden: false,
            title: 'What does a million trees actually mean?',
            image: '',
            description: 'Importantly, though, what does 1 million more trees actually mean? How much impact does it create? It sure sounds like a lot, but is a million trees actually a lot? Will it solve the climate crisis forever, or is it just a tiny blip? We aim to help you visualise this in a way that makes sense.',
            location: {
                center: [103.81549, 1.34866],
                zoom: 15.02,
                pitch: 60.00,
                bearing: 0.00                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'nature-reserves',
                opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '5a-impact',
            alignment: 'right',
            hidden: false,
            // title: 'The Difference Between Nature Reserves and Parks',
            // image: 'images/With.png',
            description: 'To start, 1 million more trees will remove 78000 metric tonnes of carbon dioxide across the trees’ lifetimes. We will visualise this number in three ways.',
            location: {
                center: [103.81549, 1.34866],
                zoom: 12.49,
                pitch: 60.00,
                bearing: 0.00                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'nature-reserves',
                opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '6a-hdb',
            alignment: 'right',
            hidden: false,
            title: 'Only a couple of HDB blocks for only a year',
            image: 'images/hdb.jpg',
            description: 'Firstly, 78000 metric tonnes of carbon dioxide equates to powering 98000 heat pumps in Singapore for a year. What one million trees creates in a lifetime is only really enough to power a couple of HDB blocks for a year. This goes to show just how environmentally unsustainable air conditioning is for the environment - it is a major inhibitor to combating climate change. ',
            location: {
                center: [103.79883, 1.28823],
                zoom: 15.12,
                pitch: 45.00,
                bearing: 0.00                             
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'nature-reserves',
                opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '7a-cars',
            alignment: 'centre',
            hidden: false,
            title: '3.8% of all of Singapore’s vehicle emissions for a year',
            image: 'images/cars_gif.gif',
            description: '78000 metric tonnes of carbon dioxide equates to the carbon dioxide produced by 38000 cars on the road in a year. Given there are 1 million cars in Singapore, that’s nothing! It means a whopping 26.3 million trees need to be planted to remove all of the car emissions from just Singapore alone.',
            location: {
                center: [103.85055, 1.29856],
                zoom: 14.56,
                pitch: 45.00,
                bearing: -4.74                         
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'nature-reserves',
                opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '8a-airport',
            alignment: 'left',
            hidden: false,
            title: 'Singapore-Tokyo flights for two months (based on pre-COVID-19 schedule)',
            image: '',
            description: 'We all know that flights are big emitters of carbon dioxide, but do we really know how much? 58200 roundtrip passengers between Singapore and Tokyo is how much. That means just two months of roundtrip B777 flights if they ran four times a day (non-COVID). So, to repeat, the lifetime of a million trees will only last two months of flights. That’s bad.',
            location: {
                center: [103.98988, 1.34610],
                zoom: 12.49,
                pitch: 35.50,
                bearing: 0.00                                    
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'nature-reserves',
                opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '9a-trees',
            alignment: 'left',
            hidden: false,
            title: 'A million trees actually isn’t a lot.',
            image: '',
            description: 'So, through this, we’ve been able to see that 1 million trees takes up a large amount of space, but will only create very small impacts given the sheer scale of carbon dioxide that we are producing. 1 million trees, though it sounds a lot, will unfortunately only serve as a token gesture to improve the state of Singapore’s emissions. ',
            location: {
                center: [103.81549, 1.34866],
                zoom: 13.00,
                pitch: 60.00,
                bearing: 0.00                             
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'nature-reserves',
                opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },




///////////////
        {
            id: '1-nature-reserves-general',
            alignment: 'centre',
            hidden: false,
            title: 'Green Space Enlargement',
            image: 'images/raintree.jpg',
            description: 'In addition to trees, we’ve also set many targets to enlarge green spaces in Singapore over the next 10 years. For example, the government plans to develop over 130 hectares of new parks by 2030. These numbers can be hard to conceptualise, but we need to provide context before diving into some of the government’s interesting targets for green spaces.',
            location: {
                center: [103.81011, 1.36046],
                zoom: 11.09,
                pitch: 35.00,
                bearing: -0.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'nature-reserves',
                opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2-nature-reserves-general',
            alignment: 'right',
            hidden: false,
           //  title: 'The Difference Between Nature Reserves and Parks',
            // image: 'images/With.png',
            description: 'Before we can understand what the Government means by Green Spaces, let us examine their two key pieces - Nature Reserves and Nature Parks. Our Team was surprised to find out that Singapore only has 4 Nature Reserves (in light green). Let us go on a short visit to each of them!',
            location: {
                center: [103.81011, 1.36046],
                zoom: 11.09,
                pitch: 35.00,
                bearing: -0.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'nature-reserves',
                opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '3-Labrador Park',
            alignment: 'right',
            hidden: false,
            title: 'Labrador Nature Reserve',
            image: '',
            // description: 'Labrador Nature Reserve',
            location: {
                center: [103.80302, 1.26549],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00,           
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4-Sungei Buloh Wetland Buloh',
            alignment: 'right',
            hidden: false,
            title: 'Sungei Buloh Wetland Reserve',
            image: '',
            // description: 'Sungel Buloh Wetland Reserve',
            location: {
                center: [103.72682, 1.44790],
                zoom: 14.00,
                pitch: 45.00,
                bearing: -40.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5-Central Catchment and Bukit Timah',
            alignment: 'right',
            hidden: false,
            title: 'Central Catchment and Bukit Timah Nature Reserve',
            image: '',
            description: 'Central Catchment is of course the larger one, whilst Bukit Timah Nature Reserve is the smaller on the left!',
            location: {
                center: [103.80193, 1.36465],
                zoom: 13.00,
                pitch: 45.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6-Difference Explained',
            alignment: 'right',
            hidden: false,
            title: 'Nature Reserves and Parks - not the same!',
            image: '',
            description: 'There are differences between a nature reserve and nature park. While we only have 4 nature reserves in Singapore, nature parks are parks surrounding nature reserves that act as a buffer between nature and urban life. These are highlighted in dark green.',
            location: {
                center: [103.80193, 1.36465],
                zoom: 13.00,
                pitch: 45.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5-gardensbythebaycomparison',
            alignment: 'right',
            hidden: false,
            title: 'Nature Park Expansion',
            image: 'images/With.png',
            description: 'Under the Green Plan, nature parks will expand by 200 hectares. That is practically an area of two additional Gardens by the Bay, all within the next 10 years. The above image shows how two new Gardens could look like.',
            location: {
                center: [103.86602, 1.28107],
                zoom: 14.05,
                pitch: 45.00,
                bearing: -7.59
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'nature-reserves',
                opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '6-Khatib Bongsu',
            alignment: 'right',
            hidden: false,
            title: 'Khatib Bongsu',
            image: 'images/khatibbongsu.jpg',
            description: 'A new nature park will be found in an area of rich mangrove mudflats called Khatib Bongsu. It will be 40 hectares in size, around half as big as Botanic Gardens.',
            location: {
                center: [103.85080, 1.43628],
                zoom: 15.59,
                pitch: 45.00,
                bearing: -40.00                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7-NEA land',
            alignment: 'centre',
            hidden: false,
            title: 'Green Space Increases - Where?',
            // image: 'images/khatibbongsu.jpg',
            description: 'According to the NEA, there are currently around 7800 hectares of land set aside as green spaces in Singapore. In the Green Plan, an additional 1000 hectares of land will be set aside as green spaces. But what will these green spaces be? It’s unclear at this stage. While we know that 200 hectares will be set aside for nature parks, the rest could be park connectors, nature reserves or gardens.',
            location: {
                center: [103.81011, 1.36046],
                zoom: 11.09,
                pitch: 35.00,
                bearing: -0.23           
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8-NEAambitious',
            alignment: 'centre',
            hidden: false,
            title: 'Is the increase "ambitious?" ',
            image: 'images/12 percent green spaces.png',
            description: 'The additional 1000 hectares of land represent only a 12.8% increase in our green spaces over the next 10 years. Is that ambitious enough? Assuming Singapore remains the same size by 2030, only 12.1% of our current land will be set aside as green spaces.',
            location: {
                center: [103.81011, 1.36046],
                zoom: 11.09,
                pitch: 35.00,
                bearing: -0.23             
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9-Land Use Considerations',
            alignment: 'centre',
            hidden: false,
            title: 'Land Use Considerations',
            image: '',
            description: 'However, there are other things to consider. We also have to allocate land to house our growing population, for commercial activities, and for military training areas. These demands are important, and take up a considerable amount of our land. ',
            location: {
                center: [103.81011, 1.36046],
                zoom: 11.09,
                pitch: 35.00,
                bearing: -0.23             
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10-Land Plan',
            alignment: 'centre',
            hidden: false,
            title: 'Land Use Plan',
            image: 'images/landuse.png',
            description: 'Moreover, based on MND’s 2013 Land Use Plan which outlines our land use strategy, by 2030 the ratio of land used for housing to green spaces will only be 1.47:1. When we take into account this ratio, the planned allocation for green spaces doesn’t seem so lacking after all. Based on the Land Use Plan’s estimate of 13000 ha of housing space by 2030 and an estimated 8800 hectares of green spaces by 2030 as outlined in the Green Plan.',
            location: {
                center: [103.81011, 1.36046],
                zoom: 11.09,
                pitch: 35.00,
                bearing: -0.23             
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11-Conclusion',
            alignment: 'centre',
            hidden: false,
            title: 'Conclusion',
            image: 'images/gardens.png',
            description: 'Given Singapore’s land constraints, it is hard to offer a non-subjective conclusion about the achievability or impressiveness of these Green Plan targets. Climate change, however, is an objective phenomenon. Crucially, we face a pressing need to come up with creative methods to reduce greenhouse emissions.',
            location: {
                center: [103.81011, 1.36046],
                zoom: 11.09,
                pitch: 35.00,
                bearing: -0.23             
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12-Conclusion',
            alignment: 'centre',
            hidden: false,
            title: 'Conclusion',
            image: 'images/central.jpg',
            description: 'As members of the youth generation of Singapore, it is our fervent hope and desire to see Singapore flourish in producing a greener future. We are saddened to see that despite the large sounding number of a million new planted trees, it will not produce impacts that are sustainable for the long run. It is also difficult to project an outcome on the impacts of increased nature parks in Singapore. That said, we hope you have found our data visualisations insightful.',
            location: {
                center: [103.81011, 1.36046],
                zoom: 11.09,
                pitch: 35.00,
                bearing: -0.23             
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13-Citations',
            alignment: 'centre',
            hidden: false,
            title: 'Sources and Citations',
            image: 'images/citations.png',
            description: '',
            location: {
                center: [103.81011, 1.36046],
                zoom: 11.09,
                pitch: 35.00,
                bearing: -0.23             
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
