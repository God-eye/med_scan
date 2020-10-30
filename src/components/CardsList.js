import React from 'react';
import { Card } from './Card';


export const CardsList = (props) => {
    return(
        <div className="card-list">
            <Card content={props.cardContents.pros} heading="Subarashii"/>
            <Card content={props.cardContents.cons} heading="Nani ?"/>
            <Card content={props.cardContents.facts} heading="Omaea wa mo shindeiru"/>
        </div>
    )
}
