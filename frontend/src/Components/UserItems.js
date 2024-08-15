// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col } from 'react-bootstrap';

// const UserItems = () => {
//   const [userItems, setUserItems] = useState([]);
//   const baseURL = '/uploads/';

//   useEffect(() => {
//     const fetchUserItems = async () => {
//       try {
//         // Get user ID from session storage
//         const user = JSON.parse(sessionStorage.getItem('user'));
//         const userId = user?.user?._id;

//         // Fetch items associated with the user ID
//         const response = await axios.get(`http://localhost:5000/api/items/user/${userId}`);
//         setUserItems(response.data.items);
//       } catch (error) {
//         console.error('Error fetching user items:', error);
//       }
//     };

//     fetchUserItems();
//   }, []);

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Your Items</h2>
//       <Row>
//         {userItems.map(item => (
//           <Col md={4} className="mb-4" key={item._id}>
//             <div className="custom-card">
//               <img src={`${baseURL}${item.images[0]}`} alt={item.title} className="product-image" />
//               <div className="product-details">
//                 <h5>{item.title}</h5>
//                 <p>{item.description}</p>
//                 <p><strong>Bid Duration:</strong> {item.bidDuration} days</p>
//                 <p><strong>Minimum Bid Amount:</strong> ${item.minBidAmount}</p>
//                 <p><strong>Starting Bid Amount:</strong> ${item.startingBidAmount}</p>
//               </div>
//             </div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default UserItems;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import Header from '../Components/Header';

const UserItems = () => {
  const [userItems, setUserItems] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [updatedItem, setUpdatedItem] = useState({
    title: '',
    description: '',
    bidDuration: '',
    minBidAmount: '',
    startingBidAmount: ''
  });
  const baseURL = '/uploads/';

  useEffect(() => {
    const fetchUserItems = async () => {
      try {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const userId = user?.user?._id;

        const response = await axios.get(`http://localhost:5000/api/items/user/${userId}`);
        setUserItems(response.data.items);
      } catch (error) {
        console.error('Error fetching user items:', error);
      }
    };

    fetchUserItems();
  }, []);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/items/${itemId}`);
      setUserItems(userItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleShowUpdateModal = (item) => {
    setSelectedItem(item);
    setShowUpdateModal(true);
    setUpdatedItem({
      title: item.title,
      description: item.description,
      bidDuration: item.bidDuration,
      minBidAmount: item.minBidAmount,
      startingBidAmount: item.startingBidAmount
    });
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
  };

  const handleUpdateItem = async () => {
    try {
      await axios.put(`http://localhost:5000/api/items/${selectedItem._id}`, updatedItem);
      const updatedItems = userItems.map(item => {
        if (item._id === selectedItem._id) {
          return {
            ...item,
            title: updatedItem.title,
            description: updatedItem.description,
            bidDuration: updatedItem.bidDuration,
            minBidAmount: updatedItem.minBidAmount,
            startingBidAmount: updatedItem.startingBidAmount
          };
        }
        return item;
      });
      setUserItems(updatedItems);
      setShowUpdateModal(false);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleChange = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <Container className="mt-5">
      <h2 className="text-center mb-4">My Items</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Bid Duration</th>
            <th>Minimum Bid Amount</th>
            <th>Starting Bid Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userItems.map(item => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
              <img src={`${baseURL}${item.images[0]}`} alt={item.title} style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
              </td>
              <td>{item.bidDuration} days</td>
              <td>${item.minBidAmount}</td>
              <td>${item.startingBidAmount}</td>
              <td>
                <Button variant="info" size="sm" onClick={() => handleShowUpdateModal(item)}>Update</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDelete(item._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={updatedItem.title} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" value={updatedItem.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bidDuration">
              <Form.Label>Bid Duration (days)</Form.Label>
              <Form.Control type="number" name="bidDuration" value={updatedItem.bidDuration} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="minBidAmount">
              <Form.Label>Minimum Bid Amount</Form.Label>
              <Form.Control type="number" name="minBidAmount" value={updatedItem.minBidAmount} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startingBidAmount">
              <Form.Label>Starting Bid Amount</Form.Label>
              <Form.Control type="number" name="startingBidAmount" value={updatedItem.startingBidAmount} onChange={handleChange} />
              </Form.Group>
              </Form>
              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseUpdateModal}>
              Close
              </Button>
              <Button variant="primary" onClick={handleUpdateItem}>
              Save Changes
              </Button>
              </Modal.Footer>
              </Modal>
              </Container>
    </>
  
              );
};

export default UserItems;

