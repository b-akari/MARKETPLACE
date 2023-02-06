import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import Update from "./pages/Update";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppBar sx={{ backgroundColor: "#82AAE3" }}>
          <Toolbar>
            <Typography variant="h5" sx={{ textAlign: "left", flexGrow: 1 }}>
              Sole Cart MNL
            </Typography>
            <Box>
              <Link to="/" style={{ textDecoration: "none", float: "right" }}>
                <Button sx={{ color: "white" }}>Home</Button>
              </Link>
            </Box>
            <Box>
              <Link to="/about-us" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white" }}>About Us</Button>
              </Link>
            </Box>
            <Box>
              <Link to="/shoes" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white" }}>Products</Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shoes" element={<Shoes />}></Route>
          <Route path="/about-us" element={<Aboutus />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
