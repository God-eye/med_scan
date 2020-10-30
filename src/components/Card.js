import React from 'react';

export const Card = (prop) => (
    <div className='card-container'>
        <h2 id='card-content' style={cardStyle}>{prop.content.map( cont => (<li>{cont}</li>))}</h2>
    </div>
)

const cardStyle = {
    color: "#fff"
}