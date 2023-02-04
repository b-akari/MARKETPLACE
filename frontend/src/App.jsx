import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import Update from "./pages/Update";
import "./style.css"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <AppBar sx={{backgroundColor: "#82AAE3"}}>
        <Toolbar>
          <Typography variant="h5" sx={{alignItems: "center", justifyContent: "center"}}>
            Shoe Store
          </Typography>
          
            <Link to="/" style={{textDecoration: "none", float: "right"}}>
              <Button sx={{color: "white"}}>Home</Button>
            </Link>
          
          
            <Link to="/about-us" style={{textDecoration: "none"}}>
              <Button sx={{color: "white"}}>About Us</Button>
            </Link>
          
         
            <Link to="/shoes" style={{textDecoration: "none"}}>
              <Button sx={{color: "white"}}>Products</Button>
            </Link>
          
        </Toolbar>
      </AppBar>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shoes" element={<Shoes/>}></Route>
        <Route path="/about-us" element={<Aboutus/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;