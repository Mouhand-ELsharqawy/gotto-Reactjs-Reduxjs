import { NavLink } from "react-router-dom/cjs/react-router-dom";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import src1 from '../images/logo.png';

const Header = () => {
    return ( 
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
          
                    <NavLink className="navbar-brand d-flex align-items-center"  to="/">
                    <div className="d-flex flex-column">
                        <strong className="logo-text">Gotto</strong>
                        <small className="logo-slogan">Online Job Portal</small>
                    </div> 
                    </NavLink>
                    <img src={src1} className="img-fluid logo-image" />

                    

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items-center ms-lg-5">
                        <li className="nav-item">
                                {/* <NavLink className="nav-link"
                                 to="/"> */}
                                 <NavLink exact  className="nav-link" 
                                 to="/">
                                    Homepage
                                 </NavLink>
                                    
                                {/* </NavLink> */}
                                
                        </li>

                        <li className="nav-item">
                                <NavLink exact className=" nav-link" to="/about">
                                    About Gotto
                                </NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            
                                <NavLink exact  id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle" to="/mvhvyhcjcjyxxxgkhmckcttrsrse">
                                    Pages
                                </NavLink>
                            

                            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                <li>

                                    <NavLink exact className="dropdown-item" to="/joblist">
                                    Job Listings
                                    </NavLink></li>

                                <li>
                                    <NavLink exact className="dropdown-item" to="/jobdetail">
                                    Job Details
                                    </NavLink>
                                    
                                    </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            
                                <NavLink exact className="nav-link" to="/contact">
                                    Contact 
                                </NavLink>
                               
                        </li>

                        <li className="nav-item ms-lg-auto">
                            <NavLink className="nav-link"   to="#">
                            Register
                            </NavLink>   
                        </li>
                        <li className="nav-item">
                                <NavLink className="nav-link custom-btn btn" to="#"> Login </NavLink>
                
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        </>
     );
}
 
export default Header;