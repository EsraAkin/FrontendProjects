import React from 'react'

//rafc functional

export const Course = ({image, title, description}) => {   //3 adet props aldım.
  
     return (
        <div>
    <img src={image} alt={title} />
    <div>{title}</div>
    <div>{description}</div>
    </div>
  )
}
