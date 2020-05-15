import React from 'react';
import './Card.css'

function Card({category, title, description, author, publicationDate, readTime}) {
    return (
        <div className="card-article">
            <div className="card-body">
                <p className="card-category">{category}</p>
                <p className="card-title">{title} </p>
                <p className="card-description">{description} </p>
                <div className="card-section-author-icons">
                    <div>
                        <a className="card-author" href="">{author}</a>
                        <p className="card-date-time-reading">{publicationDate}, {readTime} <i className="fas fa-star"></i> </p>
                    </div>
                    <div className="card-icons">
                        <i className="far fa-bookmark"></i>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                
            </div>
            <div>
                <figure>
                    <img src={'https://picsum.photos/id/870/152/171?grayscale&blur=2'} alt="card-image" />
                </figure>
                
            </div>
        </div>
    )
}

export default Card

// Card
// category title, description, author, datePublication, timeRead, img