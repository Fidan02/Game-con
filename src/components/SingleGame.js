import React, { useState } from 'react'
import Ratings from './Ratings'
import InfoGameCard from './InfoGameCard'
import ImageCarousel from './ImageCarousel'
import GameDescription from './GameDescription'
import GameStores from './GameStores'

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
                <div className='container'>
                    <ImageCarousel image={singleGame} />    
                </div> 
                <div className='container'>
                    <GameDescription description={singleGame} />
                </div>
            </div>
            <div className='d-sm-block d-xl-flex justify-content-around'>
                <Ratings ratings={singleGame} />
                <InfoGameCard info={singleGame} />
            </div>
        </div>
        <div className='container'>
            <h2 className='text-light'>In Stores:</h2>
        </div>
        <div className='row gap-2 container d-flex justify-content-center'>
            <GameStores gameStores={stores} />
        </div>
        </div>
    </>
  )
}

export default SingleGame
