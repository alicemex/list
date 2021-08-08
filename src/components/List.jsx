import React, {useState, useEffect} from 'react';



const List = ()=>{
    
//variables

//useState
const [characters, setCharacters] = useState([]);

//useEffects aqui
useEffect(()=>{
fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => setCharacters(data.results));
}, []);

    return(
        <div className="List">{ <p> { characters.map((character) =>{
            return <p>{character.name} especie: { character.species} </p>
        } ) } </p> }
        </div>

    );
}
export default List;