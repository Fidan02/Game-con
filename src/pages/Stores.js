import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StoreCard from '../components/StoreCard'
import loadinggif from '../Images/loadinggif.gif'
import Footer from '../components/Footer'


function Stores() {

    const [stores, setStores] = useState([])
    const [loading, setLoading] = useState(true)
    const storeURL = 'https://api.rawg.io/api/stores'
    const key = '200e7e8eb251446fb66e99b3e37bc948'

    useEffect(() => {
        axios.get(`${storeURL}?key=${key}`)
        .then((response) => {
            const allStores = response.data.results
            setStores(allStores)
            setLoading(false)
        }).catch(error => console.log('Error' + error))
    },[])

  return (
    <div className='container'>
        <div className='row mt-5'>
            <h1 className='text-light'>Stores Avaible:</h1>
            <hr className='border-success border border-3 rounded'/>
            {
                stores && stores.map((store) => <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3' key={store.id}><StoreCard store={store}/></div>)
            }
            {
                loading && <img src={loadinggif} style={{width: '300px', marginLeft: '35%'}}  alt='loading...'/>
            }
            <div>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Stores