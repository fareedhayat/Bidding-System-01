import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Col,Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import Header from '../Components/Header';
import background from '../Images/avatar1.jpg';


const categoryOptions = [
    { value: 'Antiques', label: 'Antiques' },
    { value: 'Arts', label: 'Arts' },
    { value: 'Jewelry & Watches', label: 'Jewelry & Watches' },
    { value: 'Cars', label: 'Cars' },
    { value: 'Scrap', label: 'Scrap' }
  ];
const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    categories: [],
    userType: '',
    isActive: false,
  });


  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = JSON.parse(sessionStorage.getItem('user'));
        setUserData(user.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(sessionStorage.getItem('user'));
      const userId = user.user._id;
  
      await axios.put(`http://localhost:5000/api/users/${userId}`, userData);
      alert('Profile updated successfully!');
  
      const updatedUser = { user: { ...user.user, ...userData } };
  
      sessionStorage.setItem('user', JSON.stringify(updatedUser));
  
      window.location.reload();
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };
  

  const handleCategoryChange = (selectedCategories) => {
    setUserData(prevState => ({
      ...prevState,
      categories: selectedCategories.map(category => category.value)
    }));
  };


return (
  <>
  <Container className="mt-5 mb-5">
      <div className="profile-page">
        <div className="profile-header">
          <img src= {background} className="profile-image" alt=""/>
          <h2>Profile</h2>
        </div>
        <div className="profile-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={userData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={userData.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group as={Col} controlId="formCategories">
              <Form.Label>Categories</Form.Label>
              <Select
                isMulti
                name="categories"
                options={categoryOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                value={categoryOptions.filter(option => userData.categories.includes(option.value))}
                onChange={handleCategoryChange}
              />
            </Form.Group>
            <Form.Group controlId="userType">
              <Form.Label>User Type</Form.Label>
              <Form.Select name="userType" value={userData.userType} onChange={handleChange}>
                <option value="Seller">Seller</option>
                <option value="Buyer">Buyer</option>
              </Form.Select>
            </Form.Group>
            {/* Add other fields such as password, isActive */}
            <Button variant="primary" type="submit">
              Update Profile
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  </>
   
  );
};

export default Profile;


