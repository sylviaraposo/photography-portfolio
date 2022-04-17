import { Link } from "react-router-dom"
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
                <ul>
                            {
                            photoArray.map( (photo) => {
                                return (
                                <li>
                                    <img src={photo} alt="a phootooo" />
                                </li>
                                )
                            }
                            
                        
                            )
                        } 
                    
                </ul>
            </div>

            <Link to="/Contact"><button>book now!</button></Link>
        </div>
    )
}

export default Gallery;