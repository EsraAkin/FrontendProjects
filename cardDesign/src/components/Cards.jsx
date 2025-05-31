import React from 'react'
import SimpleCard from './SimpleCard'
import CardsData from '../../data/CardData.json'
import './Cards.scss';

export default function Cards() {
  return (
    <div>
<div className='cards-container'>
    {CardsData.map((card)=>( 
        <SimpleCard
        key={card.id}
        image={card.image}
        discount={card.discount}
        rate={card.rate}
        title={card.title}
        price={card.price}
       />))}

</div>
    </div>
  )
}
