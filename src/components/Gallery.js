function Gallery() {

    // console.log(photos);
    let photoArray = []
    for (let i = 7; i <= 34; i++) {
        photoArray.push(`../assets/${i}.jpg`)
    }

    return (
        <div className="wrapper">
            <div className="gallery">
                <h1>Gallery</h1>
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
        </div>
    )
}

export default Gallery;