var config = {
    style: 'mapbox://styles/tanazm/cl1jrxptd000t14oaf4e94h6f',
    accessToken: 'pk.eyJ1IjoidGFuYXptIiwiYSI6ImNsMWprZmcybzIyOGIza25zMXEwdTB5ZjUifQ.3pNocO0wL-nfHybw1E2JUw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    title: "THE BROOKLYN MARATHON'S NEW RACE COURSE",
    subtitle: "On April 24th, 2022, over 20,000 participants will run this course for the first time.",
    use3dTerrain: false, //set true for enabling 3D maps.

    chapters: [
        {
            id: 'starting',
            alignment: 'left',
            hidden: false,
            title: "THE ROUTE",
            description: 'The race will begin in McCarren Park and wind down the Williamsburg waterfront, taking runners under the Williamsburg, Manhattan, and Brooklyn Bridges. The route will then take runners by the Grand Army Plaza, down Ocean Parkway and back up again, and bring them in for a big finish in Prospect Park.',
            location: {
                center: [-74.00068, 40.70702],
                zoom: 11.34,
                pitch: 0.00,
                bearing: 35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './images/park.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.94967, 40.72162],
                zoom: 16.59,
                pitch: 0.00,
                bearing: 35.20
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-74.00332, 40.69456],
                zoom: 11.47,
                pitch: 0.00,
                bearing: 37.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-74.00332, 40.69456],
                zoom: 11.47,
                pitch: 0.00,
                bearing: 37.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
