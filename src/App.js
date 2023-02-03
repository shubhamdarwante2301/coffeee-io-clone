import { Route, Routes } from "react-router";
import Home from "./component/Home";
import AboutUs from "./component/AboutUs";
import Team from "./component/Team"
import ContactUs from "./component/ContactUs"
import CampusPartners from "./component/CampusPartners"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/campus-partners" element={<CampusPartners />} />
      </Routes>
    </div>
  );
}

export default App;
