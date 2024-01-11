import "./App.css";
import Header from "./components/Header";
import Loginpage from "./components/Loginpage";
import Complaint from "./components/Complaint";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Service from "./components/Service";
import Missing_Found from "./components/Missing_Found";
import PersonForm from "./Form/PersonForm";

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
          <Route path="/" element={<Header />} />
          <Route path="/RegisterForm"element={<> <RegisterForm/> </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
