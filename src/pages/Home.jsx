import Header from '../components/Home/Header';
import HeroSection from "../components/Home/HeroSection";
import HowItWorks from "../components/Home/HowItWorks";
import Services from '../components/Home/Services';
import JoinSection from "../components/Home/JoinSection";
import Footer from '../components/Home/Footer';
import '../components/Home/Home.css';

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HowItWorks />
      <Services />
      <JoinSection />
      <Footer />
    </div>
  )
}

export default Home
