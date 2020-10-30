import React from 'react';
import { Card } from './Card';


export const CardsList = (props) => {
    return(
        <div className="card-list">
            <Card content={props.cardContents.pros}/>
            <Card content={props.cardContents.cons}/>
            <Card content={props.cardContents.facts}/>
        </div>
    )
}
