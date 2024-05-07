import WhiteArrow from '../../assets/images/white-right-arrow.png';
import { Link as Linker } from 'react-router-dom';

function JoinSection() {
  return (
    <div className='join-section container'>
      {/* <div className="join-section-container"> */}
        <h2 className='join-section-header'>Join Neighbourhood Help Today</h2>
        <p className='join-section-paragraph'>Embark on a journey of convenience and reliability with Neighbourhood Help. Sign up today to unlock a world of seamless errands and services.</p>
        <div className="join-btn">
            <Linker to="/signup">
                <p className='join-btn-paragragh'>Sign up for free</p>
                <img src={WhiteArrow} alt="" />
            </Linker>
        </div>
      {/* </div> */}
    </div>
  )
}

export default JoinSection
