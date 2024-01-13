import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/gate/login/login";
import CreateCarModel from "./components/gate/gestion/createCarModel/CreateCarModel";
import ManageInformation from "./components/gate/gestion/createCarModel/ManageCarElementsModel";



function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route>

          <Route path="/login" element={<Login/>}/>

          <Route path="/elements" element={<ManageInformation/>} />

          <Route path="/createModel" element={<CreateCarModel/>} />

        </Route>        

      </Routes>

    </BrowserRouter>  

  );
}

export default App;
