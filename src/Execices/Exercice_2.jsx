import { useState } from "react"

export default function MDP() {
    const [mdp, setMdp] = useState('')

    return(
        <>
            <input 
                type="password"
                value={mdp}
                onChange={(e) => setMdp(e.target.value)} 
                placeholder="Enter votre Mot de Passe..."
            />
            <p>{mdp.length <= 4 ? "Mot de passe doit contenir plus de 4 caracteres!":"" }</p>
        </>
    )
}