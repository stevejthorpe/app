import React, { useState, useLayoutEffect, useContext } from "react";
import Context from "../store/context";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import adviceGeo from "../data/adviceGeo.json";

import CityFilter from "../components/CityFilter";
import LangFilter from "../components/LangFilter";
import { useWindowSize } from "../components/useWindowSize";

import { Button, Card, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core";
import POIIcon from "../ui/POIIcon.svg";
import LanguagesIcon from "../ui/LanguagesIcon.svg";

import { Link } from "react-router-dom";
import { IViewState } from "../interfaces/IViewState";

console.log('adviceGeo: ', adviceGeo);

const shortid = require("shortid");

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    icon: {
      color: theme.palette.text.secondary,
      marginRight: theme.spacing(2),
    },
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  })
);

export default function AdviceMap() {
  const classes = useStyles();
  const { state, actions }: any = useContext(Context);

  console.log('adviceMap State: ', state);

  // Responsive window size
  const windowSize = useWindowSize();
  const windowHeight = windowSize[1];
  const windowWidth = windowSize[0];


  /////////////////
  // State
  /////////////////

  const [viewport, setViewport] = useState<IViewState>({
    // Default coordinates to Berlin
    latitude: 52.520008,
    longitude: 13.404954,
    height: 250,
    width: 360,
    zoom: 8,
  });

  // Adisor selection
  const [selectedAdvice, setSelectedAdvice] = useState(null);

  // Get user long lat
  useLayoutEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  });

  // Set viewport size dynamically. Needed because we cannot use vh and vw
  useLayoutEffect(() => {
    setViewport({
      ...viewport,
      height: windowHeight / 3,
      width: windowWidth,
    });
  }, [windowWidth]);

  

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        color="textPrimary"
        gutterBottom={true}
      >
        Legal advisors and lawyers near you
      </Typography>
      <Card className={classes.root}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => setViewport(viewport)}
          mapStyle="mapbox://styles/stevejt/ck8htanhp0bec1inyuih6ps92"
        >
          <Marker
            key={shortid.generate()}
            latitude={viewport.latitude}
            longitude={viewport.longitude}
          >
            <button>
              <img src={LanguagesIcon} alt="user location icon" />
            </button>
          </Marker>
          {adviceGeo.features.map((adviser: any) => (
            <Marker
              key={shortid.generate()}
              latitude={Number(adviser.geometry.coordinates[1])}
              longitude={Number(adviser.geometry.coordinates[0])}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedAdvice(adviser);
                }}
              >
                <img src={POIIcon} alt="Advice Centre Icon" />
              </button>
            </Marker>
          ))}
          {selectedAdvice ? (
            <Popup
              latitude={Number(selectedAdvice.geometry.coordinates[1])}
              longitude={Number(selectedAdvice.geometry.coordinates[0])}
              closeButton={true}
              closeOnClick={false}
              onClose={() => {
                setSelectedAdvice(null);
              }}
              captureClick={true}
              dynamicPosition={true}
            >
              <div>
                <h5>{selectedAdvice.properties.name}</h5>
                <p>
                  <img src={LanguagesIcon} alt="Languages icon" />
                  {selectedAdvice.properties.language}
                </p>
              </div>

              <Button
                // TODO create selected advisor list
                onClick={() =>
                  console.log("Selected adviser: ", selectedAdvice)
                }
                variant="contained"
                color="primary"
                type="submit"
                component={Link}
                to={"/advisors"}
              >
                More details
              </Button>
            </Popup>
          ) : null}
        </ReactMapGL>
      </Card>

      {/* Filters */}

      <CityFilter />

      <LangFilter />

      {/* Buttons */}

      <Button
        variant="contained"
        color="primary"
        type="submit"
        component={Link}
        to={"/questionaire"}
      >
        Start by getting an overview oy your asylum proceedure
      </Button>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        component={Link}
        to={"/articles"}
      >
        Search information about specific topics
      </Button>
    </>
  );
}
