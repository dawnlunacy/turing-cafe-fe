import React from 'react';
import './Card.css'

const Card = () => {
    return (
        <article className="card">
            <h3>  name </h3>
            <h4> Date </h4>
            <h4> time </h4>
            <h4> # of guests </h4>
            <button className="cancel-btn"> Cancel </button>
        </article>
    )
}

export default Card;