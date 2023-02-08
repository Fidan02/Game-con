import React, { useState } from 'react'
import Ratings from './Ratings'
import InfoGameCard from './InfoGameCard'

function SingleGame({singleGame}) {
  const stores = singleGame.stores
  
  
  return (
    <>
    <div className='container my-5 '>
        <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-6 col-sm-12 mb-3 d-xl-flex d-lg-flex justify-content-between'>
                <h1 className='text-light'>{singleGame.name}</h1>
                <p className='text-light my-2'><span className='text-danger'>Release Date:</span> {singleGame.released}</p>
            </div>
            <hr className=' border border-3 border-danger rounded w-50'/>
        <div className='mb-3 d-xl-flex d-lg-flex justify-content-between'>
            <div id="carouselExampleDark" className="carousel carousel-dark slide " data-bs-ride="carousel">
                <div className="carousel-inner rounded">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src={singleGame.background_image} className="d-block"  alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src={singleGame.background_image_additional} className="d-block"  alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev rounded" style={{backgroundColor: '#8c8c8c55'}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next rounded" style={{backgroundColor: '#8c8c8c55'}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='text-light w-100 mt-5 mt-xl-1 ps-xl-5'>
                <h2 className='w-100'>Description:</h2>
                <hr className=' border border-3 border-primary rounded w-50'/>
                <p className='text-light'>{singleGame.description_raw}</p>
            </div>
        </div>
        <div className='d-sm-block d-xl-flex justify-content-around'>
            <Ratings ratings={singleGame} />
            <InfoGameCard info={singleGame} />
        </div>
        <div>
            <h2 className='text-light'>In Stores:</h2>
        </div>
        <div className='d-flex row justify-content-around'>
        {
            (stores.length > 0) ? 
            stores.map(e => 
                <div className="card col-xl-12 col-lg-12 col-md-6 col-sm-12 my-2 bg-dark" key={e.store.id} style={{width: "13rem", padding: '0px'}}>
                    <img src={e.store.image_background} className="card-img-top" alt="..."/>
                    <div className="card-body text-light">
                        <h6 className="card-title">{e.store.name}</h6>
                        <p className="card-text">Games: <span className='text-primary'>{e.store.games_count}</span></p>         
                        <a className="btn btn-primary w-50" href={`https://${e.store.domain}/`} target='_blank'>Site!</a>     
                    </div>
                </div>
                ) : 
            "There is no stores"
        } 
        </div>
    </div>
</div>
    
    </>
  )
}

export default SingleGame
