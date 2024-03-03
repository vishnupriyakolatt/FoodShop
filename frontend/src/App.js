import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Addproduct from "./pages/Addproduct";




function App() {
  return (
<>
<BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/addproduct' element={<Addproduct />} />
        
        
        </Routes>
      </BrowserRouter>
  
  </>
)
}



export default App;
