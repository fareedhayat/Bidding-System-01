import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ type, message }) => {
  return (
    <div className={`custom-toast custom-toast-${type}`}>
      <span>{message}</span>
    </div>
  );
};

const AddItem = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: null,
    images: [],
    description: '',
    bidDuration: '',
    minBidAmount: '',
    startingBidAmount: '',
    createdBy: '',
    createdDate: new Date().toISOString(),
    isActive:true,
    itemEndDate: '',
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

  const categoryOptions = [
    { value: 'Antiques', label: 'Antiques' },
    { value: 'Arts', label: 'Arts' },
    { value: 'Jewelry & Watches', label: 'Jewelry & Watches' },
    { value: 'Cars', label: 'Cars' },
    { value: 'Scrap', label: 'Scrap' }
  ];

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const createdById = user.user._id;
    setFormData(prevData => ({ ...prevData, createdBy: createdById }));
  }, []);

  const { title, category, images, description, bidDuration, minBidAmount, startingBidAmount, createdDate,isActive,itemEndDate} = formData;


  const navigate = useNavigate();

  // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onChange = e => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };
    if (name === 'bidDuration') {
      const currentDate = new Date();
      const endDate = new Date(currentDate.getTime() + parseInt(value) * 24 * 60 * 60 * 1000);
      console.log(endDate);
      updatedData = { ...updatedData, itemEndDate: endDate.toISOString() };
    }
    setFormData(updatedData);
  };
  

  const onImageChange = e => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const sendEmail = async (recipientEmail) => {
    try {
      const emailData = {
        email: recipientEmail,
        subject: 'New Item Added in Your Category',
        message: `A new item titled "${title}" has been added in the ${category.label} category. Check it out now!`,
      };
  
      const response = await emailjs.send(
        'service_4tfluyb', 
        'template_qnuxgsf', 
        emailData,
        '7wfHkEpC4iZ5cIjxs' 
      );
      console.log('Email sent successfully to', recipientEmail);
  
    } catch (error) {
      console.error('Failed to send email to', recipientEmail, ':', error);
    }
  };
  
  const sendEmailsToUsers = async (userEmails) => {
    try {
      for (const userEmail of userEmails) {
        await sendEmail(userEmail);
      }
    } catch (error) {
      console.error('Failed to send emails:', error);
    }
  };
  
  const onSubmit = async e => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', title);
      formDataToSend.append('category', category.value); // Using category value
      images.forEach((image, index) => {
        formDataToSend.append('images', image);
      });
      formDataToSend.append('description', description);
      formDataToSend.append('bidDuration', bidDuration);
      formDataToSend.append('minBidAmount', minBidAmount);
      formDataToSend.append('startingBidAmount', startingBidAmount);
      formDataToSend.append('createdBy', formData.createdBy);
      formDataToSend.append('createdDate', createdDate);
      formDataToSend.append('itemEndDate', itemEndDate);

      const res = await axios.post('http://localhost:5000/api/items', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });


      // Fetch users with the same category
      const usersRes = await axios.get(`http://localhost:5000/api/users/category-users?category=${category.value}`); // Corrected: Accessing value property
      const users = usersRes.data.filter(user => user._id !== formData.createdBy);
      const userEmails = users.map(user => user.email);

      sendEmailsToUsers(userEmails);


      console.log(res.data);
      setFormData({
        title: '',
        category: null,
        images: [],
        description: '',
        bidDuration: '',
        minBidAmount: '',
        startingBidAmount: '',
        createdBy: '',
        createdDate: new Date().toISOString(), // Reset createdDate to current date and time
      });

      notify('success', 'Item Added Successfully!');
      setTimeout(() => {
        navigate('/user-items');
      }, 3000); 

    } catch (err) {
      console.error(err.response.data);
      notify('error', 'Failed!');
    }
  };

  return (

    <>
    <div className="form-container mt-5 mb-5">
      <h2 className="mb-4 text-center">Add New Item</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={title} onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <Select
            options={categoryOptions}
            value={category}
            onChange={value => setFormData(prevData => ({ ...prevData, category: value }))}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="images" className="form-label">Images</label>
          <input type="file" className="form-control" id="images" name="images" onChange={onImageChange} multiple required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" value={description} onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="bidDuration" className="form-label">Bid Duration (in days)</label>
          <input type="number" className="form-control" id="bidDuration" name="bidDuration" value={bidDuration} onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="minBidAmount" className="form-label">Minimum Bid Amount</label>
          <input type="number" className="form-control" id="minBidAmount" name="minBidAmount" value={minBidAmount} onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="startingBidAmount" className="form-label">Starting Bid Amount</label>
          <input type="number" className="form-control" id="startingBidAmount" name="startingBidAmount" value={startingBidAmount} onChange={onChange} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
      <ToastContainer />
    </div>
    </>
    
  );
};

export default AddItem;
