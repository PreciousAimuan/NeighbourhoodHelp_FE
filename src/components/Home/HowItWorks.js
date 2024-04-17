import Image1 from "../../assets/images/how-it-works-image.png";
import Image2 from "../../assets/images/how-it-works-image-2.png";
import Image3 from "../../assets/images/how-it-works-image-3.png";
import AbsoluteImage2 from "../../assets/images/absolute-img-2.png";
import BlueRightArrow from "../../assets/images/blue-right-arrow.png";

function HowItWorks() {
  return (
    <div className='container-abs-img' id="how-it-works">
      <div className="how-it-works container">
        <div className="how-it-works-images">
            <img src={Image2} alt="" className='how-it-works-image-2'/>
            <img src={Image3} alt="" className='how-it-works-image-3'/>
            <img src={Image1} alt="" className='how-it-works-image-1'/>
            <img src={AbsoluteImage2} alt="" className='how-it-works-abs-img'/>
        </div>
        <div className="how-it-works-info info-container">
            <h2 className='info-header'>How Neighbourhood Help Works</h2>
            <p className='info-paragraph'>Simply tell us what you need, whether it's a package pickup, grocery shopping, or a service request. Track your request in real-time from pickup to delivery, and our dedicated agents ensure your errands are completed seamlessly, allowing you to focus on what matters.</p>
            <div className='btn-link'>
                <a href="/">
                    <p id='btn-p'>See how it helped others</p>
                    <img src={BlueRightArrow} alt="" />
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
