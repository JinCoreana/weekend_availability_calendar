import { Route, Routes } from "react-router-dom";
import { DataProvider } from "../context/DataContext";
import About from "./About";

import Calendar from "./Calendar";
import "../css/style.css";
import Layout from "./Layout";
import Missing from "./Missing";
function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/weekend_cad" element={<Layout />}>
          <Route index element={<Calendar />} />
          {/* <Route path="superjin1992">
            <Route index element={<Admin />} />
          </Route> */}
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}
export default App;
