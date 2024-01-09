import "./App.css";
import Header from "./components/Header";
import Loginpage from "./components/Loginpage";
import Complaint from "./components/Complaint";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/" element={<Header />} />

          <Route
            path="/RegisterForm"
            element={
              <>
              
                <RegisterForm/>
              </>
            }
          />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
