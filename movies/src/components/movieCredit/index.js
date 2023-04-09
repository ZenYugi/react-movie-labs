import React from "react";
import Typography from "@mui/material/Typography";

const MovieCredit =  ({ credit }) => {
  return (
    <>
    <Typography variant="h5" backgroundColor= 'rgb(211,211,211)' component="h3">
      <strong>Review By: {credit.name}</strong>
    </Typography>

    <Typography variant="h6" backgroundColor= 'rgb(211,211,211)' component="p">
      {credit.character} 
    </Typography>
    </>
  );
};
export default MovieCredit