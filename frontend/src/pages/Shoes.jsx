import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Grid } from "@mui/material";

let PHPPrice = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
});

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchAllShoes = async () => {
      try {
        const res = await axios.get("http://localhost:8080/shoes");
        setShoes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllShoes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/shoes/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home">
      <h1>THE GARDEN</h1>
      <div className="shoes">
        {shoes.map((shoe) => (
          <Grid key={shoe.id} item xs={12} sm={6} md={3}>
            <Card sx={{ background: "#EBECF0" }}>
              <div className="shoe" key={shoe.id}>
                {shoe.image && <img src={`/image/${shoe.image}`} alt="" />}
                <h2>{shoe.prod_name}</h2>
                <p>{shoe.prod_description}</p>
                <h5>{PHPPrice.format(shoe.price)}</h5>
                <button
                  className="delete"
                  onClick={() => handleDelete(shoe.id)}
                >
                  Delete
                </button>
                <button className="update">
                  <Link to={`/update/${shoe.id}`}>Update</Link>
                </button>
              </div>{" "}
            </Card>{" "}
          </Grid>
        ))}
      </div>

      <button className="add">
        <Link to="/add">Add new Shoes</Link>
      </button>
    </div>
  );
};

export default Shoes;