

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Modal,
  Button,
  Box,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import Header from '../Components/Header';

const Cart = () => {
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const user = JSON.parse(sessionStorage.getItem('user'));
  const userId = user.user._id;
  const baseURL = '/uploads/';

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/auctionItems/purchased/${userId}`);
        setPurchasedItems(res.data.items);
      } catch (error) {
        console.error('Error fetching purchased items:', error);
      }
    };

    fetchPurchasedItems();
  }, [userId]);

  const handleOpen = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
<>
<Container maxWidth="lg" sx={{ my: 5 }}>
      <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
        <ShoppingCartIcon fontSize="large" sx={{ mr: 1 }} />
        <Typography variant="h4" component="h2">
          My Cart
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Purchased for</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {purchasedItems.map(item => (
              <TableRow key={item._id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>₨.{item.startingBidAmount}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpen(item)} color="primary">
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedItem && (
        <Modal open={Boolean(selectedItem)} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
              {selectedItem.title}
            </Typography>
            <Box
              sx={{
                height: 200,
                overflow: 'hidden',
                mb: 2,
              }}
            >
              <img
                src={`${baseURL}${selectedItem.images[0]}`}
                alt={selectedItem.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">Description</TableCell>
                    <TableCell>{selectedItem.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Category</TableCell>
                    <TableCell>{selectedItem.category}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Purchased for</TableCell>
                    <TableCell>₨.{selectedItem.startingBidAmount}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
              Close
            </Button>
          </Box>
        </Modal>
      )}
    </Container>
</>
    
  );
};

export default Cart;
