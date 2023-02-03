import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Typography } from "@mui/material";

const Add = () => {
  const [shoe, setShoe] = useState({
    prod_name: "",
    prod_description: "",
    price: null,
    image: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setShoe((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let result = await axios
        .post("http://localhost:8080/shoes", shoe)
        .then((result) => result.data);
      console.log(result);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(shoe);
  return (
    
      <div className="form">
      <Typography variant="h3" sx={{fontWeight: "bold"}}>
        Add New Item
      </Typography>
      {/* <TextField 
        id="outlined"
        type={"text"}
        label="name"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField 
        id="outlined"
        type={"text"}
        label="prod_description"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField 
        id="outlined"
        type={"text"}
        label="image"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField 
        id="outlined"
        type={"number"}
        label="price"
        onChange={handleChange}
        variant="outlined"
      /> */}
      <input
        type="text"
        placeholder="name"
        onChange={handleChange}
        name="prod_name"
      />
      <input
        type="text"
        placeholder="prod_description"
        onChange={handleChange}
        name="prod_description"
      />
      <input
        type="text"
        placeholder="image"
        onChange={handleChange}
        name="image"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />

      <button onClick={handleClick}>Add</button>
    </div>
    
    
  );
};

export default Add;