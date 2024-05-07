import Image1 from "../../assets/images/how-it-works-image.png";
import Image2 from "../../assets/images/how-it-works-image-2.png";
import Image3 from "../../assets/images/how-it-works-image-3.png";
import AbsoluteImage2 from "../../assets/images/absolute-img-2.png";

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
            <p className='info-paragraph'> From coordinating package pickups to managing service requests, we guarantee smooth execution of your errands, allowing you to prioritize what truly matters. 
            Give us your errands</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
