import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import User from "./Components/Users/User";
import Contact from "./Components/Contact/Contact";
import Userdetails from "./Components/userdetails/Userdetails";
import Testimonial from "./Components/Testimonial/Testimonial";
import CreateTestimonial from "./Components/Testimonial/CreateTestimonial";
import UpdateTestimonial from "./Components/Testimonial/UpdateTestimonial";
import { Toaster } from "react-hot-toast";
import Bride from "./Components/Braide/Bride";

function App() {
  const login = sessionStorage.getItem("login");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {login ? (
            <Route path="/home" element={<Home />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}

          <Route path="/users" element={<User />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/userdetails/:_id" element={<Userdetails />} />

          <Route path="/success" element={<Testimonial />} />
          <Route path="/createsuccess" element={<CreateTestimonial />} />
          <Route path="/updatesuccess/:_id" element={<UpdateTestimonial />} />

          <Route path="/bride" element={<Bride />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
