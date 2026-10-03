import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import SignUp from "./auth/sign-up";
import Login from "./auth/login";
import Profile from "./profile/profile";
import RequireAuth  from "./lib/auth/auth-utils";
import Projects from "./project/project";

function Home() {
  return <h1>Home Page</h1>;
}


function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Navbar />
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
