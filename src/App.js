import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeIndex from './Components/HomePage/HomeIndex';
import ContactUsIndex from './Components/ContactUs/ContactUsIndex';
// import About from './Components/About';   // optional
// import Contact from './Components/Contact'; // optional
import TermsIndex from './Components/TermsandCondition/TermsIndex';
import PrivacyPolicyIndex from './Components/PrivacyPolicy/PrivacyPolicyIndex';
import ServicesIndex from './Components/Services/ServicesIndex';
import GalleryIndex from './Components/Gallery/GalleryIndex';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeIndex />} />
      <Route path="/ContactUsIndex" element={<ContactUsIndex />} />
      <Route path="/TermsIndex" element={<TermsIndex />} />
      <Route path="/PrivacyPolicyIndex" element={<PrivacyPolicyIndex />} />
      <Route path="/ServicesIndex" element={<ServicesIndex />} />
      <Route path="/GalleryIndex" element={<GalleryIndex />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
