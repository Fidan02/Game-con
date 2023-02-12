import React from 'react'

function ImageCarousel({image}) {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide " data-bs-ride="carousel">
        <div className="carousel-inner rounded">
            <div className="carousel-item active" data-bs-interval="10000">
                <img src={image.background_image} className="d-block w-100"  alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src={image.background_image_additional} className="d-block w-100"  alt="..."/>
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
  )
}

export default ImageCarousel