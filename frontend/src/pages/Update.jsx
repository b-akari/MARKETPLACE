import React from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Button, TextField } from "@mui/material";

const Update = () => {
  const [shoe, setShoe] = useState({
    prod_name: "",
    prod_description: "",
    price: null,
    image: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const shoeId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setShoe((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let result = await axios
        .put(`http://localhost:8080/shoes/${shoeId}`, shoe)
        .then((result) => result.data);
      console.log(result);
      navigate("/shoes");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(shoe);
  return (
    <div className="form">
      <Typography variant="h3" sx={{ fontWeight: "bold", color: "#82AAE3" }}>
        Update
      </Typography>
      <TextField
        id="outlined"
        type={"text"}
        label="Name"
        name="prod_name"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        id="outlined"
        type={"text"}
        label="Description"
        name="prod_description"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        id="outlined"
        type={"text"}
        label="Image"
        name="image"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        id="outlined"
        type={"number"}
        label="Price"
        name="price"
        onChange={handleChange}
        variant="outlined"
      />

      <Button
        variant="contained"
        sx={{
          textDecoration: "none",
          backgroundColor: "#82AAE3",
          "&:hover": { background: "#82AAE3" },
        }}
        onClick={handleClick}
        size="large"
      >
        Update
      </Button>
    </div>
  );
};

export default Update;
