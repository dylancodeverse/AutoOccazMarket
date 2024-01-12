import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/gate/login/login";



function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route>

          <Route path="/login" element={<Login/>}/>



        </Route>        

      </Routes>

    </BrowserRouter>  

  );
}

export default App;
