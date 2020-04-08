import React, { useState, useRef, useLayoutEffect } from "react";
import * as adviceGeo from "../data/adviceGeo.json";
import { IAdviceGeometry, IAdviceProperties } from "../interfaces/IAdviceGeo";
// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import { makeStyles } from "@material-ui/core/styles";
import shortid from "shortid";

console.log("Location: ", adviceGeo.features[0].properties.location);

// const useStyles = makeStyles({
//   option: {
//     fontSize: 15,
//     "& > span": {
//       marginRight: 10,
//       fontSize: 18
//     }
//   }
// });

export default function AdviceSearch<IAdviceGeo>() {
  // const classes = useStyles();

  // let adviceData = Object.fromEntries(
  //   Object.entries(adviceGeo.features).map(([k, v]) => [k, v])
  // );
  // console.log("adviceData: ", typeof adviceData[0].properties);

  // let geometry: IAdviceGeometry = adviceData.features.geometry;
  // console.log("geometry: ", geometry);
  // let properties: IAdviceProperties = adviceData.properties;
  // console.log("properties: ", properties);

  // console.log("Test fromEntries: ", test);
  const [query, setQuery] = useState<string | number>("");
  console.log("Query state: ", query);
  const [results, setResults] = useState<any>();

  // const textInput = useRef<HTMLInputElement>(null);
  // console.log(textInput);

  // const handleInputChange = () => {
  //   setQuery(textInput.current.value);
  // };

  // useLayoutEffect(() => {
  //   setResults({ ...adviceData });
  // });

  let adviceData = [];
  adviceData: IAdviceGeometry | IAdviceProperties = adviceGeo.features;

  console.log("data: ", adviceData);

  // let adviceGeoObject: any[] = JSON.parse(adviceGeo);

  // features = adviceGeoObject.features;
  // properties = adviceGeoObject.properties;

  // const getData = () => {

  // };

  // const data = adviceGeo.features.map((item: any) => (
  //   <li key={shortid.generate()}>{item.properties.location}</li>
  // ));

  setResults(
    adviceData.filter(() => adviceData.properties.location.search(query))
  );

  return (
    <>
      <div>
        <form>
          <input
            placeholder="Search for..."
            // ref={textInput}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <p>{results}</p>
        </form>

        {/* <select id="advice-filter">
          <option value="any">Choose Any</option>
          {Object.fromEntries(
            Object.entries(adviceGeo.features).map(([k, v]) => {
              console.log("fromEntries: ", [k, v]);
              return <option value={k}>{v.properties.location}</option>;
            })
          )} */}

        {/* {Object.fromEntries(
            Object.entries((adviceGeo: any).map((item: any) => {
            return <option value={item}>{item}</option>;
          }))
          )} 
        </select> */}
      </div>
      {/* <div>
        <select id="advice-filter">
          <option value="any">Choose Any</option>
          {adviceGeo.features[0].properties.map((item: any) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        </div> */}
      {/* <ul>
        {adviceGeo.features.map((item: any) => (
          <li key={shortid.generate()}>{item.properties.location}</li>
        ))}
      </ul> */}
    </>
  );
}

// interface ILocation {
//   location: string;
// }

// <Autocomplete
//   id="advice-select"
//   // style={{ width: 300 }}
//   // options={(adviceGeo.features.properties as unknown) as IAdviceGeo}
//   classes={{
//     option: classes.option
//   }}
//   autoHighlight
//   getOptionLabel={option => option.Features.properties.location}
//   // renderOption={option => (
//   //   <React.Fragment>
//   //     <span>{countryToFlag(option.code)}</span>
//   //     {option.label} ({option.code}) +{option.phone}
//   //   </React.Fragment>
//   // )}
//   renderInput={params => (
//     <TextField
//       {...params}
//       // label="Choose a country"
//       variant="outlined"
//       inputProps={{
//         ...params.inputProps,
//         autoComplete: "new-password" // disable autocomplete and autofill
//       }}
//     />
//   )}
// />
