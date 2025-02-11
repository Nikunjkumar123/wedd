import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login/Loginpage";
import SignupPage from "./Pages/Signup/SignupPage";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Member from "./Pages/Membership Planes/Member";
import ContactUs from "./Pages/CONTACTUS/ContactUs";
import MalikFooter from "./Components/Footer/MalikFooter";
import ProfilePage from "./Pages/PROFILES/ProfilePage";
import UserProfile from "./Pages/UserProfile/UserProfile";
import InnerProfile from "./Pages/DynamicInnerProfile/InnerProfile";
import TermsAndConditions from "./Pages/TermCondition/TermsAndConditions ";
import PrivacyPolicy from "./Pages/TermCondition/PrivacyPolicy";
import PageNotFound from "./Pages/PageNotFound";
import ConnectionReq from "./Pages/UserProfile/ConnectionReq";
import MyConnection from "./Pages/UserProfile/MyConnection";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/member" element={<Member />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/InnerProfile/:id" element={<InnerProfile />} />
        <Route path="/termCondition" element={<TermsAndConditions/>} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/connectionReq" element={<ConnectionReq/>} />
        <Route path="/myConnection" element={<MyConnection/>} />
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>
      <MalikFooter/>
    </Router>
  );
}

export default App;
