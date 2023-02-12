import React from 'react'

function GameStores({gameStores}) {
  return (
    <>
        {
            (gameStores.length > 0) ? 
            gameStores.map(e => 
                <div className="card col-xl-3 col-lg-3 col-md-3 col-sm-12 my-2 bg-dark" key={e.store.id} style={{width: "13rem", padding: '0px'}}>
                    <img src={e.store.image_background} className="card-img-top" alt="..."/>
                    <div className="card-body text-light">
                        <h6 className="card-title">{e.store.name}</h6>
                        <p className="card-text">Games: <span className='text-primary'>{e.store.games_count}</span></p>         
                        <a className="btn btn-primary w-50" href={`https://${e.store.domain}/`} target='_blank'>Site!</a>     
                    </div>
                </div>
                ) : 
            <h1 className='container text-light'>Not Avaible in any Store</h1>
        } 
    </>
  )
}

export default GameStores