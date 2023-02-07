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
          width: "50%"
        }}
      >
        <img
          src="./image/me.jpg"
          style={{ borderRadius: "50%", height: "200px", width: "200px" }}
          alt="/"
        />
        <Typography
          variant="h6"
          sx={{ mt: 2, color: "white", fontWeight: "bold" }}
        >
          Ana Bridgete P. Seguban <br />
          Creator
        </Typography>
        <Typography sx={{ color: "white", textAlign: "justify", pt: 3 }}>
          SoleCart PH is a shop that sells shoes at a much more lower price.
          All the shoes here are guaranteed original but we only sell 3 shoe
          brands namely Nike, Adidas, and New Balance. We do not produce them
          ourselves but instead we resell them. Buyers can also request a shoe
          that is only available on other country.
        </Typography>
      </div>
    </div>
  );
};

export default Aboutus;
