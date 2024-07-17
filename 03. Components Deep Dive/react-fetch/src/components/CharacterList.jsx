import { useEffect, useState } from "react";

export default function CharacterList() {

    const [characters, setCharacters] = useState([]);

    const baseUrl = 'https://swapi.dev/api/'

    useEffect(() => {
        async function fetchCharacters() {
            const response = await fetch(`${baseUrl}/people`);
            const result = await response.json();

            console.log();
            setCharacters(result.results);
        }

        fetchCharacters();

    }, []);

    return (
        <>
            <h1>Characters</h1>
            <ul>
            {characters.map(character => <li key={character.name}>{character.name}</li>)}
            </ul>
        </>
    );
}