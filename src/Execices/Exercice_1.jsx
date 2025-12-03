import { useState } from "react"
export default function Form() {
    const [nom ,setNom] = useState('')
    const [prenom ,setPrenom] = useState('')
    const [result , setResult] = useState('')

    const handleForm = (e) => {
        if ( nom == "" || prenom == "") return
        e.preventDefault()
        setResult(
            <>
                Nom : {nom.toUpperCase()}
                <br />
                Prenom : {prenom.toUpperCase()}
            </>
        )
        setNom('')
        setPrenom('')
    }

    return(
        <>
            <h1>Inscription</h1>
            <form action="" onSubmit={handleForm}>
                <label>Nom :</label>
                <input 
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />
                <br />
                <label>Prenom :</label>
                <input 
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                />
                <br />
                <input 
                    type="submit" 
                />
            </form>
            <p>{result}</p>
        </>
    )
}