import React from 'react'
import './SimpleCard.scss'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';


export default function SimpleCard({image, discount, rate, title, price}) {

  const hasDiscount = discount > 0;
  const discountedPrice = hasDiscount
    ? (price * (1 - discount / 100)).toFixed(2)
    : price.toFixed(2);


  const renderStars = () => {
  const starValue = rate / 20;
  const fullStars = Math.floor(starValue);
  const hasHalfStar = starValue - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2px' }}>
      {[...Array(fullStars)].map((_, i) => <FaStar key={`full-${i}`} color="#ffc107" />)}
      {hasHalfStar && <FaStarHalfAlt color="#ffc107" />}
      {[...Array(emptyStars)].map((_, i) => <FaRegStar key={`empty-${i}`} color="#ccc" />)}
    </div>
  );
};



  return (
  
    <div className='container'>
        
     <div className="image">
  <img src={image} alt={title} />
  {hasDiscount && <div className="discount">%{discount}</div>}
</div>



      <div className='alt'>
       <div className='rate'>
  {renderStars()}
</div>
        <div className='title'>{title}</div>
        <div className='price'>
          {hasDiscount && <span className="old-price">€{price.toFixed(2)}</span>}
          <span className="new-price">€{discountedPrice}</span>
        </div>
      </div>
    </div>
  );
}
