// import React from 'react';
// import { Modal, Button, Image } from 'react-bootstrap';

// const Item = ({ item, show, onClose }) => {
//   return (
//     <Modal
//       show={show}
//       onHide={onClose}
//       centered
//       size="lg"
//       className="item-modal"
//       dialogClassName="item-modal-dialog"
//       contentClassName="item-modal-content"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title>{item.title}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="item-modal-body">
//         <div className="d-flex flex-column align-items-center">
//           <Image
//             src={`/uploads/${item.image}`}
//             alt={item.title}
//             className="img-fluid"
//             style={{
//               maxHeight: '60vh',
//               maxWidth: '100%',
//               objectFit: 'contain',
//               marginBottom: '20px',
//             }}
//           />
//           <p>{item.description}</p>
//           <p><strong>Price:</strong> ₨.{item.price}</p>
//           <p><strong>Category:</strong> {item.category}</p>
//           <p><strong>Bid Duration:</strong> {item.bidDuration} days</p>
//         </div>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onClose}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default Item;


import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

const Item = ({ item, show, onClose }) => {
  // Convert days to hours and minutes
  const totalMinutes = item.bidDuration * 24 * 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      size="lg"
      className="item-modal"
      dialogClassName="item-modal-dialog"
      contentClassName="item-modal-content"
    >
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="item-modal-body">
        <div className="d-flex flex-column align-items-center">
          <Image
            src={`/uploads/${item.image}`}
            alt={item.title}
            className="img-fluid"
            style={{
              maxHeight: '60vh',
              maxWidth: '100%',
              objectFit: 'contain',
              marginBottom: '20px',
            }}
          />
          <p>{item.description}</p>
          <p><strong>Price:</strong> ₨.{item.price}</p>
          <p><strong>Category:</strong> {item.category}</p>
          <p><strong>Bid Duration:</strong> {hours} hours {minutes} minutes</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Item;
