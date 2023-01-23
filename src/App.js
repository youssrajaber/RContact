import "./App.css";
import OneContact from "./CC/OneContact";
import Contacts from "./CC/Contacts";
import Contact from "./CC/Contact";
import { Route, Routes } from "react-router-dom";
import ContactApp from "./CC/ContactApp";

function App() {
  return (
    <div className="App">
      <Contact>
        <Routes>
          <Route path="/" element={<ContactApp />} ></Route>
          <Route path="/Add" element={<Contacts />}></Route>
          <Route path="*" element={<ContactApp />}></Route>
        </Routes>
      </Contact>
    </div>
  );
}

export default App;
