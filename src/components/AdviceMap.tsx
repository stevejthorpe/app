import React, { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import * as adviceGeo from '../data/adviceGeo.json';
import POIIcon from '../ui/POIIcon.svg';
import { Card } from '@material-ui/core';
import { makeStyles, createStyles } from "@material-ui/core";
const shortid = require('shortid');

interface IViewState {
    latitude: number;
    longitude: number;
    height: number;
    width: number;
    zoom: number;
    bearing?: number;
    pitch?: number;
    altitude?: number;
}

// interface IAdviceData {
//     lat: number;
//     lon: number;
// }

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
    }),
);

export default function AdviceMap() {
    const classes = useStyles()

    const [viewport, setViewport] = useState<IViewState>({
        latitude: 52.520008,
        longitude:13.404954,
        height: 200,
        width: 300,
        zoom: 9,
    });

    const [selectedAdvice, setSelectedAdvice] = useState(null)

    console.log('Selected: ', selectedAdvice);

    return(
        <Card className={classes.root}>

            <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={viewport => setViewport(viewport)}
            mapStyle='mapbox://styles/stevejt/ck8htanhp0bec1inyuih6ps92'
            >
                {/* {console.log(typeof(adviceGeo.features[0].geometry.coordinates[1]))} */}
                {/* {console.log('lon lat: ', adviceGeo.features[0].geometry.coordinates)} */}
                {/* {adviceGeo.features.map((i: any) => console.log(i))} */}
                {adviceGeo.features.map((adviser: any) => ( 
                    <Marker 
                        key={shortid.generate()} 
                        latitude={Number(adviser.geometry.coordinates[1])}
                        longitude={Number(adviser.geometry.coordinates[0])} 
                        // latitude={viewport.latitude}
                        // longitude={viewport.longitude} 
                    >
                        <button
                            onClick={e => {
                                e.preventDefault();
                                setSelectedAdvice(adviser);
                                // console.log('adviser object: ', adviser)
                                // console.log('inner: ', typeof(adviser.geometry.coordinates[0]))
                                // console.log('lon lat: ', adviser.geometry.coordinates[0])
                                // console.log('Math.floor: ', (typeof(adviser.geometry.coordinates[0])))
                            }}
                        >
                            <img src={POIIcon} alt='Advice Centre Icon' />
                        </button>
                    </Marker>
                ))}

                {selectedAdvice ? (
                    // console.log(selectedAdvice.properties)
                    <Popup 
                        latitude={Number(selectedAdvice.geometry.coordinates[1])} 
                        longitude={Number(selectedAdvice.geometry.coordinates[0])}
                        onClose={() => {setSelectedAdvice(null);
                        }}
                    >
                        <h4>{selectedAdvice.properties.name}</h4>
                        <p>{selectedAdvice.properties.language}</p>

                    </Popup>
                   
                ) : null};

            </ReactMapGL>
        </Card>
    )
}

