import { useState } from "react";

export default function Cube() {
    const faceCache = 5
    const [face ,setFace] = useState(null)
    const [essais ,setEssais] = useState(0)
    const [message ,setMessage] = useState('')
    const [photo , setPhoto] = useState("/de.jpg")
    const jouer = () => {
        const valeur = Math.floor(Math.random() * 6) + 1
        setFace(valeur)
        setEssais(essais + 1)
        setPhoto(`/${valeur}.jpg`)

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