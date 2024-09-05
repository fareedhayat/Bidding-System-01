// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Card, Button, Row, Col } from 'react-bootstrap';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AuctionItems = () => {
//   const [items, setItems] = useState([]);
//   const [bidAmounts, setBidAmounts] = useState({});
//   const [timers, setTimers] = useState({});
//   const user = JSON.parse(sessionStorage.getItem('user'));
//   const baseURL = '/uploads/';
//   const userId = user.user._id;
//   const userName = user.user.name;
//   const userCategory = user.user.categories[0];

//   let previousBidAmount = 0;

//   const notifySuccess = () => {
//     toast.success('Bid placed successfully!', {
//       position: 'bottom-right',
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   };

//   useEffect(() => {
//     if (user) {
//       const fetchItems = async () => {
//         try {
//           const res = await axios.get(`http://localhost:5000/api/items/item/${userCategory}`);
//           setItems(res.data.items);
//         } catch (error) {
//           console.error('Error fetching items:', error);
//         }
//       };

//       fetchItems();
//     }
//   }, [user]);

//   const fetchPreviousBidAmount = async (amount, itemId) => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/auctionItems/bidAmount/${itemId}`);
//       previousBidAmount = res.data.bidAmount === 0 ? amount : res.data.bidAmount;
//     } catch (error) {
//       console.error('Error fetching previous bid amount:', error);
//     }
//   };

//   const handleBidSubmit = async (item) => {
//     try {
//       const bidAmount = bidAmounts[item._id] || 0;
//       let itemId = item._id;
//       await fetchPreviousBidAmount(item.startingBidAmount, itemId);

//       // Check if bid amount is higher than previous bid amount
//       if (parseInt(bidAmount) > previousBidAmount) {
//         const res = await axios.post('http://localhost:5000/api/auctionItems/saveAuctionItem', {
//           itemTitle: item.title,
//           bidderName: userName,
//           bidAmount,
//           bidderId: userId,
//           itemId,
//           createdDate: new Date().toISOString(),
//           isActive: true,
//         });
//         notifySuccess();
//         setBidAmounts({ ...bidAmounts, [itemId]: '' });
//         console.log(res.data);
//       } else {
//         toast.error('Bid amount must be higher than previous bid amount!', {
//           position: 'bottom-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     } catch (error) {
//       console.error('Error submitting bid:', error);
//     }
//   };

//   const calculateRemainingTime = (endDate) => {
//     const currentDate = new Date();
//     const endDateTime = new Date(endDate);
//     const timeDiff = endDateTime - currentDate;

//     if (timeDiff <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0, timeDiff: 0 };
//     }

//     const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

//     return { days, hours, minutes, seconds, timeDiff };
//   };

//   const getAuctionStatus = (item) => {
//     const currentDate = new Date();
//     const bidEndDate = new Date(item.itemEndDate);

//     if (item.isSold === false && currentDate > bidEndDate) {
//       return { status: 'Expired', color: 'red' };
//     } else if (currentDate < new Date(item.createdDate)) {
//       return { status: 'Upcoming', color: 'black' };
//     } else {
//       const { days, hours, minutes, seconds, timeDiff } = calculateRemainingTime(bidEndDate);

//       if (item.isSold === true) {
//         return {
//           status: `Sold to ${item.soldToName}`,
//           color: 'red',
//           icon: `${baseURL}soldout.jpg` // Update with the actual path to your icon
//         };
//       } else if (timeDiff <= 0) {
//         return { status: 'Expired', color: 'red' };
//       } else {
//         return {
//           status: `Expires in ${days}d ${hours}h ${minutes}m ${seconds}s`,
//           color: 'green'
//         };
//       }
//     }
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimers((prevTimers) => {
//         const updatedTimers = { ...prevTimers };
//         items.forEach((item) => {
//           const status = getAuctionStatus(item);
//           updatedTimers[item._id] = status.status;
//         });
//         return updatedTimers;
//       });
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [items]);

//   const handleBidAmountChange = (e, itemId) => {
//     const value = e.target.value;
//     setBidAmounts({ ...bidAmounts, [itemId]: value });
//   };

//   return (
//     <>
//       <Container className="my-5 container-custom">
//         <h2 className="mb-4 text-center">Auction Items</h2>
//         <Row xs={1} md={2} lg={3} className="g-4">
//           {items.map((item) => (
//             <Col key={item._id}>
//               <Card className="h-100 card-custom">
//                 <Card.Img
//                   variant="top"
//                   src={`${baseURL}${item.images[0]}`}
//                   alt={item.title}
//                   className="card-img-custom"
//                 />
//                 <Card.Body>
//                   <Card.Title className="text-truncate">{item.title}</Card.Title>
//                   <Card.Text className="text-truncate mb-1"><strong>Description: </strong>{item.description}</Card.Text>
//                   {item.isSold === false && (
//                     <>
//                       <Card.Text className="mb-1">Starting Bid: ${item.startingBidAmount}</Card.Text>
//                       <Card.Text className="mb-1">Minimum Bid: ${item.minBidAmount}</Card.Text>
//                       <Card.Text className="mb-1">Bid Duration: {item.bidDuration} days</Card.Text>
//                     </>
//                   )}
//                   <Card.Text className="mb-0 mt-2" style={{ fontWeight: 'bold', fontSize: '1.2em', color: getAuctionStatus(item).color }}>
//                     {getAuctionStatus(item).icon ? (
//                       <>
//                         <img src={getAuctionStatus(item).icon} alt="Sold icon" style={{ height: '100px', width: '100%', marginRight: '5px' }} />
//                         {getAuctionStatus(item).status}
//                       </>
//                     ) : (
//                       timers[item._id] || getAuctionStatus(item).status
//                     )}
//                   </Card.Text>
//                   {getAuctionStatus(item).status !== 'Expired' && !item.isSold && (
//                     <>
//                       <input
//                         type="number"
//                         className="form-control mb-2 form-control-custom"
//                         placeholder="Enter bid amount"
//                         value={bidAmounts[item._id] || ''}
//                         onChange={(e) => handleBidAmountChange(e, item._id)}
//                       />
//                       <Button onClick={() => handleBidSubmit(item)} variant="primary" className="w-100">
//                         Place Bid
//                       </Button>
//                     </>
//                   )}
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//         <ToastContainer position="bottom-right" className="toast-container" />
//       </Container>
//     </>
//   );
// };

// export default AuctionItems;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Button, Row, Col, Modal, Table } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemDetailsModal from './ItemDetailsModal';

const AuctionItems = () => {
  const [items, setItems] = useState([]);
  const [bidAmounts, setBidAmounts] = useState({});
  const [timers, setTimers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [bidDetails, setBidDetails] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const user = JSON.parse(sessionStorage.getItem('user'));
  const baseURL = 'uploads/';
  const userId = user.user._id;
  const userName = user.user.name;
  const userCategory = user.user.categories[0];

  let previousBidAmount = 0;

  const notifySuccess = () => {
    toast.success('Bid placed successfully!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (user) {
      const fetchItems = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/items/item/${userCategory}`);
          setItems(res.data.items);
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      };

      fetchItems();
    }
  }, [user]);

  const fetchPreviousBidAmount = async (amount, itemId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/auctionItems/bidAmount/${itemId}`);
      previousBidAmount = res.data.bidAmount === 0 ? amount : res.data.bidAmount;
    } catch (error) {
      console.error('Error fetching previous bid amount:', error);
    }
  };

  const handleBidSubmit = async (item) => {
    try {
      const bidAmount = bidAmounts[item._id] || 0;
      let itemId = item._id;
      await fetchPreviousBidAmount(item.startingBidAmount, itemId);

      // Check if bid amount is higher than previous bid amount
      if (parseInt(bidAmount) > previousBidAmount) {
        const res = await axios.post('http://localhost:5000/api/auctionItems/saveAuctionItem', {
          itemTitle: item.title,
          bidderName: userName,
          bidAmount,
          bidderId: userId,
          itemId,
          createdDate: new Date().toISOString(),
          isActive: true,
        });
        notifySuccess();
        setBidAmounts({ ...bidAmounts, [itemId]: '' });
        console.log(res.data);
      } else {
        toast.error('Bid amount must be higher than previous bid amount!', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error('Error submitting bid:', error);
    }
  };

  const calculateRemainingTime = (endDate) => {
    const currentDate = new Date();
    const endDateTime = new Date(endDate);
    const timeDiff = endDateTime - currentDate;

    if (timeDiff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, timeDiff: 0 };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, timeDiff };
  };

  const getAuctionStatus = (item) => {
    const currentDate = new Date();
    const bidEndDate = new Date(item.itemEndDate);

    if (item.isSold === false && currentDate > bidEndDate) {
      return { status: 'Expired', color: 'red' };
    } else if (currentDate < new Date(item.createdDate)) {
      return { status: 'Upcoming', color: 'black' };
    } else {
      const { days, hours, minutes, seconds, timeDiff } = calculateRemainingTime(bidEndDate);

      if (item.isSold === true) {
        return {
          status: `Sold to ${item.soldToName}`,
          color: 'red',
          icon: `${baseURL}soldout.jpg` // Update with the actual path to your icon
        };
      } else if (timeDiff <= 0) {
        return { status: 'Expired', color: 'red' };
      } else {
        return {
          status: `Expires in ${days}d ${hours}h ${minutes}m ${seconds}s`,
          color: 'green'
        };
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimers((prevTimers) => {
        const updatedTimers = { ...prevTimers };
        items.forEach((item) => {
          const status = getAuctionStatus(item);
          updatedTimers[item._id] = status.status;
        });
        return updatedTimers;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [items]);


  const fetchBidDetails = async (itemId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/auctionItems/details/${itemId}`);
      setBidDetails(res.data.bids);  // Ensure bidDetails is updated
      setSelectedItemId(itemId);
      setShowModal(true);  // Ensure the modal is set to open
    } catch (error) {
      console.error('Error fetching bid details:', error);
    }
  };
  

  return (
    <>
      <Container className="my-5 container-custom">
        <h2 className="mb-4 text-center">Auction Items</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {items.map((item) => (
            <Col key={item._id}>
              <Card className="h-100 card-custom">
                <Card.Img
                  variant="top"
                  src={`${baseURL}${item.images[0]}`}
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
                        <img src={getAuctionStatus(item).icon} alt="Sold icon" style={{ height: '100px', width: '100%', marginRight: '5px' }} />
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
                        value={bidAmounts[item._id] || ''}
                        onChange={(e) => setBidAmounts({ ...bidAmounts, [item._id]: e.target.value })}
                      />
                      <Button onClick={() => handleBidSubmit(item)} variant="primary" className="w-100">
                        Place Bid
                      </Button>
                    </>
                  )}
                  <Button onClick={() => fetchBidDetails(item._id)} variant="info" className="w-100 mt-2">
                    Show Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
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
                  {bidDetails[0].soldToName!=="Null" && <th>Sold To</th>}
                </tr>
              </thead>
              <tbody>
                {bidDetails.map((bid) => (
                  <tr key={bid._id}>
                    <td>{bid.bidderName}</td>
                    <td>${bid.bidAmount}</td>
                    <td>{new Date(bid.createdDate).toLocaleString()}</td>
                    {bid.soldToName!=="Null" && <td>{bid.soldToName}</td>}
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
      <ItemDetailsModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        bidDetails={bidDetails}
      />
      <ToastContainer position="bottom-right" className="toast-container" />
    </>
  );
};

export default AuctionItems;



