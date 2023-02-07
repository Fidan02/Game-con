import React from 'react'
import Ratings from './Ratings'
import InfoGameCard from './InfoGameCard'
import StoreCarousel from './StoreCarousel'

function SingleGame({singleGame}) {
  var stores = singleGame.stores
  

  return (
    <>
      <div className='container my-5'>
    <div>
        <div className='d-flex justify-content-between'>
            <h1 className='text-light'>{singleGame.name}</h1>
            <p className='text-light my-2'><span className='text-danger'>Release Date:</span> {singleGame.released}</p>
        </div>
        <hr className=' border border-3 border-danger rounded w-50'/>
        <div className='d-flex justify-content-between'>
            <div id="carouselExampleDark" className="carousel carousel-dark slide w-50 h-50" data-bs-ride="carousel">
                <div className="carousel-inner rounded">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src={singleGame.background_image} className="d-block w-100" style={{height: '315px'}} alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src={singleGame.background_image_additional} className="d-block w-100 h-50" style={{height: '315px'}} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" style={{backgroundColor: '#8c8c8c55'}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" style={{backgroundColor: '#8c8c8c55'}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='text-light w-50 ps-5'>
                <h2 className='w-100'>Description:</h2>
                <hr className=' border border-3 border-primary rounded w-50'/>
                <p className='text-light'>{singleGame.description_raw}</p>
            </div>
        </div>
        <div className='d-flex justify-content-around'>
            <Ratings ratings={singleGame} />
            <InfoGameCard info={singleGame} />
        </div>
        <StoreCarousel store={stores}/>
    </div>
</div>
    </>
  )
}

export default SingleGame
