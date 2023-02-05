import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
      <div className="bg">
        <Typography
          variant="h3"
          sx={{
            marginTop: "22%",
            color: "#82AAE3",
            fontWeight: "bold",
          }}
        >
          Bridgete's Preloved Shoes
        </Typography>
        <Link to="/shoes" style={{textDecoration: "none"}}>
          <Button
            variant="contained"
            sx={{
              
              "&hover": { backgroundColor: "#82AAE3" },
            }}
          >
            Shop Now
          </Button>
        </Link>
      </div>
  );
};

export default Home;
