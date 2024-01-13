import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/gate/login/login";
import CreateCarModel from "./components/gate/gestion/createCarModel/CreateCarModel";
import ManageInformation from "./components/gate/gestion/createCarModel/ManageCarElementsModel";
import Statistics from "./components/gate/stats/Statistics";
import ValidationAnnonce from "./components/gate/validation/ValidatonAnnonces";



function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route>

          <Route path="/" element={<Login/>}/>

          <Route path="/elements" element={<ManageInformation/>} />

          <Route path="/createModel" element={<CreateCarModel/>} />

          <Route path="/statistics" element = {<Statistics/>} />

          <Route path="/validation" element = {<ValidationAnnonce/>} />
          
        </Route>        

      </Routes>

    </BrowserRouter>  

  );
}

export default App;
