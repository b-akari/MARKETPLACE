import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Add from "./pages/Add";
import Shoes from "./pages/Shoes";
import Update from "./pages/Update";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Shoes/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
