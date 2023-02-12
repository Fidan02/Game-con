import React from 'react'
import { Link } from 'react-router-dom'

function StoreCard({store}) {
    const noImage = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
  
    return (
        <div className="card overlay" >
        <img src={(store.image_background !== null) ? 
        store.image_background : 
        noImage} 
        className="card-img"  style={{objectFit: 'cover'}}/>
            <div className="card-img-overlay d-flex flex-column justify-content-end" style={{backgroundColor: '#8c8c8c55'}}>
                <h5 className="card-title fw-bold text-light">{store.name}</h5>
                <Link className="btn btn-success w-50" to={`/stores/${store.id}`}>More Info</Link>
            </div>
        </div>
  )
}

export default StoreCard