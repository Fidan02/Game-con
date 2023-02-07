import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SingleGame from '../components/SingleGame'


function Game() {

    const  {id} = useParams()
    const [game, setGame] = useState()
    const key = '200e7e8eb251446fb66e99b3e37bc948'

    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games/${id}?key=${key}`)
        .then(res => {
                const datas = res.data
                setGame(datas)
                
        }).catch(error => console.log('Error' + error))
    }, [])

    

  return (
    <div>
      {
        game && <SingleGame singleGame={game} />
      }
    </div>
  )
}

export default Game