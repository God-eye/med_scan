import React from 'react';

export const Card = (prop) => (
    <div className='card-container'>
        <h2 id='card-heading'>{ prop.heading }</h2>
        <h4 id='card-content' style={cardStyle}>{ prop.content.map( cont => (<li>{cont}</li>)) }</h4>
    </div>
)

const cardStyle = {
    color: "#fff"
}