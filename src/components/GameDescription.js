import React from 'react'

function GameDescription({description}) {
  return (
    <div className='text-light mt-xl-1 mt-3 w-100 ps-xl-5'>
        <h2 className='w-100'>Description:</h2>
        <hr className=' border border-3 border-primary rounded w-50'/>
        <div className='description'>
          <p className='text-light'>{description.description_raw}</p>
        </div>
    </div>
  )
}

export default GameDescription