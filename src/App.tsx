import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import ReferandEarnPage from "./pages/ReferandEarnPage";
import AdvertisePage from "./pages/AdvertisePage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import BlogsPage from "./pages/BlogsPage";
import SingleBlog from "./components/blogspage/SingleBlog";
import LatestOffersPage from "./pages/LatestOffersPage";
import DealDetail from "./components/latestofferspage/DealDetail";
import CategoryPage from './components/latestofferspage/CategoryPage';
import Stores from "./components/latestofferspage/Stores";
import UserPage from "./pages/UserPage";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="">
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={< ContactPage />} />
        <Route path="/refer-and-earn" element={<ReferandEarnPage />} />
        <Route path="/advertise-with-us" element={<AdvertisePage />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/user-profile" element={<UserPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/latest-offers" element={<LatestOffersPage />} />
        <Route path="/deal/:id" element={<DealDetail />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="/stores/:store" element={<Stores />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
