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
    footer: 'Route: NYCRUNS website; Context: The New York Times, Intelligencer, Greenpointers, Find My Marathon, TimeOut',
    use3dTerrain: false, //set true for enabling 3D maps.
    chapters: [
        {
            id: 'starting',
            alignment: 'left',
            hidden: false,
            title: "THE ROUTE",
            description: 'The race will begin in McCarren Park and wind down the Williamsburg waterfront, taking runners under the Williamsburg, Manhattan, and Brooklyn Bridges. The route will then take runners through Prospect Park, down Ocean Parkway and loop up again, bringing them back to Prospect Park for a big finish.',
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
            id: 'second',
            alignment: 'left',
            hidden: false,
            title: 'THE BROOKLYN MARATHON',
            description: 'The Brooklyn Marathon will be New York City’s second official marathon, joining the New York City Marathon, which is the world’s largest. Running organizations had been trying to gain permission from the city for a second marathon for years, but  for several reasons, including pushback from the New York Road Runners, the organization that owns the New York City Marathon, the city didn’t grant a permit until June 15, 2021.',
            location: {
                center: [-74.00068, 40.70702],
                zoom: 11.34,
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
            id: 'third',
            alignment: 'right',
            hidden: false,
            title: 'STARTING LINE',
            image: './images/park.png',
            description: 'The race used to kick off on Eastern Parkway by the Brooklyn Museum, but it now begins at McCarren Park. NYCRUNS organizes the marathon and wanted to begin the race here in northern Brooklyn so the route could work its way downward and span more of the borough.',
            location: {
                center: [-73.94967, 40.72162],
                zoom: 16.59,
                pitch: 0.00,
                bearing: 35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth',
            alignment: 'left',
            hidden: false,
            title: 'MILE 6',
            image: './images/dumbo.png',
            description: 'Most runners are excited about the new route, but some worry about running on Dumbo’s cobblestoned.streets.',
            location: {
                center: [-73.99226, 40.70399],
                zoom: 14.76,
                pitch: 0.00,
                bearing: 35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth',
            alignment: 'fully',
            hidden: false,
            title: 'MILES 8-10',
            image: './images/elevation.png',
            description: 'The route’s longest climb takes place on Flatbush Avenue and Eastern Parkway—between miles 8 and 10.',
            location: {
                center: [-73.96763, 40.68179],
                zoom: 14.22,
                pitch: 0.00,
                bearing: 35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth',
            alignment: 'right',
            hidden: false,
            title: 'MILES 12-15',
            description: 'The route also runs through Prospect Park. Previous iterations of the unofficial Brooklyn Marathon consisted of up to eight laps around Prospect Park.',
            location: {
                center: [-73.95872, 40.65687],
                zoom: 13.73,
                pitch: 0.00,
                bearing: 35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh',
            alignment: 'left',
            hidden: false,
            title: 'MILES 17-23',
            description: 'Running down Ocean Avenue, runners will explore southern Brooklyn, before looping back up to finish the race.',
            location: {
                center: [-73.98779, 40.63846],
                zoom: 12.76,
                pitch: 0.00,
                bearing: 35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth',
            alignment: 'right',
            hidden: false,
            title: 'MILE 25',
            description: 'Runners will face another steep incline right before the finish line. The Brooklyn Marathon is a Boston Qualifier, so maintaining a quick and steady pace during this mile will be critical.',
            location: {
                center: [-73.96040, 40.66065],
                zoom: 14.45,
                pitch: 0.00,
                bearing: 35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth',
            alignment: 'fully',
            hidden: false,
            title: 'FINISH LINE',
            description: 'The finish line is at the center of Prospect Park, where friends and family members will be cheering the runners on!',
            location: {
                center: [-73.96975, 40.66090],
                zoom: 16.63,
                pitch: 0.00,
                bearing: 35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ending',
            hidden: true,
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
            ],
            onChapterExit: [
            ]
        },
    ]
};
