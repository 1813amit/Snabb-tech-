import "./App.css";
import { Route,Routes} from "react-router-dom";
import Home from "./Components/pages/Home";
import Signin from "./Components/pages/Sigin";
import Forgot from "./Components/pages/Forgot";
import Resendlink from "./Components/pages/Forgotpassresend";
import Newpass from "./Components/pages/Newpass";
import Newpassdone from "./Components/pages/Newpassdone";

function App() {
  return (
   <div className="w-screen min-h-screen flex flex-col font-inter font-jost ">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/ForgotPassword" element={<Forgot/>} />
        <Route path="/Resendlink" element={<Resendlink/>} />
        <Route path="/resetmypassword" element={<Newpass/>} />
        <Route path="/resetpassworddone" element={<Newpassdone/>} />
      </Routes>
   </div>
  );
}

export default App;
