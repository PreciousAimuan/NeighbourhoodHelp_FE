import Image from '../../assets/images/services-image.png';
//import BlueRightArrow from '../../assets/images/blue-right-arrow.png';
//import BlueRightArrow from '../../assets/images/blue-right-arrow.png';

function Services() {
  return (
    <div className='services container' id='services-info'>
      <div className="services-info info-container">
        <h2 className='info-header'>Our Featured Services</h2>
        <p className='info-paragraph'>Discover unparalleled convenience with our committed team. Our agents deliver prompt and reliable assistance, encompassing a wide range of services including package pickups, grocery deliveries, and adept bargaining, all tailored to your schedule and preferences.</p>
      </div>
      <div className="services-image full-image">
        <img src={Image} alt="" />
      </div>
    </div>
  )
}

export default Services
