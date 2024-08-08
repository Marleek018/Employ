import Homepage from "./Pages/Homepage/Homepage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./Pages/Pricing/Pricing";
import Layout from "./Components/Layout/Layout";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Homepage />} />
            <Route path="/pricing" element={<Pricing/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
