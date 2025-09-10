
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HeroSection from './Component/HeroSection/HeroSection';
import HeroSection1 from './Component/HeroSection1/HeroSection1';
import Footer from './Component/Footer/Footer';
import PreFooterSection from './Component/PreFooterSection/PreFooterSection';
import FeaturedCards from './Component/CustomCard/CustomCard';

function App() {
  return (
    <div className="App">
      <HeroSection1 />
      <HeroSection/>
      <PreFooterSection/>
      <FeaturedCards/>
      <Footer/>
      
     
      
     
    </div>
  );
}

export default App;
