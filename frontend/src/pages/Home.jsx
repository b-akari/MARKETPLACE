import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg">
      <Typography
        variant="h3"
        sx={{
          color: "#8EA7E9",
          fontWeight: "bold",
        }}
      >
        Sole Cart PH
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#82AAE3" }}>
        shop shoes here at a much more lower price!
      </Typography>
      <Link to="/shoes" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            textDecoration: "none",
            backgroundColor: "#82AAE3",
            "&:hover": { background: "#82AAE3" },
          }}
        >
          Shop Now
        </Button>
      </Link>
    </div>
  );
};

export default Home;
