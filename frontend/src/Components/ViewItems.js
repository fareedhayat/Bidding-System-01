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


import React from 'react';
import background from '../Images/background10.jpg';
import { CenterFocusStrong } from '@mui/icons-material';

const ViewItems = () => {
  const items = [
    { id: 1, title: 'Antique Clock', category: 'Antiques', price: 'Rs.200', image: 'antique-clock.jpg' },
    { id: 2, title: 'Painting', category: 'Arts', price: 'Rs.300', image: 'painting.jpg' },
    { id: 3, title: 'Diamond Ring', category: 'Jewelry & Watches', price: 'Rs.500', image: 'diamond-ring.jpg' },
    { id: 4, title: 'Vintage Car', category: 'Cars', price: 'Rs.10,000', image: 'vintage-car.jpg' },
    { id: 5, title: 'Scrap Metal', category: 'Scrap', price: 'Rs.50', image: 'scrap-metal.jpg' },
    { id: 6, title: 'Antique Vase', category: 'Antiques', price: 'Rs.150', image: 'antique-vase.jpg' },
    { id: 7, title: 'Sculpture', category: 'Arts', price: 'Rs.400', image: 'sculpture.jpg' },
    { id: 8, title: 'Gold Necklace', category: 'Jewelry & Watches', price: 'Rs.700', image: 'gold-necklace.jpg' },
    { id: 9, title: 'Classic Car', category: 'Cars', price: 'Rs.20,000', image: 'classic-car.jpg' },
    { id: 10, title: 'Metal Scrap', category: 'Scrap', price: 'Rs.70', image: 'metal-scrap.jpg' },
    { id: 11, title: 'Antique Chair', category: 'Antiques', price: 'Rs.180', image: 'antique-chair.jpg' },
    { id: 12, title: 'Portrait', category: 'Arts', price: 'Rs.350', image: 'portrait.jpg' },
    { id: 13, title: 'Silver Watch', category: 'Jewelry & Watches', price: 'Rs.600', image: 'silver-watch.jpg' },
    { id: 14, title: 'Sports Car', category: 'Cars', price: 'Rs.30,000', image: 'sports-car.jpg' },
    { id: 15, title: 'Electronic Scrap', category: 'Scrap', price: 'Rs.80', image: 'electronic-scrap.jpg' }
  ];

  const baseURL = '/uploads/';

  const groupedItems = items.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

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
          alignItems:'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a white overlay with opacity
          backgroundBlendMode: 'overlay',
        }}
      >
        {Object.keys(groupedItems).map(category => (
          <div key={category} className="category-section container">
            <h2>{category}</h2>
            <div className="items-row">
              {groupedItems[category].map(item => (
                <div key={item.id} className="item-card">
                  <img src={`${baseURL}${item.image}`} alt={item.title} className="item-image" />
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">{item.price}</p>
                  <div className="item-buttons">
                    <button className="add-cart-button">Add to Cart</button>
                    <button className="view-more-button">View More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewItems;
