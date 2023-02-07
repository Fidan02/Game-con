import React from 'react'

function Ratings({ratings}) {
  return (
    <div className='text-light border-top border-bottom border-3 my-3 p-3 rounded border-warning d-flex w-50 flex-column'>
            <h1 className='text-warning text-center m-3'>Ratings:</h1>
                <div className='d-flex justify-content-around my-2 w-100'>
                    <h4 className='text-info'><span className='text-light'>Rating:</span> {ratings.rating}</h4>
                    <h4 className='text-danger'><span className='text-light'>Top Rating:</span> {ratings.rating_top}</h4>
                </div>
                <div className='w-100 d-flex justify-content-around'>
                    <div className='text-center'>
                        <p className='text-light'>👍: {ratings.ratings[1].count} </p>
                        <p>"{ratings.ratings[1].title.toUpperCase()}"</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-light'>🤩: {ratings.ratings[0].count}</p>
                        <p>"{ratings.ratings[0].title.toUpperCase()}"</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-light'>🫤: {ratings.ratings[2].count}</p>
                        <p>"{ratings.ratings[2].title.toUpperCase()}"</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-light'>🙅‍♂️: {ratings.ratings[3].count}</p>
                        <p>"{ratings.ratings[3].title.toUpperCase()}"</p>
                    </div>
                </div>
            </div>
  )
}

export default Ratings