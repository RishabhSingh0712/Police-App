import "./App.css";
import Header from "./components/Header";
import Loginpage from "./components/Loginpage";
import Complaint from "./components/Complaint";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
// import Home from "./components/Home";

function App() {
  return (
    <div className="App bg-gray-500">
      <Router>
        <Routes>
        
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route
            path="/RegisterForm"
            element={
              <>
                {/* <Home/> */}
                <Header />
                <RegisterForm />
              </>
            }
          />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
