import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col,Spinner } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Header from '../Components/Header';
import background from '../Images/thing.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomToast = ({ type, message }) => {
  return (
    <div className={`custom-toast custom-toast-${type}`}>
      <span>{message}</span>
    </div>
  );
};
const categoryOptions = [
  { value: 'Antiques', label: 'Antiques' },
  { value: 'Arts', label: 'Arts' },
  { value: 'Jewelry & Watches', label: 'Jewelry & Watches' },
  { value: 'Cars', label: 'Cars' },
  { value: 'Scrap', label: 'Scrap' }
];

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    categories: '',
    isActivated: false,
    userType: 'Seller',
    isActive: true,
  });


  const notify = (type, message) => {
    toast(
      <CustomToast type={type} message={message} />,
      {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const form = useRef();
  const { name, email, password, categories, isActivated, userType, isActive } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onCategoryChange = (selectedOptions) => {
    setFormData({ ...formData, categories: selectedOptions.map(option => option.value) });
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_4tfluyb',
        'template_o35qpxn',
        form.current,
        '7wfHkEpC4iZ5cIjxs'
      )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
        },
        (error) => {
          console.error('Failed to send email:', error.text);
        }
      );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', formData);
      console.log(res.data);
      if (res.status === 201) {

        sessionStorage.setItem('user', JSON.stringify(res.data));
        notify('success', 'Registered  Successfully!');
        setTimeout(() => {
          setLoading(false);
          sendEmail();
          navigate('/login');
        }, 3000); // Close loader after 3 seconds
      } else {
        notify('error', 'Register Failed!');
        setLoading(false);
      }
    } catch (err) {
      notify('error', 'Register Failed!');
      setLoading(false);
    }
  };

  return (
    // <div className="register-page" style={{ backgroundImage: `url(${background})`, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    //   <Container>
    //     <Row className="justify-content-md-center">
    //       <Col md="6" lg="4" className="register-container">
    //         <div className="profile-icon">
    //           <FontAwesomeIcon icon={faUser} size="5x" />
    //         </div>
    //         <h2 className="text-center">Register to Bid Crate</h2>
    //         <Form ref={form} onSubmit={onSubmit}>
    //           <Form.Group controlId="formName">
    //             <Form.Label>Name</Form.Label>
    //             <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={onChange} required />
    //           </Form.Group>

    //           <Form.Group controlId="formEmail">
    //             <Form.Label>Email</Form.Label>
    //             <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={onChange} required />
    //           </Form.Group>

    //           <Form.Group controlId="formPassword">
    //             <Form.Label>Password</Form.Label>
    //             <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChange} required />
    //           </Form.Group>

    //           <Form.Group controlId="formCategories">
    //             <Form.Label>Categories</Form.Label>
    //             <Select
    //               isMulti
    //               name="categories"
    //               options={categoryOptions}
    //               className="basic-multi-select"
    //               classNamePrefix="select"
    //               onChange={onCategoryChange}
    //             />
    //           </Form.Group>

    //           <Form.Group controlId="formUserType">
    //             <Form.Label>User Type</Form.Label>
    //             <Form.Control as="select" name="userType" value={userType} onChange={onChange} required>
    //               <option>Buyer</option>
    //               <option>Seller</option>
    //             </Form.Control>
    //           </Form.Group>

    //           <Button variant="primary" type="submit" className="mt-3" style={{ width: '100%' }} disabled={loading}>
    //             {loading ? (
    //               <Spinner animation="border" role="status" size="sm">
    //                 <span className="sr-only">Loading...</span>
    //               </Spinner>
    //             ) : (
    //               'Register'
    //             )}
    //           </Button>
    //         </Form>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <ToastContainer />
    // </div>
<div className="register-page" style={{ backgroundImage: `url(${background})` }}>
  <div className="overlay"></div>
  <Container>
    <Row className="justify-content-md-center">
      <Col md="6" lg="4" className="register-container">
        <div className="profile-icon">
          <FontAwesomeIcon icon={faUser} size="5x" />
        </div>
        <h2 className="text-center">Register to Bid Crate</h2>
        <Form ref={form} onSubmit={onSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={onChange} required />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={onChange} required />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChange} required />
          </Form.Group>
          <Form.Group controlId="formCategories">
            <Form.Label>Categories</Form.Label>
            <Select
              isMulti
              name="categories"
              options={categoryOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={onCategoryChange}
            />
          </Form.Group>
          <Form.Group controlId="formUserType">
            <Form.Label>User Type</Form.Label>
            <Form.Control as="select" name="userType" value={userType} onChange={onChange} required>
              <option>Buyer</option>
              <option>Seller</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3" style={{ width: '100%' }} disabled={loading}>
            {loading ? (
              <Spinner animation="border" role="status" size="sm">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              'Register'
            )}
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  <ToastContainer />
</div>


  );
};

export default Register;

