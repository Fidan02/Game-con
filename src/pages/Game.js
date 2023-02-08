import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from '../components/Footer'
import SingleGame from '../components/SingleGame'
import loadinggif from '../Images/loadinggif.gif'


function Game() {

    const  {id} = useParams()
    const [game, setGame] = useState()
    const [loading, setLoading] = useState(true)
    const key = '200e7e8eb251446fb66e99b3e37bc948'

    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games/${id}?key=${key}`)
        .then(res => {
                const datas = res.data
                setGame(datas)
                setLoading(false)
        }).catch(error => console.log('Error' + error))
    }, [])

    

  return (
    <div>
      {
        loading && <img src={loadinggif} style={{width: '300px', marginLeft: '35%'}}  alt='loading...'/>
      }
      {
        game && <SingleGame singleGame={game} />
      }
      <Footer />
    </div>
  )
}

export default Game