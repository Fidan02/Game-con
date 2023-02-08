import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'

function Store() {
  
    const {id} = useParams()
    const [store, setStore] = useState()
    const key = `200e7e8eb251446fb66e99b3e37bc948`

    useEffect(() => {
        axios.get(`https://api.rawg.io/api/stores/${id}?key=${key}`)
        .then(res => {
            const datas = res.data
            setStore(datas)
            console.log(datas)
        }).catch(error => console.log(error))
    }, [])
  
  
  
    return (
    <>
        {store && <div className='container-fluid' style={{padding: '0'}} >
            <img src={store.image_background} style={{height: '300px', width: '100%', objectFit: 'cover'}} />
            <div className='container rounded-bottom d-flex justify-content-between' style={{backgroundColor: '#2C5364'}}>
                <h1 className='fw-bold text-danger' style={{marginTop: '-27px'}}>{store.name}</h1>
                <p className='fw-bold text-light mt-2'>Games: <span className='text-danger'>{store.games_count}</span></p>
            </div>
            <div className='container mt-5' style={{padding: '0px'}}>
                <h3 className='text-light'>Description <span className='btn btn-danger'><a className='text-light text-decoration-none' href={`https://${store.domain}/`} target='_blank'>Website</a></span></h3>
                <hr className='border border-danger border-3 rounded '/>
                <p className='text-light'>{store.description}</p>
            </div>
        </div>}
        <div className='container'>
            <Footer/>
        </div>
    </>
  )
}

export default Store