import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeIndex from './Components/HomePage/HomeIndex';
import ContactUsIndex from './Components/ContactUs/ContactUsIndex';
import TermsIndex from './Components/TermsandCondition/TermsIndex';
import PrivacyPolicyIndex from './Components/PrivacyPolicy/PrivacyPolicyIndex';
import ServicesIndex from './Components/Services/ServicesIndex';
import GalleryIndex from './Components/Gallery/GalleryIndex';
import AdvancedSpecializedServicesSection from './Components/Services/ServicesDescription/AdvancedSpecializedServicesSection';
import DesignStructuralConsultancy from './Components/Services/ServicesDescription/DesignStructuralConsultancy';
import Surveying from './Components/Services/ServicesDescription/Surveying';
import GeneralMaterialTesting from './Components/Services/ServicesDescription/GeneralMaterialTesting';
import BricksBlocksPavers from './Components/Services/ServicesDescription/BricksBlocksPavers';
import WaterWastewaterTesting from './Components/Services/ServicesDescription/WaterWastewaterTesting';
import ScrollToTop from './ScrollToTop';
import AggregateTestingSection from './Components/Services/ServicesDescription/AggregateTestingSection';
import CementTestingSection from './Components/Services/ServicesDescription/CementTestingSection';
import ConcreteTestingSection from './Components/Services/ServicesDescription/ConcreteTestingSection';
import SoilTestingSection from './Components/Services/ServicesDescription/SoilTestingSection';
import BitumenTestingSection from './Components/Services/ServicesDescription/BitumenTestingSection';
import BricksBlocksTilesPaversTestingSection from './Components/Services/ServicesDescription/BricksBlocksTilesPaversTestingSection';
import SteelTestingSection from './Components/Services/ServicesDescription/SteelTestingSection';
import WaterWastewaterTestingSection from './Components/Services/ServicesDescription/WaterWastewaterTestingSection';


function App() {
  return (
    <>
      <ScrollToTop />
      <div className="app-font">  
        <Routes>
          <Route path="/" element={<HomeIndex />} />
          <Route path="/ContactUsIndex" element={<ContactUsIndex />} />
          <Route path="/TermsIndex" element={<TermsIndex />} />
          <Route path="/PrivacyPolicyIndex" element={<PrivacyPolicyIndex />} />
          <Route path="/ServicesIndex" element={<ServicesIndex />} />
          <Route path="/GalleryIndex" element={<GalleryIndex />} />
          <Route path="/AdvancedSpecializedServicesSection" element={<AdvancedSpecializedServicesSection />} />
          <Route path="/DesignStructuralConsultancy" element={<DesignStructuralConsultancy />} />
          <Route path="/Surveying" element={<Surveying />} />
          <Route path='/GeneralMaterialTesting' element={<GeneralMaterialTesting />} />
          <Route path='/BricksBlocksPavers' element={<BricksBlocksPavers />} />
          <Route path='/WaterWastewaterTesting' element={<WaterWastewaterTesting />} />
          <Route path='/AggregateTestingSection' element={<AggregateTestingSection />} />
          <Route path='/CementTestingSection' element={<CementTestingSection />} />
          <Route path='/ConcreteTestingSection' element={<ConcreteTestingSection />} />
          <Route path='/SoilTestingSection' element={<SoilTestingSection />} />
          <Route path='/BitumenTestingSection' element={<BitumenTestingSection />} />
          <Route path='/BricksBlocksTilesPaversTestingSection' element={<BricksBlocksTilesPaversTestingSection />} />
          <Route path='/SteelTestingSection' element={<SteelTestingSection />} />
          <Route path='/WaterWastewaterTestingSection' element={<WaterWastewaterTestingSection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
