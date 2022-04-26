import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import List from "./pages/home/list/List";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path= "list" element={<List/>}/>
        </Route>
      </Routes>
    </BrowserRouter>,
    </div>
  );
}

export default App;
