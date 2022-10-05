import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { StepContext } from "@mui/material";

const Header = ({
  countryList,
  setCountry,
  country,
  setSearchData,
  seachData,
}) => {
  const handleChange = (event) => {
    let newD = event.target.value;
    setCountry(newD);
  };
  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <Box>
      <div>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Country"
          onChange={handleChange}
        >
          {countryList?.map((ele) => {
            return (
              <option value={ele} key={ele}>
                {ele}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="search...."
          value={seachData}
          onChange={handleSearch}
        />
      </div>
    </Box>
  );
};

export default Header;
