//import Frame from '../../assets/images/Frame.png';
import RightArrow from '../../assets/images/white-right-arrow.png';
import HeroImage from '../../assets/images/hero-image.png';
import AbsoluteImage from '../../assets/images/absolute-img.png';

function HeroSection() {
  return (
    <div className="container-abs-img" id='hero-section'>
      <div className="hero-section container">
        <div className="hero-info info-container">
            <div className='hero-info-header'>
                <h1>Simplify with <span>Neighborhood Help.</span></h1>
                <p>Effortless Errands and Services Right at Your Fingertips.</p>
            </div>
            <form className="location" action="">
                {/* <img src={Frame} alt="icons" className='frame'/>
                <div className="input-fields">
                    <input type="text" name="pick-up" id="pick-up" placeholder="Enter pickup point" className='input'/>
                    <input type="text" name="destination" id="destination" placeholder="Where to?" className='input'/>
                </div> */}
                <div className='hero-btn'>
                    <a href='/'>
                        <p>Get Started</p>
                        <img src={RightArrow} alt="Right Arrow"/>
                    </a>
                </div>
            </form>
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
