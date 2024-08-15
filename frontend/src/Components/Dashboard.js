// // import React from 'react';
// // import { Container, Row, Col, Card } from 'react-bootstrap';
// // import AddItem from './AddItem'; // Import the AddItem component

// // const Dashboard = () => {
// //   // Check if user exists in session storage
// //   const user = JSON.parse(sessionStorage.getItem('user'));


// //   console.log(user.user.userType);

// //   const userType=user.user.userType;

// //   console.log(userType);


// //   return (
// //     <Container>
// //       <Row className="justify-content-md-center">
// //         <Col md="8">
// //           <h2 className="text-center">Dashboard</h2>
// //           <Card>
// //             <Card.Body>
// //               <Card.Title>Welcome to your dashboard</Card.Title>
// //               <Card.Text>
// //                 Track your ongoing bids, won auctions, and items you're selling.
// //               </Card.Text>
// //             </Card.Body>
// //           </Card>
// //           {userType === 'Seller' && (

// //             show button add user on click show the add item component
// //             <AddItem />
// //           )}
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default Dashboard;



// import React, { useState } from 'react';
// import { Container, Row, Col, Card,Button } from 'react-bootstrap';
// import AddItem from './AddItem'; // Import the AddItem component

// const Dashboard = () => {
//   const user = JSON.parse(sessionStorage.getItem('user'));

//   const userType=user.user.userType;

//   const [showAddItem, setShowAddItem] = useState(false);

//   const handleShowAddItem = () => {
//     setShowAddItem(true);
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md="8">
//           <h2 className="text-center">Dashboard</h2>

//           <Card className='mt-3'>
//             <Card.Body>
//               <Card.Title>Welcome to your dashboard</Card.Title>
//               <Card.Text>
//                 Track your ongoing bids, won auctions, and items you're selling.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//           {userType === 'Seller' && !showAddItem && (
//             <Button className='mt-3' variant="primary" onClick={handleShowAddItem}>
//               Add Item
//             </Button>
//           )}
//           {showAddItem && <AddItem />}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AddItem from './AddItem';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

const Dashboard = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const userType = user.user.userType;
  const [showAddItem, setShowAddItem] = useState(false);
  const navigate = useNavigate();


  const handleShowAddItem = () => {
    setShowAddItem(true);
    navigate('/addItem');

  };

  const handleShowItems = () => {
    navigate('/user-items');
  };

  return (
    <>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h2 className="text-center my-4">Dashboard</h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Welcome to your dashboard</Card.Title>
              <Card.Text>
                Track your ongoing bids, won auctions, and items you're selling.
              </Card.Text>
            </Card.Body>
          </Card>
          {userType === 'Seller' && !showAddItem && (
            <div className="d-grid gap-2">
              <Button className="mb-3" variant="primary" onClick={handleShowAddItem} size="lg">
                Add Item
              </Button>
              <Button className="mb-3" variant="primary" onClick={handleShowItems} size="lg">
                Show Items
              </Button>
            </div>
          )}
          {showAddItem && <AddItem />}
        </Col>
      </Row>
    </Container>
    </>
 
  );
};

export default Dashboard;