import React from 'react'
import { Link } from 'react-router-dom'

function GameCards({game}) {
    const noImage = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
    
    return (
        <div className="card overlay" >
            <img src={(game.background_image !== null) ? 
            game.background_image : 
            noImage} 
            className="card-img"  style={{height: "20rem", objectFit: 'cover'}}/>
                <div className="card-img-overlay d-flex flex-column justify-content-end" style={{backgroundColor: '#8c8c8c55'}}>
                    <h5 className="card-title text-warning">{game.name}</h5>
                    <p className="card-text fw-bold text-light">Rating: {game.rating}</p>
                    <p className="card-text fw-bold text-light">Platform: {game.platforms[0].platform.name}</p>
                    <Link className="btn btn-success w-50" to={`/games/${game.id}`}>More Info</Link>
                </div>
            </div>
    )
    
}

export default GameCards