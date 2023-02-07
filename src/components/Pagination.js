import React from 'react'

function Pagination({newPage}) {
    console.log(newPage)
    
    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item">
                    <span className="page-link">Previous</span>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#" ></a>
                </li>
            </ul>
        </nav>
  )
}

export default Pagination