import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const ItemDetailsModal = ({ showModal, handleCloseModal, bidDetails }) => {
  return (
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
                {bidDetails[0].soldToName !== "Null" && <th>Sold To</th>}
              </tr>
            </thead>
            <tbody>
              {bidDetails.map((bid) => (
                <tr key={bid._id}>
                  <td>{bid.bidderName}</td>
                  <td>₨.{bid.bidAmount}</td>
                  <td>{new Date(bid.createdDate).toLocaleString()}</td>
                  {bid.soldToName !== "Null" && <td>{bid.soldToName}</td>}
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
  );
};

export default ItemDetailsModal;
