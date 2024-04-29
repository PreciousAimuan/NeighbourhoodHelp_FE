import Image from '../../assets/images/services-image.png';
//import BlueRightArrow from '../../assets/images/blue-right-arrow.png';

function Services() {
  return (
    <div className='services container' id='services-info'>
      <div className="services-info info-container">
        <h2 className='info-header'>Our Featured Services</h2>
        <p className='info-paragraph'>For quick and reliable assistance, our agents handle everything from package pickups to grocery deliveries, all tailored to your schedule. Additionally, our skilled providers offer a range of services, from household tasks to specialized needs—simply let us know, and we'll connect you with the right professional.</p>
        {/* <div className="btn-link">
            <a href="/">
                <p>Check the tools</p>
                <img src={BlueRightArrow} alt="" />
            </a>
        </div> */}
      </div>
      <div className="services-image full-image">
        <img src={Image} alt="" />
      </div>
    </div>
  )
}

export default Services
