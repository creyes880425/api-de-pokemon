import { useState, useEffect } from "react";

export const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [isSubmitted, setIsSubmitted ] = useState(false);

    useEffect(() => {
        if (isSubmitted) {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(allpokemon => setPokemon(allpokemon.results))
        }
    }, [isSubmitted]);

    const getPokemon = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    return (
        <div>
            <form onSubmit={getPokemon}>
                <button type="submit">Fetch Pockemon</button>
            </form>
            <ul>
                {pokemon.map(function (pk, i) {
                    return <li key={i}>{ pk.name }</li>;
                })}
            </ul>
        </div>
    )
}
