import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./gate/Accueil";




function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route>

          <Route path="/" element={<Accueil/>}/>

          {/* <Route path="/elements" element={<ManageInformation/>} />

          <Route path="/createModel" element={<CreateCarModel/>} />

          <Route path="/statistics" element = {<Statistics/>} />

          <Route path="/validation" element = {<ValidationAnnonce/>} />

          <Route path="/deconnection" element = {<Deconnection/>} /> */}
          
        </Route>        

      </Routes>

    </BrowserRouter>  
    // <div className="">
    //   <p>

    //   tay
    //   </p>

    // </div>
  );
}

export default App;
