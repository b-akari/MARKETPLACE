import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Grid, Button, Typography, Container } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

let PHPPrice = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
});

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  const [brand, setBrand] = useState("");
  const handleBrandChange = (event, newBrand) => {
    if (newBrand !== null) {
      setBrand(newBrand);
    }
  };

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
    <Container sx={{marginTop: "100px"}}>
      <ToggleButtonGroup
        color="primary"
        value={brand}
        exclusive
        onChange={handleBrandChange}
        sx={{ mb: "20px" }}
      >
        <ToggleButton value="">All</ToggleButton>
        <ToggleButton value="nike">Nike</ToggleButton>
        <ToggleButton value="adidas">Adidas</ToggleButton>
        <ToggleButton value="new balance">New Balance</ToggleButton>
      </ToggleButtonGroup>
      <Grid container columnSpacing={2} rowSpacing={2} justifyContent="center">
        {shoes
          .filter((shoe) => shoe.prod_name.toLowerCase().includes(brand))
          .map((shoe) => (
            <Grid key={shoe.id} item xs={12} sm={6} md={3}>
              <Card sx={{ background: "#E9E8E8" }}>
                {shoe.image && <img src={`/image/${shoe.image}`} alt="" />}
                <div className="shoe" key={shoe.id}>
                  <Typography variant="h5">{shoe.prod_name}</Typography>
                  <Typography variant="p">{shoe.prod_description}</Typography>
                  <Typography variant="h6">
                    {PHPPrice.format(shoe.price)}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        textDecoration: "none",
                        backgroundColor: "#82AAE3",
                        "&:hover": { background: "#82AAE3" },
                      }}
                      onClick={() => handleDelete(shoe.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        textDecoration: "none",
                        backgroundColor: "#82AAE3",
                        "&:hover": { background: "#82AAE3" },
                      }}
                    >
                      <Link
                        to={`/update/${shoe.id}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Update
                      </Link>
                    </Button>
                  </div>
                </div>{" "}
              </Card>{" "}
            </Grid>
          ))}
      </Grid>

      <Button
        variant="contained"
        sx={{
          m: "20px",
          backgroundColor: "#82AAE3",
          "&:hover": { background: "#82AAE3" }
        }}
      >
        <Link to="/add" style={{ textDecoration: "none", color: "white" }}>
          Add new Shoes
        </Link>
      </Button>
    </Container>
  );
};

export default Shoes;
