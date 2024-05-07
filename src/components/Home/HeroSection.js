import RightArrow from '../../assets/images/white-right-arrow.png';
import HeroImage from '../../assets/images/hero-image.png';
import AbsoluteImage from '../../assets/images/absolute-img.png';
import { Link as Linker } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="container-abs-img" id='hero-section'>
      <div className="hero-section container">
        <div className="hero-info info-container">
            <div className='hero-info-header'>
                <h1>Simplify with <span>Neighborhood Help.</span></h1>
                <p>Effortless Errands and Services Right at Your Fingertips.</p>
            </div>
                <div className='hero-btn'>
                    <Linker to="/signup">
                        <p>Get Started</p>
                        <img src={RightArrow} alt="Right Arrow"/>
                    </Linker>
                </div>
        </div>
        <div className="hero-image full-image">
            <img src={HeroImage} alt="A rider" id='hero'/>
            <img src={AbsoluteImage} alt="An icon" className='hero-abs-img'/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
