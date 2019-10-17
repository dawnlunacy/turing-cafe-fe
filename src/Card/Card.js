import React from 'react';
import './Card.css'

const Card = (res) => {
    return (
        <article className="card">
            <h3>  { res.name } </h3>
            <h4> { res.date}  </h4>
            <h4> { res.time } </h4>
            <h4> { res.number } </h4>
            <button className="cancel-btn"> Cancel </button>
        </article>
    )
}

export default Card;