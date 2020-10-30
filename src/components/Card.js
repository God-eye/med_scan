import React from 'react';

export const Card = (prop) => (
    <div className='card-container' style={{backgroundColor:prop.backgroundColor}}>
        <h2 id='card-heading'>{ prop.heading }</h2>
        <h4 id='card-content'>{ prop.content.map( cont => (<li>{cont}</li>)) }</h4>
    </div>
)
