import React from 'react';

export const SearchBox = ({placeHolder, handleFuntion}) => (
    <input 
        className='search'
        type='search'
        placeholder={placeHolder}
        onChange={handleFuntion}
    />
);