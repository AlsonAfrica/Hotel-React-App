import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onChange, value }) => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search For Your Room"
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        width: "200%",
        maxWidth: 400,
        backgroundColor: "white",
        borderRadius: "25px",
        boxShadow: "none",
      }}
    />
  );
};

export default SearchBar;
