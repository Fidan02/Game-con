import React from 'react'

function StoreCarousel({store}) {
    
    
    
    // console.log(store.forEach((s) => {
    //     <div className="card" style={{width: "18rem"}}>
    //     <img src={s.store.image_background} className="card-img-top" alt="..."/>
    //     <div className="card-body">
    //         <h5 className="card-title">{s.store.name}</h5>
    //         <p className="card-text">{s.store.games_count}</p>        
    //     </div>
    // </div>
    
    // }))
  return (
    <div>
        { (store.length > 0) ?
            store.map(e => 
                <div className="card" key={e.store.id} style={{width: "18rem"}}>
                    <img src={e.store.image_background} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{e.store.name}</h5>
                        <p className="card-text">{e.store.games_count}</p>        
                    </div>
                </div>
            ) : "Nothing"
        }
    </div>
  )
}

export default StoreCarousel


