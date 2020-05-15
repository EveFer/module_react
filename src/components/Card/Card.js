import React from 'react';
import './Card.css'

function Card({category, title, description, author, publicationDate, readTime}) {
    return (
        <div className="card-article">
            <div className="card-body">
                <p className="card-category">{category}</p>
                <p className="card-title">{title} </p>
                <p className="card-description">{description} </p>
                <a className="card-author" href="">{author}</a>
                <p>{publicationDate}, {readTime} </p>
            </div>
            <div>
                <figure>
                    <img src={'https://picsum.photos/id/870/200/230?grayscale&blur=2'} alt="card-image" />
                </figure>
            </div>
        </div>
    )
}

export default Card

// Card
// category title, description, author, datePublication, timeRead, img