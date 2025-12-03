import { useState } from "react";

export default function ChercheBar() {
    const categorie = {
        legume :["tomate","carotte","pomme de terre","navet","poivron"],
        fruit : ["pomme","banane","ananas","raisin","fraise"],
        animal : ["chat", "chien", "lion", "cheval"],
        langage: ["JavaScript", "PHP", "Python", "Java"]
    }

    const [value, setValue] = useState('')
    const [type, setType] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setType(value.toLowerCase())
        setValue('')
    }
    return(
        <>
            <form action="" onSubmit={handleSearch}>
                Entrer le mot cle de recherche : <br />
                <input 
                    type="text"
                    value={value}
                    onChange={(e) => {setValue(e.target.value)}}
                    placeholder="Cherche..." 
                /> 
                <br />
                <input type="submit" value="Submit"/>
            </form>
            <div>
                <h3>Resultats</h3>

                {!categorie[type] ? (
                    <p>Aucun categorie trouve!</p>
                ) : (
                    <ul>
                        {categorie[type].map((item,data) => (
                            <li key={data}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>

        </>
    )
} 