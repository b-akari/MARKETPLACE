import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Grid, Button, Typography} from "@mui/material";

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
      <Typography variant="h3">
        SHOE STORE
      </Typography>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {shoes.map((shoe) => (
          <Grid key={shoe.id} item xs={12} sm={6} md={3}>
            <Card sx={{ background: "#E9E8E8"}}>
              <div className="shoe" key={shoe.id}>
                {shoe.image && <img src={`/image/${shoe.image}`} alt="" />}
                <Typography variant="h4">
                  {shoe.prod_name}
                </Typography>
                <Typography variant="p">
                  {shoe.prod_description}
                </Typography>
                <Typography variant="h6">
                  {PHPPrice.format(shoe.price)}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleDelete(shoe.id)}
                >
                  Delete
                </Button>
                <Button variant="contained" sx={{textDecoration: "none", color: "white"}}>
                  <Link to={`/update/${shoe.id}`}>Update</Link>
                </Button>
              </div>{" "}
            </Card>{" "}
          </Grid>
        ))}
      </Grid>

      <Button variant="contained" sx={{m: "20px", textDecoration: "none"}}>
        <Link to="/add">Add new Shoes</Link>
      </Button>
    </div>
  );
};

export default Shoes;