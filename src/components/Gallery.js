import { Link } from "react-router-dom"
import ModalImage from "./ModalImage"

import { lazy, Suspense } from 'react';


function Gallery() {

    // console.log(photos);
    let photoArray = []
    for (let i = 7; i <= 34; i++) {
        photoArray.push(`../assets/${i}.jpg`)
    }

    return (
        <div className="gallery">
            <div className="gallery-header">
                <h1>Gallery</h1>
            </div>

            <div className="wrapper">
                <ul className="images">

                        {
                            photoArray.map( (photo) => {
                                return (
                                <li className="individual-photo">

                                    
                                        <ModalImage src={photo} alt="a phootooo" />
                                    
                                </li>
                                )
                            })
                        } 
                </ul>
            </div>

            <Link to="/Contact"><button>book now!</button></Link>
        </div>
    )
}

export default Gallery;