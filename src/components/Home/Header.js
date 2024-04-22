import WhiteArrow from '../../assets/images/white-right-arrow.png';
import { Link } from 'react-scroll';
import { Link as Linker } from 'react-router-dom';
const Header = () => {
 
  return (
    <header className="header">
        <div className="header-logo">
            <p>Neighbourhood Help</p>
        </div>
        <div className="header-nav">
            <Link to="/">
              Home 
            </Link>
            <Link to="how-it-works"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}>How It Works
              </Link>
            <Link activeClass="active"
              to="services-info"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}>Services
              </Link>
        </div>
        <div className="header-signup">
          <Linker to="/login" className="log-in">
            Log In
          </Linker>
          <Linker to="/signup" className="sign-in">
            <p>Sign Up</p>
            <img src={WhiteArrow} alt=''/>
          </Linker>
        </div>
    </header>
  )
}
 
export default Header