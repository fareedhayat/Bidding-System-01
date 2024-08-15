
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../Images/logo.png'; 
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import bannerImage1 from '../Images/banner1.jpeg'; 

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user session from session storage
    sessionStorage.removeItem('user');
    // Redirect user to landing page
    navigate('/');
  };

  const user = JSON.parse(sessionStorage.getItem('user'));
  const userType = user?.user?.userType;
  const isLoggedIn = !!user;
  const userName = user?.user?.name;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        {/* <h1 className="logo">Bid Crate</h1> */}

          <img src={logoImage} alt="Logo" width="200" height="70" className="d-inline-block align-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <form className="search-form d-flex ms-auto me-auto">
          <input className="form-control search-input me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-primary search-btn" type="submit">Search</button>
        </form>


          {/* <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <>
                {userType === 'Seller' && (
                  <>
                    <li className="nav-item">
                      <Link className="btn nav-link me-2 btn btn-primary custom-link" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="btn nav-link me-2 btn btn-primary custom-link" to="/addItem">
                        Add Item
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="btn nav-link me-2 btn btn-primary custom-link" to="/user-items">
                        Show Items
                      </Link>
                    </li>
                  </>
                )}

                {userType === 'Buyer' && (
                  <>
                    <li className="nav-item">
                      <Link className="btn nav-link me-2 btn btn-primary custom-link" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/cart" className="btn nav-link me-2 btn btn-primary custom-link" >
                        <FontAwesomeIcon icon={faShoppingCart} className="me-1" /> Cart
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="btn nav-link me-2 btn btn-primary custom-link" to="/auction-items">
                        Auction Items
                      </Link>
                    </li>
                  </>
                )}
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                    {userName}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn nav-link me-2 btn btn-primary custom-link" to="/view-items">
                    View Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn nav-link me-2 btn btn-primary custom-link" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn nav-link me-2 btn btn-primary custom-link" to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn nav-link me-2 btn btn-primary custom-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn nav-link btn btn-primary custom-link" to="/register">
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul> */}
         <ul className="navbar-nav ms-auto">
  {isLoggedIn ? (
    <>
      {userType === 'Seller' && (
        <>
          <li className="nav-item mm">
            <Link className="nav-link me-2 custom-link-nav" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item mm">
            <Link className="nav-link me-2 custom-link-nav" to="/addItem">
              Add Item
            </Link>
          </li>
          <li className="nav-item mm">
            <Link className="nav-link me-2 custom-link-nav" to="/user-items">
              Show Items
            </Link>
          </li>
        </>
      )}

      {userType === 'Buyer' && (
        <>
          <li className="nav-item mm">
            <Link className="nav-link me-2 custom-link-nav" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item mm">
            <Link to="/cart" className="nav-link me-2 custom-link-nav" >
              <FontAwesomeIcon icon={faShoppingCart} className="me-1" /> Cart
            </Link>
          </li>
          <li className="nav-item mm">
            <Link className="nav-link me-2 custom-link-nav" to="/auction-items">
              Auction Items
            </Link>
          </li>
        </>
      )}
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic" className="custom-link">
          <FontAwesomeIcon icon={faUser} className="me-2" />
          {userName}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  ) : (
    <>
      <li className="nav-item mm">
        <Link className="nav-link me-2 custom-link-nav" to="/view-items">
          View Items
        </Link>
      </li>
      <li className="nav-item mm">
        <Link className="nav-link me-2 custom-link-nav" to="/contact-us">
          Contact Us
        </Link>
      </li>
      <li className="nav-item mm">
        <Link className="nav-link me-2 custom-link-nav" to="/privacy-policy">
          Privacy Policy
        </Link>
      </li>
      <li className="nav-item mm">
        <Link className="nav-link me-2 custom-link-nav" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item mm">
        <Link className="nav-link custom-link-nav" to="/register">
          Signup
        </Link>
      </li>
    </>
  )}
</ul>

        </div>
      </div>
    </nav>
  );
};

export default Header;

