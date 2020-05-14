import React from 'react';
import './Card.css'

function Card({category, title, description, author, publicationDate, readTime}) {
    return (
        <div className="card-article">
            <div>
                <p><strong>Category:</strong>  {category}</p>
                <p><strong>Title:</strong> {title} </p>
                <p><strong>Description:</strong> {description} </p>
                <p><strong>Author:</strong> {author}</p>
                <p><strong>Publication Date:</strong> {publicationDate}, <strong>Read Time:</strong>  {readTime} </p>
            </div>
            <div>
                <figure>
                    <img src={'https://picsum.photos/id/870/200/300?grayscale&blur=2'} alt="card-image" />
                </figure>
            </div>
        </div>
    )
}

export default Card

// Card
// category title, description, author, datePublication, timeRead, img