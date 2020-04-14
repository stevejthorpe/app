import React, { useState, useContext } from "react";
import Context from "../store/context";
import IGlobalState from "../interfaces/IGlobalState";
import adviceGeo from "../data/adviceGeo.json";
import { getValues } from "../components/getObjects";
// Material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";

const getCityList = () => {
    const obj = getValues(adviceGeo, "postcode_city");
    const arr = Object.keys(obj).map((key) => obj[key]);
    let rawList: any[] = [];

    for (let i = 0; i < arr.length; i++) {
        rawList.push(
          arr[i]
            .toString()
            .split(" ")
            .pop()
        );
    }

    function onlyUnique(value:any, index:any, self:any) {
      return self.indexOf(value) === index;
    };

    const cleanList = rawList.filter(onlyUnique)

    return cleanList
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    option: {
      fontSize: 15,
      "& > span": {
        marginRight: 10,
        fontSize: 18,
      },
    },
  })
);

export default function CityFilter() {
    const classes = useStyles();
    const cityList = getCityList();
    const { state, actions }: any = useContext(Context);
    // console.log(cityList);
    // City search
    const [options, setOptions] = useState("");
    const [inputValue, setInputValue] = useState("");
    // console.log("City options: ", options);
    // console.log('City inputValue: ', inputValue)

    // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //   setOptions(event.target.value as string);
    // };
    
    const handleCityChange = (event: object, value: any) => {
      console.log("handleCityChange: ", value);
      actions({
        type: "setState",
        payload: { ...state, prefCity: value },
      });
    };

    // const handleCityChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    //   console.log("handleCityChange: ", e.target.value);
    //   actions({
    //     type: "setState",
    //     payload: { ...state, prefCity: e.target.value },
    //   });
    // };

    return (
      <>
        <Autocomplete
          id="country-select-demo"
          style={{ width: 300 }}
          options={cityList}
          classes={{
            option: classes.option,
          }}
          autoHighlight
          getOptionLabel={(option) => option}
          renderOption={(option) => (
            <React.Fragment>
              <span key={option}>{option}</span>
              {/* {option.label} ({option.code}) +{option.phone} */}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a city"
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
          onChange={handleCityChange}
        />
      </>
    );
}