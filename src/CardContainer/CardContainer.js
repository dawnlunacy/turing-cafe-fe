import React from 'react';
import Card from '../Card/Card';
const CardContainer = (props) => {
    console.log("Props", props)
    const reservations = props.reservations.map(reservation => {
            return ( <Card 
                key = { reservation.id }
                id={ reservation.id }
                name = { reservation.name }
                date = { reservation.date }
                time = { reservation.time }
                number = { reservation.number }
                /> )
        })  

    return (
        <section className="res-container">
            { reservations }
        </section>
    )
    
}

export default CardContainer;
