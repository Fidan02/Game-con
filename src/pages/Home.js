import React, { useEffect, useState } from 'react'
import GameCards from '../components/GameCards'
import axios from "axios";
import StoreCard from '../components/StoreCard';
import Footer from '../components/Footer';
import loadinggif from '../Images/loadinggif.gif'

function Home() {

    const [games, setGames] = useState([])
    const [stores, setStores] = useState([])
    const [loading, setLoading] = useState(true)
    const url = 'https://api.rawg.io/api/games';
    const storeURL = 'https://api.rawg.io/api/stores'
    const key = '200e7e8eb251446fb66e99b3e37bc948'
    
    


    useEffect(() => {
        axios.get(`${url}?key=${key}`)
        .then((response) => {
            const allGames = response.data.results
            setGames(allGames)
        }).catch(error => console.log('Error' + error))
    }, [])

    useEffect(() => {
        axios.get(`${storeURL}?key=${key}`)
        .then((response) => {
            const allStores = response.data.results
            setStores(allStores)
            setLoading(false)
        }).catch(error => console.log('Error' + error))
    },[])

  return (
    <>
        <div className='container my-4'>
            <div className='row'>
            <h1 className='text-light'>Popular Games</h1>
            <hr className='text-light border border-3 rounded'/>
            {
                games && games.slice(0,4).map((game) => <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-3' key={game.id}><GameCards game={game}/></div>)
            }
            {
                loading && <img src={loadinggif} style={{width: '300px', marginLeft: '35%'}}  alt='loading...'/>
            }
            </div>
        </div>
        <div className='container my-5'>
            <div className='row'>
            <h1 className='text-light'>Game Stores</h1>
            <hr className='text-light border border-3 rounded'/>
                {
                    stores && stores.slice(0,8).map((store) => <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-3' key={store.id}><StoreCard store={store}/></div>)
                }
                {
                loading && <img src={loadinggif} style={{width: '300px', marginLeft: '35%'}}  alt='loading...'/>
                }
            </div>
        </div>
        <div className='container my-5'>
                <Footer/>
        </div>
    </>
  )
}

export default Home