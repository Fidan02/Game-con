import React from 'react'

function Footer() {
  return (
    <footer className="py-3">
        <hr className='border-top border-secondary border-3 rounded' />
        <div className="container pt-5">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <h2 className="text-light">GAME-CON</h2>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 d-md-flex justify-content-md-end">
                    <ul className="nav">
                        <li className="nav-item"><a className="text-light" href="index.html">Home</a></li>
                        <li className="nav-item mx-4"><a className="text-light" href="explorer.html">Explore</a></li>
                        <li className="nav-item"><a className="text-light" href="#">Soon</a></li>
                    </ul>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 d-md-flex justify-content-md-end">
                    <ul className="nav">
                        <li className="nav-item"><a className="text-light" href="#">Facebook</a></li>
                        <li className="nav-item ms-4"><a className="text-light" href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer