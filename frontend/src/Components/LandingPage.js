import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch, faHandHoldingUsd,faPaintBrush, faGem, faCar, faRecycle ,faGavel, faShieldAlt, faThumbsUp, faUsers, faShoppingCart, faMoneyBillWave, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logoImage from '../Images/logo1.png';
import bannerImage1 from '../Images/bn1.png';
import bannerImage2 from '../Images/bn2.png';
import avatar1 from '../Images/avatar1.jpg';
import avatar2 from '../Images/avatar2.jpeg';
import avatar3 from '../Images/avatar3.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: '#291E47' }}>
        <Carousel controls={false} indicators={false} interval={3000} prevLabel="" nextLabel="">
          <Carousel.Item>
            <img className="d-block w-100" src={bannerImage1} alt="Banner 1" style={{ objectFit: 'cover', height: '100vh' }} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={bannerImage2} alt="Banner 2" style={{ objectFit: 'cover', height: '100vh' }} />
          </Carousel.Item>
        </Carousel>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent" style={{ position: 'absolute', top: 0, width: '100%' }}>
          <div className="container">
            <Link className="navbar-brand" to="/">
            {/* <h1 className="logo">Bid Crate</h1> */}

              <img src={logoImage} alt="Logo" width="180" height="70" className="d-inline-block align-top" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/view-items">View Items</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary me-2" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary" to="/register">Signup</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
        <section className="features py-5">
          <Container>
            <h2 className="text-center mb-5">Why Choose Us?</h2>
            <Row className="justify-content-center">
              <Feature icon={faGavel} title="Wide Range of Items" description="Bid on antiques, arts, jewelry, cars, and more. Our platform offers a diverse range of items to suit every interest." />
              <Feature icon={faShieldAlt} title="Secure Transactions" description="We ensure secure transactions for every purchase. Your safety and satisfaction are our top priorities. Security First!!" />
              <Feature icon={faThumbsUp} title="Easy to Use" description="Our platform is user-friendly and easy to navigate. Whether you're a buyer or seller, you can use our site with ease." />
            </Row>
          </Container>
        </section>

        <section className="categories py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: '#291E47' }}>Categories</h2>
          <Row>
            <Category title="Antiques" description="Discover a wide range of antiques and place your bids now!" icon={faGavel} />
            <Category title="Arts" description="Explore the world of art and find unique pieces for your collection." icon={faPaintBrush} />
            <Category title="Jewelry & Watches" description="Browse our selection of fine jewelry and luxury watches." icon={faGem} />
            <Category title="Cars" description="Easily find your dream car at our Online Auctions Platform." icon={faCar} />
            <Category title="Scrap" description="Get great deals on scrap materials and industrial items." icon={faRecycle} />
          </Row>
        </Container>
      </section>
      <section className="how-it-works py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: '#291E47', fontSize: '2.5rem' }}>How It Works</h2>
          <Row>
            <Col md={6} className="mb-4">
              <HowItWorks title="For Buyers" steps={["Browse our diverse range of auction items.", "Place bids on your favorite items.", "Win and secure unique items through the auction process."]} />
              <FontAwesomeIcon icon={faSearch} size="6x" className="mt-4" style={{ color: '#FF6347' }} />
            </Col>
            <Col md={6} className="mb-4">
              <HowItWorks title="For Sellers" steps={["Create an account and list your items for auction.", "Set your starting bid and auction duration.", "Attract buyers and finalize sales securely."]} />
              <FontAwesomeIcon icon={faHandHoldingUsd} size="6x" className="mt-4" style={{ color: '#FF6347' }} />
            </Col>
          </Row>
        </Container>
      </section>


      <section className="testimonials py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: '#291E47', fontSize: '2.5rem' }}>Testimonials</h2>
          <Row>
            <Testimonial quote="This auction site is amazing! I found exactly what I was looking for and the process was seamless." author="Jane Doe" avatar={avatar1} />
            <Testimonial quote="Selling my old car was a breeze. I got a great price and the transaction was secure and easy." author="John Smith" avatar={avatar2} />
            <Testimonial quote="I love the variety of items available. I've bought several pieces of art and jewelry, all at great prices." author="Mary Johnson" avatar={avatar3} />
          </Row>
        </Container>
      </section>


        <section className="cta text-center py-5">
          <Container>
            <h2 className="mb-4">Join Our Community</h2>
            <Row className="justify-content-center">
              <CTACard icon={faShoppingCart} title="Buyers" description="Explore a vast array of items and place your bids on unique finds. Get started today and uncover amazing deals!" buttonText="Start Bidding" />
              <CTACard icon={faMoneyBillWave} title="Sellers" description="Reach a wide audience and sell your items efficiently. Join our platform and start earning from your items!" buttonText="Start Selling" />
            </Row>
          </Container>
        </section>
        </div>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <Col md={4}>
      <div className="feature text-center p-4">
        <FontAwesomeIcon icon={icon} size="3x" className="mb-3 text-primary" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Col>
  );
};

const Category = ({ title, description, icon }) => {
  return (
    <Col md={4} className="mb-3">
      <div className="category-card text-center p-4">
        <FontAwesomeIcon icon={icon} size="3x" style={{ color: '#FF6347' }} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Col>
  );
};


const HowItWorks = ({ title, steps }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

const Testimonial = ({ quote, author, avatar }) => {
  return (
    <Col md={4} className="mb-4">
      <div className="testimonial text-center p-4">
        <img src={avatar} alt={author} className="rounded-circle mb-3" style={{ width: '100px', height: '100px' }} />
        <p className="mb-4">"{quote}"</p>
        <h5>{author}</h5>
      </div>
    </Col>
  );
};


const CTACard = ({ icon, title, description, buttonText }) => {
  return (
    <Col md={6} className="mb-4">
      <div className="cta-card p-5">
        <FontAwesomeIcon icon={icon} size="6x" className="mb-3 text-primary" />
        <h3>{title}</h3>
        <p>{description}</p>
        <Button variant="primary" size="lg">{buttonText}</Button>
      </div>
    </Col>
  );
};

export default LandingPage;

