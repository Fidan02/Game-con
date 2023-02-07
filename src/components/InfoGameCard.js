import React from 'react'

function InfoGameCard({info}) {
    var genres = info.genres.map(genre => <span key={genre.id}>{genre.name}, </span>)
    return (
    <div className='text-light text-center my-3 pt-3 d-flex w-50 flex-column border-top border-bottom border-3 border-danger rounded'>
        <h1 className='m-3'>Information: </h1>
        <div>
            <p>Play Time:<span className='text-danger'> {info.playtime} Hours</span></p>
            <p>In-Game Achievemnets:<span className='text-danger'> {info.achievements_count}</span></p>
            <p>Developed by:<span className='text-danger'> {info.developers[0].name}</span></p>
            <p>Genres:<span className='text-danger'> {genres}</span></p>
        </div>
    </div>
    )
}

export default InfoGameCard