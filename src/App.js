import "./App.css";
import { data } from "./components/data";
import NameSection from "./components/NameSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  // console.log(data.name);
  // console.log(data.password);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<NameSection data={data} />} />

        <Route exact path="/view/:id" element={<Profile data={data} />} />
      </Routes>
    </BrowserRouter>
    // <Profile />
    // <NameSection data={data} />
  );
}

export default App;
