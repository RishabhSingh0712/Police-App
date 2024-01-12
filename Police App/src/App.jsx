import "./App.css";
import Header from "./components/Header";
import Loginpage from "./components/Loginpage";
import Complaint from "./components/Complaint";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Service from "./components/Service";
import Missing_Found from "./components/Missing_Found";
import PersonForm from "./Form/PersonForm";
import VechileForm from "./Form/VehicleForm";
import PetForm from "./Form/PetForm";
import BagForm from "./Form/BagForm";
import MobileForm from "./Form/MobileForm";
import OtherForm from "./Form/OtherForm";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/service" element={<Service />} />
          <Route path="/missing_Found" element={<Missing_Found />} />
          <Route path="/personform" element={<PersonForm />} />
          <Route path="/vechileform" element={<VechileForm />} />
          <Route path="/petform" element={<PetForm />} />
          <Route path="/bagform" element={<BagForm />} />
          <Route path="/mobileform" element={<MobileForm />} />
          <Route path="/otherform" element={<OtherForm />} />
          <Route path="/" element={<Header />} />
          <Route path="/RegisterForm"element={<> <RegisterForm/> </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
