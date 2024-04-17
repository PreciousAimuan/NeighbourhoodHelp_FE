import WhiteArrow from '../../assets/images/white-right-arrow.png';

function JoinSection() {
  return (
    <div className='join-section container'>
      {/* <div className="join-section-container"> */}
        <h2 className='join-section-header'>Join Neighbourhood Help Today</h2>
        <p className='join-section-paragraph'>Embark on a journey of convenience and reliability with Neighbourhood Help. Sign up today to unlock a world of seamless errands and services.</p>
        <div className="join-btn">
            <a href="/">
                <p className='join-btn-paragragh'>Sign Up Free</p>
                <img src={WhiteArrow} alt="" />
            </a>
        </div>
      {/* </div> */}
    </div>
  )
}

export default JoinSection
