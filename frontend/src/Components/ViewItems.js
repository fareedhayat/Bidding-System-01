// import React from 'react';
// import background from '../Images/background10.jpg';

// const ViewItems = () => {
//   const items = [
//     { id: 1, title: 'Antique Clock', category: 'Antiques', price: 'Rs.200', image: 'antique-clock.jpg' },
//     { id: 2, title: 'Painting', category: 'Arts', price: 'Rs.300', image: 'painting.jpg' },
//     { id: 3, title: 'Diamond Ring', category: 'Jewelry & Watches', price: 'Rs.500', image: 'diamond-ring.jpg' },
//     { id: 4, title: 'Vintage Car', category: 'Cars', price: 'Rs.10,000', image: 'vintage-car.jpg' },
//     { id: 5, title: 'Scrap Metal', category: 'Scrap', price: 'Rs.50', image: 'scrap-metal.jpg' },
//     { id: 6, title: 'Antique Vase', category: 'Antiques', price: 'Rs.150', image: 'antique-vase.jpg' },
//     { id: 7, title: 'Sculpture', category: 'Arts', price: 'Rs.400', image: 'sculpture.jpg' },
//     { id: 8, title: 'Gold Necklace', category: 'Jewelry & Watches', price: 'Rs.700', image: 'gold-necklace.jpg' },
//     { id: 9, title: 'Classic Car', category: 'Cars', price: 'Rs.20,000', image: 'classic-car.jpg' },
//     { id: 10, title: 'Metal Scrap', category: 'Scrap', price: 'Rs.70', image: 'metal-scrap.jpg' },
//     { id: 11, title: 'Antique Chair', category: 'Antiques', price: 'Rs.180', image: 'antique-chair.jpg' },
//     { id: 12, title: 'Portrait', category: 'Arts', price: 'Rs.350', image: 'portrait.jpg' },
//     { id: 13, title: 'Silver Watch', category: 'Jewelry & Watches', price: 'Rs.600', image: 'silver-watch.jpg' },
//     { id: 14, title: 'Sports Car', category: 'Cars', price: 'Rs.30,000', image: 'sports-car.jpg' },
//     { id: 15, title: 'Electronic Scrap', category: 'Scrap', price: 'Rs.80', image: 'electronic-scrap.jpg' }
//   ];

//   const baseURL = '/uploads/';

//   const groupedItems = items.reduce((acc, item) => {
//     acc[item.category] = acc[item.category] || [];
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   return (
//     <>
//       <div
//         className="view-items-page"
//         style={{
//           backgroundImage: `url(${background})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           minHeight: '100vh',
//           padding: '20px'
//         }}
//       >
        
//         </div>
//     </>
//   );
// };

// export default ViewItems;





// import React from 'react';
// import background from '../Images/background10.jpg';
// import { CenterFocusStrong } from '@mui/icons-material';

// const ViewItems = () => {
//   const items = [
//     { id: 1, title: 'Antique Clock', category: 'Antiques', price: 'Rs.200', image: 'antique-clock.jpg' },
//     { id: 2, title: 'Painting', category: 'Arts', price: 'Rs.300', image: 'painting.jpg' },
//     { id: 3, title: 'Diamond Ring', category: 'Jewelry & Watches', price: 'Rs.500', image: 'diamond-ring.jpg' },
//     { id: 4, title: 'Vintage Car', category: 'Cars', price: 'Rs.10,000', image: 'vintage-car.jpg' },
//     { id: 5, title: 'Scrap Metal', category: 'Scrap', price: 'Rs.50', image: 'scrap-metal.jpg' },
//     { id: 6, title: 'Antique Vase', category: 'Antiques', price: 'Rs.150', image: 'antique-vase.jpg' },
//     { id: 7, title: 'Sculpture', category: 'Arts', price: 'Rs.400', image: 'sculpture.jpg' },
//     { id: 8, title: 'Gold Necklace', category: 'Jewelry & Watches', price: 'Rs.700', image: 'gold-necklace.jpg' },
//     { id: 9, title: 'Classic Car', category: 'Cars', price: 'Rs.20,000', image: 'classic-car.jpg' },
//     { id: 10, title: 'Metal Scrap', category: 'Scrap', price: 'Rs.70', image: 'metal-scrap.jpg' },
//     { id: 11, title: 'Antique Chair', category: 'Antiques', price: 'Rs.180', image: 'antique-chair.jpg' },
//     { id: 12, title: 'Portrait', category: 'Arts', price: 'Rs.350', image: 'portrait.jpg' },
//     { id: 13, title: 'Silver Watch', category: 'Jewelry & Watches', price: 'Rs.600', image: 'silver-watch.jpg' },
//     { id: 14, title: 'Sports Car', category: 'Cars', price: 'Rs.30,000', image: 'sports-car.jpg' },
//     { id: 15, title: 'Electronic Scrap', category: 'Scrap', price: 'Rs.80', image: 'electronic-scrap.jpg' }
//   ];

//   const baseURL = '/uploads/';

//   const groupedItems = items.reduce((acc, item) => {
//     acc[item.category] = acc[item.category] || [];
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   return (
//     <>
//       <div
//         className="view-items-page"
//         style={{
//           backgroundImage: `url(${background})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           minHeight: '100vh',
//           padding: '20px',
//           alignItems:'center',
//           backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a white overlay with opacity
//           backgroundBlendMode: 'overlay',
//         }}
//       >
//         {Object.keys(groupedItems).map(category => (
//           <div key={category} className="category-section container">
//             <h2>{category}</h2>
//             <div className="items-row">
//               {groupedItems[category].map(item => (
//                 <div key={item.id} className="item-card">
//                   <img src={`${baseURL}${item.image}`} alt={item.title} className="item-image" />
//                   <h3 className="item-title">{item.title}</h3>
//                   <p className="item-price">{item.price}</p>
//                   <div className="item-buttons">
//                     <button className="add-cart-button">Add to Cart</button>
//                     <button className="view-more-button">View More</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ViewItems;



// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, Button, Modal, Table } from 'react-bootstrap';
// import ToastContainer from 'react-bootstrap/ToastContainer';
// import background from '../Images/background10.jpg';
// import Item from './Item'; // Import the new Item component

// const ViewItems = () => {
//   const items = [
//     {
//       id: 1, 
//       title: 'Antique Clock', 
//       category: 'Antiques', 
//       description: 'An antique clock from the 19th century.', 
//       price: 'Rs.200', 
//       image: 'antique-clock.jpg', 
//       bidDuration: 2, 
//       startingBidAmount: '150', 
//       minBidAmount: '100', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 2, 
//       title: 'Painting', 
//       category: 'Arts', 
//       description: 'A beautiful landscape painting.', 
//       price: 'Rs.300', 
//       image: 'painting.jpg', 
//       bidDuration: 3, 
//       startingBidAmount: '200', 
//       minBidAmount: '150', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 3, 
//       title: 'Diamond Ring', 
//       category: 'Jewelry & Watches', 
//       description: 'A sparkling diamond ring.', 
//       price: 'Rs.500', 
//       image: 'diamond-ring.jpg', 
//       bidDuration: 5, 
//       startingBidAmount: '400', 
//       minBidAmount: '350', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 4, 
//       title: 'Vintage Car', 
//       category: 'Cars', 
//       description: 'A classic vintage car in pristine condition.', 
//       price: 'Rs.10,000', 
//       image: 'vintage-car.jpg', 
//       bidDuration: 7, 
//       startingBidAmount: '8000', 
//       minBidAmount: '7500', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 5, 
//       title: 'Scrap Metal', 
//       category: 'Scrap', 
//       description: 'A bulk lot of scrap metal.', 
//       price: 'Rs.50', 
//       image: 'scrap-metal.jpg', 
//       bidDuration: 1, 
//       startingBidAmount: '30', 
//       minBidAmount: '25', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 6, 
//       title: 'Antique Vase', 
//       category: 'Antiques', 
//       description: 'A delicate antique vase.', 
//       price: 'Rs.150', 
//       image: 'antique-vase.jpg', 
//       bidDuration: 3, 
//       startingBidAmount: '100', 
//       minBidAmount: '80', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 7, 
//       title: 'Sculpture', 
//       category: 'Arts', 
//       description: 'A handcrafted sculpture.', 
//       price: 'Rs.400', 
//       image: 'sculpture.jpg', 
//       bidDuration: 4, 
//       startingBidAmount: '300', 
//       minBidAmount: '250', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 8, 
//       title: 'Gold Necklace', 
//       category: 'Jewelry & Watches', 
//       description: 'A luxurious gold necklace.', 
//       price: 'Rs.700', 
//       image: 'gold-necklace.jpg', 
//       bidDuration: 6, 
//       startingBidAmount: '600', 
//       minBidAmount: '550', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 9, 
//       title: 'Classic Car', 
//       category: 'Cars', 
//       description: 'A well-maintained classic car.', 
//       price: 'Rs.20,000', 
//       image: 'classic-car.jpg', 
//       bidDuration: 10, 
//       startingBidAmount: '18000', 
//       minBidAmount: '17000', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 10, 
//       title: 'Metal Scrap', 
//       category: 'Scrap', 
//       description: 'Assorted metal scrap for recycling.', 
//       price: 'Rs.70', 
//       image: 'metal-scrap.jpg', 
//       bidDuration: 1, 
//       startingBidAmount: '50', 
//       minBidAmount: '45', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 11, 
//       title: 'Antique Chair', 
//       category: 'Antiques', 
//       description: 'A vintage chair with intricate carvings.', 
//       price: 'Rs.180', 
//       image: 'antique-chair.jpg', 
//       bidDuration: 2, 
//       startingBidAmount: '150', 
//       minBidAmount: '130', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 12, 
//       title: 'Portrait', 
//       category: 'Arts', 
//       description: 'A classic portrait painting.', 
//       price: 'Rs.350', 
//       image: 'portrait.jpg', 
//       bidDuration: 3, 
//       startingBidAmount: '300', 
//       minBidAmount: '250', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 13, 
//       title: 'Silver Watch', 
//       category: 'Jewelry & Watches', 
//       description: 'An elegant silver watch.', 
//       price: 'Rs.600', 
//       image: 'silver-watch.jpg', 
//       bidDuration: 4, 
//       startingBidAmount: '500', 
//       minBidAmount: '450', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 14, 
//       title: 'Sports Car', 
//       category: 'Cars', 
//       description: 'A high-performance sports car.', 
//       price: 'Rs.30,000', 
//       image: 'sports-car.jpg', 
//       bidDuration: 7, 
//       startingBidAmount: '25000', 
//       minBidAmount: '24000', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
//     },
//     {
//       id: 15, 
//       title: 'Electronic Scrap', 
//       category: 'Scrap', 
//       description: 'Electronic components for recycling.', 
//       price: 'Rs.80', 
//       image: 'electronic-scrap.jpg', 
//       bidDuration: 2, 
//       startingBidAmount: '60', 
//       minBidAmount: '55', 
//       isSold: false, 
//       itemEndDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
//     }
// ];

// const baseURL = '/uploads/';
// const [bidAmounts, setBidAmounts] = useState({});
// const [showModal, setShowModal] = useState(false);
// const [bidDetails, setBidDetails] = useState([]);
// const [timeLeft, setTimeLeft] = useState({});

// useEffect(() => {
//   const updateCountdown = () => {
//     const updatedTimeLeft = items.reduce((acc, item) => {
//       const timeRemaining = item.itemEndDate - Date.now();
//       const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//       acc[item.id] = `${days}d`;
//       return acc;
//     }, {});
//     setTimeLeft(updatedTimeLeft);
//   };

//   const timer = setInterval(updateCountdown, 60000); // Update every minute
//   updateCountdown(); // Initial call to set timeLeft

//   return () => clearInterval(timer); // Cleanup the timer on component unmount
// }, [items]);

// const handleBidSubmit = (item) => {
//   // Handle bid submission logic here
// };

// const fetchBidDetails = (itemId) => {
//   // Fetch bid details logic here
//   setShowModal(true);
// };

// const handleCloseModal = () => setShowModal(false);

// const getAuctionStatus = (item) => {
//   const timeRemaining = item.itemEndDate - Date.now();
//   if (item.isSold) {
//     return { status: 'Sold', color: 'green', icon: '/path-to-sold-icon.png' };
//   } else if (timeRemaining <= 0) {
//     return { status: 'Expired', color: 'red' };
//   }
//   return { status: `Ends in ${timeLeft[item.id]}`, color: 'orange' };
// };

// const groupedItems = items.reduce((acc, item) => {
//   acc[item.category] = acc[item.category] || [];
//   acc[item.category].push(item);
//   return acc;
// }, {});

// return (
//   <>
//     <div
//       className="view-items-page"
//       style={{
//         backgroundImage: `url(${background})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         minHeight: '100vh',
//         padding: '20px',
//         backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a white overlay with opacity
//         backgroundBlendMode: 'overlay',
//       }}
//     >
//       <Container className="my-5 container-custom">
//         <h2 className="mb-4 text-center">Auction Items</h2>
//         {Object.keys(groupedItems).map(category => (
//           <div key={category} className="category-section mb-5">
//             <h3 className="category-title text-center mb-4">{category}</h3>
//             <Row xs={1} md={2} lg={3} className="g-4">
//               {groupedItems[category].map(item => (
//                 <Col key={item.id}>
//                   <Card className="h-100 card-custom">
//                     <Card.Img
//                       variant="top"
//                       src={`${baseURL}${item.image}`}
//                       alt={item.title}
//                       className="card-img-custom"
//                     />
//                     <Card.Body>
//                       <Card.Title className="text-truncate">{item.title}</Card.Title>
//                       <Card.Text className="text-truncate mb-1"><strong>Description: </strong>{item.description}</Card.Text>
//                       {item.isSold === false && (
//                         <>
//                           <Card.Text className="mb-1">Starting Bid: ₨.{item.startingBidAmount}</Card.Text>
//                           <Card.Text className="mb-1">Minimum Bid: ₨.{item.minBidAmount}</Card.Text>
//                           <Card.Text className="mb-1">Bid Duration: {item.bidDuration} days</Card.Text>
//                         </>
//                       )}
//                       <Card.Text className="mb-0 mt-2" style={{ fontWeight: 'bold', color: getAuctionStatus(item).color, fontSize: '1.2rem' }}>
//                         {getAuctionStatus(item).icon ? (
//                           <>
//                             <img src={getAuctionStatus(item).icon} alt="Sold icon" style={{ height: '20px', marginRight: '5px' }} />
//                             {getAuctionStatus(item).status}
//                           </>
//                         ) : (
//                           getAuctionStatus(item).status
//                         )}
//                       </Card.Text>
//                       {getAuctionStatus(item).status !== 'Expired' && !item.isSold && (
//                         <>
//                           <input
//                             type="number"
//                             className="form-control mb-2 form-control-custom"
//                             placeholder="Enter bid amount"
//                             value={bidAmounts[item.id] || ''}
//                             onChange={(e) => setBidAmounts({ ...bidAmounts, [item.id]: e.target.value })}
//                           />
//                           <Button onClick={() => handleBidSubmit(item)} variant="primary" className="w-100">
//                             Place Bid
//                           </Button>
//                         </>
//                       )}
//                       <Button onClick={() => fetchBidDetails(item.id)} variant="info" className="w-100 mt-2">
//                         Show Details
//                       </Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           </div>
//         ))}
//         <ToastContainer position="bottom-right" className="toast-container" />
//       </Container>

//       <Modal show={showModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Bid Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {bidDetails.length > 0 ? (
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>Bidder Name</th>
//                   <th>Bid Amount</th>
//                   <th>Bid Date</th>
//                   {bidDetails[0].soldToName !== "Null" && <th>Sold To</th>}
//                 </tr>
//               </thead>
//               <tbody>
//                 {bidDetails.map((bid) => (
//                   <tr key={bid.id}>
//                     <td>{bid.bidderName}</td>
//                     <td>₨.{bid.bidAmount}</td>
//                     <td>{new Date(bid.createdDate).toLocaleString()}</td>
//                     {bid.soldToName !== "Null" && <td>{bid.soldToName}</td>}
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           ) : (
//             <p>No bids found for this item.</p>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   </>
// );
// };

// export default ViewItems;


import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ToastContainer, Modal, Table } from 'react-bootstrap';
import background from '../Images/background10.jpg';
import Item from './Item'; // Import the Item component

const ViewItems = () => {
  const items = [
    {
      id: 1, 
      title: 'Antique Clock', 
      category: 'Antiques', 
      description: 'An antique clock from the 19th century.', 
      price: 'Rs.200', 
      image: 'antique-clock.jpg', 
      bidDuration: 2, 
      startingBidAmount: '150', 
      minBidAmount: '100', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
    },
    {
      id: 2, 
      title: 'Painting', 
      category: 'Arts', 
      description: 'A beautiful landscape painting.', 
      price: 'Rs.300', 
      image: 'painting.jpg', 
      bidDuration: 3, 
      startingBidAmount: '200', 
      minBidAmount: '150', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    },
    {
      id: 3, 
      title: 'Diamond Ring', 
      category: 'Jewelry & Watches', 
      description: 'A sparkling diamond ring.', 
      price: 'Rs.500', 
      image: 'diamond-ring.jpg', 
      bidDuration: 5, 
      startingBidAmount: '400', 
      minBidAmount: '350', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: 4, 
      title: 'Vintage Car', 
      category: 'Cars', 
      description: 'A classic vintage car in pristine condition.', 
      price: 'Rs.10,000', 
      image: 'vintage-car.jpg', 
      bidDuration: 7, 
      startingBidAmount: '8000', 
      minBidAmount: '7500', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    },
    {
      id: 5, 
      title: 'Scrap Metal', 
      category: 'Scrap', 
      description: 'A bulk lot of scrap metal.', 
      price: 'Rs.50', 
      image: 'scrap-metal.jpg', 
      bidDuration: 1, 
      startingBidAmount: '30', 
      minBidAmount: '25', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 24 * 60 * 60 * 1000)
    },
    {
      id: 6, 
      title: 'Antique Vase', 
      category: 'Antiques', 
      description: 'A delicate antique vase.', 
      price: 'Rs.150', 
      image: 'antique-vase.jpg', 
      bidDuration: 3, 
      startingBidAmount: '100', 
      minBidAmount: '80', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    },
    {
      id: 7, 
      title: 'Sculpture', 
      category: 'Arts', 
      description: 'A handcrafted sculpture.', 
      price: 'Rs.400', 
      image: 'sculpture.jpg', 
      bidDuration: 4, 
      startingBidAmount: '300', 
      minBidAmount: '250', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)
    },
    {
      id: 8, 
      title: 'Gold Necklace', 
      category: 'Jewelry & Watches', 
      description: 'A luxurious gold necklace.', 
      price: 'Rs.700', 
      image: 'gold-necklace.jpg', 
      bidDuration: 6, 
      startingBidAmount: '600', 
      minBidAmount: '550', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)
    },
    {
      id: 9, 
      title: 'Classic Car', 
      category: 'Cars', 
      description: 'A well-maintained classic car.', 
      price: 'Rs.20,000', 
      image: 'classic-car.jpg', 
      bidDuration: 10, 
      startingBidAmount: '18000', 
      minBidAmount: '17000', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
    },
    {
      id: 10, 
      title: 'Metal Scrap', 
      category: 'Scrap', 
      description: 'Assorted metal scrap for recycling.', 
      price: 'Rs.70', 
      image: 'metal-scrap.jpg', 
      bidDuration: 1, 
      startingBidAmount: '50', 
      minBidAmount: '45', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 24 * 60 * 60 * 1000)
    },
    {
      id: 11, 
      title: 'Antique Chair', 
      category: 'Antiques', 
      description: 'A vintage chair with intricate carvings.', 
      price: 'Rs.180', 
      image: 'antique-chair.jpg', 
      bidDuration: 2, 
      startingBidAmount: '150', 
      minBidAmount: '130', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
    },
    {
      id: 12, 
      title: 'Portrait', 
      category: 'Arts', 
      description: 'A classic portrait painting.', 
      price: 'Rs.350', 
      image: 'portrait.jpg', 
      bidDuration: 3, 
      startingBidAmount: '300', 
      minBidAmount: '250', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    },
    {
      id: 13, 
      title: 'Silver Watch', 
      category: 'Jewelry & Watches', 
      description: 'An elegant silver watch.', 
      price: 'Rs.600', 
      image: 'silver-watch.jpg', 
      bidDuration: 4, 
      startingBidAmount: '500', 
      minBidAmount: '450', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)
    },
    {
      id: 14, 
      title: 'Sports Car', 
      category: 'Cars', 
      description: 'A high-performance sports car.', 
      price: 'Rs.30,000', 
      image: 'sports-car.jpg', 
      bidDuration: 7, 
      startingBidAmount: '25000', 
      minBidAmount: '24000', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    },
    {
      id: 15, 
      title: 'Electronic Scrap', 
      category: 'Scrap', 
      description: 'Electronic components for recycling.', 
      price: 'Rs.80', 
      image: 'electronic-scrap.jpg', 
      bidDuration: 2, 
      startingBidAmount: '60', 
      minBidAmount: '55', 
      isSold: false, 
      itemEndDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
    }
];


  const [selectedItem, setSelectedItem] = useState(null);
  const [showItemModal, setShowItemModal] = useState(false);
  const baseURL = '/uploads/';
  const [bidAmounts, setBidAmounts] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [bidDetails, setBidDetails] = useState([]);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const updateCountdown = () => {
      const updatedTimeLeft = items.reduce((acc, item) => {
        const timeRemaining = item.itemEndDate - Date.now();
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        acc[item.id] = `${days}d`;
        return acc;
      }, {});
      setTimeLeft(updatedTimeLeft);
    };

    const timer = setInterval(updateCountdown, 60000); // Update every minute
    updateCountdown(); // Initial call to set timeLeft

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [items]);

  const handleBidSubmit = (item) => {
    // Handle bid submission logic here
  };

  const fetchBidDetails = (itemId) => {
    // Fetch bid details logic here
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const getAuctionStatus = (item) => {
    const timeRemaining = item.itemEndDate - Date.now();
    if (item.isSold) {
      return { status: 'Sold', color: 'green', icon: '/path-to-sold-icon.png' };
    } else if (timeRemaining <= 0) {
      return { status: 'Expired', color: 'red' };
    }
    return { status: `Ends in ${timeLeft[item.id]}`, color: 'orange' };
  };

  const groupedItems = items.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowItemModal(true);
  };

  const handleCloseItemModal = () => {
    setSelectedItem(null);
    setShowItemModal(false);
  };

  return (
    <>
      <div
        className="view-items-page"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a white overlay with opacity
          backgroundBlendMode: 'overlay',
        }}
      >
        <Container className="my-5 container-custom">
          <h2 className="mb-4 text-center">Auction Items</h2>
          {Object.keys(groupedItems).map((category) => (
            <div key={category} className="category-section mb-5">
              <h3 className="category-title text-center mb-4">{category}</h3>
              <Row xs={1} md={2} lg={3} className="g-4">
                {groupedItems[category].map((item) => (
                  <Col key={item.id}>
                    <Card className="h-100 card-custom" onClick={() => handleItemClick(item)}>
                      <Card.Img
                        variant="top"
                        src={`${baseURL}${item.image}`}
                        alt={item.title}
                        className="card-img-custom"
                      />
                      <Card.Body>
                        <Card.Title className="text-truncate">{item.title}</Card.Title>
                        <Card.Text className="text-truncate mb-1"><strong>Description: </strong>{item.description}</Card.Text>
                        {item.isSold === false && (
                          <>
                            <Card.Text className="mb-1">Starting Bid: ₨.{item.startingBidAmount}</Card.Text>
                            <Card.Text className="mb-1">Minimum Bid: ₨.{item.minBidAmount}</Card.Text>
                            <Card.Text className="mb-1">Bid Duration: {item.bidDuration} days</Card.Text>
                          </>
                        )}
                        <Card.Text className="mb-0 mt-2" style={{ fontWeight: 'bold', color: getAuctionStatus(item).color, fontSize: '1.2rem' }}>
                          {getAuctionStatus(item).icon ? (
                            <>
                              <img src={getAuctionStatus(item).icon} alt="Sold icon" style={{ height: '20px', marginRight: '5px' }} />
                              {getAuctionStatus(item).status}
                            </>
                          ) : (
                            getAuctionStatus(item).status
                          )}
                        </Card.Text>
                        {getAuctionStatus(item).status !== 'Expired' && !item.isSold && (
                          <>
                            <input
                              type="number"
                              className="form-control mb-2 form-control-custom"
                              placeholder="Enter bid amount"
                              value={bidAmounts[item.id] || ''}
                              onChange={(e) => setBidAmounts({ ...bidAmounts, [item.id]: e.target.value })}
                            />
                            <Button onClick={() => handleBidSubmit(item)} variant="primary" className="w-100">
                              Place Bid
                            </Button>
                          </>
                        )}
                        <Button onClick={() => fetchBidDetails(item.id)} variant="info" className="w-100 mt-2">
                          Show Details
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
          <ToastContainer position="bottom-right" className="toast-container" />
        </Container>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Bid Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {bidDetails.length > 0 ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Bidder Name</th>
                    <th>Bid Amount</th>
                    <th>Bid Date</th>
                    {bidDetails[0].soldToName !== 'Null' && <th>Sold To</th>}
                  </tr>
                </thead>
                <tbody>
                  {bidDetails.map((bid) => (
                    <tr key={bid.id}>
                      <td>{bid.bidderName}</td>
                      <td>₨.{bid.bidAmount}</td>
                      <td>{new Date(bid.createdDate).toLocaleString()}</td>
                      {bid.soldToName !== 'Null' && <td>{bid.soldToName}</td>}
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p>No bids found for this item.</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Larger Item Popup */}
        {selectedItem && (
          <Item
            item={selectedItem}
            show={showItemModal}
            onClose={handleCloseItemModal}
          />
        )}
      </div>
    </>
  );
};

export default ViewItems;

