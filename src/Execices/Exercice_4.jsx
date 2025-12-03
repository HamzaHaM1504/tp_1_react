import { useState } from "react";
import deImg from "./images/de.jpg";
import i1 from "./images/1.jpg";
import i2 from "./images/2.jpg";
import i3 from "./images/3.jpg";
import i4 from "./images/4.jpg";
import i5 from "./images/5.jpg";
import i6 from "./images/6.jpg";

export default function Cube() {
    const faceCache = 5
    const images = {
        de: deImg,
        1: i1,
        2: i2,
        3: i3,
        4: i4,
        5: i5,
        6: i6,
    };
    const [face ,setFace] = useState(null)
    const [essais ,setEssais] = useState(0)
    const [message ,setMessage] = useState('')
    const [photo , setPhoto] = useState(images.de)
    const jouer = () => {
        const valeur = Math.floor(Math.random() * 6) + 1
        setFace(valeur)
        setEssais(essais + 1)
        setPhoto(images[valeur])

        if (valeur === faceCache) {
            setMessage("Bravo vous avez trouvez la face cachee!")
        } else (
            setMessage("")
        )
    }
    return(
        <>
            <h2>Jeu de Dé</h2>
            <img src={photo} alt="Dé" style={{ width: 150, height: 150 }} />
            <p>Face : {face !== null ? face : "-"}</p>
            <p>Nombre d'essais : {essais}</p>
            <button onClick={jouer}>Jouer</button>
            {message && (<p>{message}</p>)}
        </>
    )
}