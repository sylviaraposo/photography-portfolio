import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database'; 

import firebase from '../firebase';

function Gallery() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        // create a variable that holds our database details
        const database = getDatabase(firebase)

        // we then create a variable that makes reference to our database
        const dbRef = ref(database)

        // add an event listener to that variable that will fire
        // from the database, and call that data 'response'.
        onValue(dbRef, (response) => {
            // here we use Firebase's .val() method to parse our database info the way we want it
            console.log(response.val());
        })
    }, [])

    return (
        <div>
            <ul>
                {photos.map((photo) => {
                    return (
                        <li>
                            <p>{photo}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Gallery;