import React from 'react';
import { Card } from './Card';


export const CardsList = (props) => {
    return(
        <div className="card-list">
            <Card content={props.cardContents.pros} heading="Subarashii" backgroundColor="#67d891"/>
            <Card content={props.cardContents.cons} heading="Nani ?" backgroundColor="#ea4101"/>
            <Card content={props.cardContents.facts} heading="Omaea wa mo shindeiru" backgroundColor="#feb204"/>
        </div>
    )
}
