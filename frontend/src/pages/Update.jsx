import React from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Update = () => {
  const [shoe, setShoe] = useState({
    prod_name: "",
    prod_description: "",
    price: null,
    image: "",
  });
  const navigate = useNavigate();
  const location= useLocation();
  const shoeId= location.pathname.split("/")[2]

  const handleChange = (e) => {
    setShoe((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let result = await axios
      .put(`http://localhost:8080/shoes/${shoeId}`, shoe)
      .then((result)=> result.data)  
      console.log(result)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }
  console.log(shoe);
  return (
    <div className="form">
      <Typography variant="h3" sx={{fontWeight: "bold"}}>
        Update
      </Typography>
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

      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default Update;