import React from "react";
import { Typography } from "@mui/material";

const Aboutus = () => {
  return (
    <div className="about-us">
      <div
        style={{
          backgroundColor: "#82AAE3",
          padding: "50px",
          borderRadius: "50px",
        }}
      >
        <img
          src="./image/me.jpg"
          style={{ borderRadius: "50%", height: "200px", width: "200px" }}
        />
        <Typography variant="h6" sx={{mt: 2, color: "white", fontWeight: 500}}>
          Ana Bridgete P. Seguban <br />
          Creator
        </Typography>
      </div>
    </div>
  );
};

export default Aboutus;
