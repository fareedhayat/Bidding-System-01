import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
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

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { email, password } = formData;

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

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', formData);
      console.log(res.data);

      if (res.status === 200) {

        sessionStorage.setItem('user', JSON.stringify(res.data));
        notify('success', 'Logged In Successfully!');
        setTimeout(() => {
          setLoading(false);
          navigate('/dashboard');
        }, 3000); // Close loader after 3 seconds
      } else {
        notify('error', 'Login Failed!');
        setLoading(false);
      }
    } catch (err) {
      notify('error', 'Login Failed!');
      setLoading(false);
      // console.error(err.response.data);
    }
  };

  return (
    // <div className="login-page" style={{ backgroundImage: `url(${background})`, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
    //   <Container>
    //     <Row className="justify-content-md-center">
    //       <Col md="4" className="login-container">
    //         <div className="profile-icon">
    //           <FontAwesomeIcon icon={faUser} size="5x" />
    //         </div>
    //         <h2 className="text-center">Welcome to Bid Crate</h2>
    //         <Form onSubmit={onSubmit}>
    //           <Form.Group controlId="formEmail">
    //             <Form.Label>Email</Form.Label>
    //             <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={onChange} required />
    //           </Form.Group>

    //           <Form.Group controlId="formPassword">
    //             <Form.Label>Password</Form.Label>
    //             <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChange} required />
    //             <Form.Text className="text-muted">
    //               <a href="#">Forgot Password?</a>
    //             </Form.Text>
    //           </Form.Group>

    //           <Button variant="primary" type="submit" className="mt-3" style={{ width: '100%' }} disabled={loading}>
    //             {loading ? (
    //               <Spinner animation="border" role="status" size="sm">
    //                 <span className="sr-only">Loading...</span>
    //               </Spinner>
    //             ) : (
    //               'Login'
    //             )}
    //           </Button>
    //         </Form>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <ToastContainer />
    // </div>
    <div className="login-page" style={{ backgroundImage: `url(${background})` }}>
  <div className="overlay"></div>
  <Container>
    <Row className="justify-content-md-center">
      <Col md="4" className="login-container">
        <div className="profile-icon">
          <FontAwesomeIcon icon={faUser} size="5x" />
        </div>
        <h2 className="text-center">Welcome to Bid Crate</h2>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={onChange} required />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChange} required />
            <Form.Text className="text-muted">
              <a href="#">Forgot Password?</a>
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3" style={{ width: '100%' }} disabled={loading}>
            {loading ? (
              <Spinner animation="border" role="status" size="sm">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              'Login'
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

export default Login;
