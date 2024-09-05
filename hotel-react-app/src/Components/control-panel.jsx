import React from "react";
import { TextField, Box } from "@mui/material";

export default function BasicDateInputs() {
  return (
    <Box display="flex" gap={2} flexDirection="row" alignItems="center" justifyContent="center">
      {/* First Date Input */}
      <TextField
        label="Check In"
        type="date"
        InputLabelProps={{
          shrink: true, // Ensures the label stays visible when date is selected
        }}
      />
      {/* Second Date Input */}
      <TextField
        label="Check Out"
        type="date"
        InputLabelProps={{
          shrink: true, // Ensures the label stays visible when date is selected
        }}
      />
    </Box>
  );
}
