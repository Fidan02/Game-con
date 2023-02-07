import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import GameCards from '../components/GameCards';

function Games() {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(2);

    const url = 'https://api.rawg.io/api/games';
    const key = '200e7e8eb251446fb66e99b3e37bc948';

    useEffect(() => {
        axios.get(`${url}?key=${key}&page=${currentPage}`)
        .then((response) => {
            if(response.status === 200){
                const allGames = response.data.results
                setGames(allGames)
                setLoading(false)
            }
        }).catch(error => console.log('Error' + error))
    }, [])

    const newPage = () => {
        setCurrentPage(currentPage + 1)
    }

  return (
    <>
        <div className='container my-4'>
            <div className='row'>
            <h1 className='text-light'>Games - Catalog</h1>
            <hr className='text-light border border-3 rounded'/>
            { loading && <h1 className='text-warning'>Loading...</h1>}
            {
                games && games.map((game) => 
                <div 
                className='col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-3' 
                key={game.id}>
                    <GameCards game={game}/></div>)
            }
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <span className="page-link">Prev</span>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={newPage}>Next</button>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    </>
  )
}

export default Games