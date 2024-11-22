import React, {useState, useEffect } from 'react';


function Fugititves() {
    const [wantedPeople, setWantedPeople] = useState([]);

    useEffect(() => {
        const fetchWantedPeople = async () => {
            const response = await fetch('https://api.fbi.gov/wanted/v1/list');
            const data = await response.json();
            setWantedPeople(data.items);
        };

        fetchWantedPeople();
    }, []);

    // console.log(wantedPeople.images[0].original)

    return (
        <div>
          <h1>Wanted List</h1>
          <ul>
            
            {wantedPeople
            .filter(person => person.images && person.images[0] && !person.images[0].original.includes("missing-persons"))
            .filter(person => person.reward_text && person.reward_text.trim() !== "")
            .map((person) => (
                <li key={person.uid}>
                <h2>{person.title}</h2>
                {person.reward_text && <p><strong>Reward: </strong>{person.reward_text}</p>}
                {person.images && person.images[0] && (
                <img src={person.images[0].original}
                alt={person.title}
                with="200"
                />
                )}
                </li>
            ))}
          </ul>
        </div>
    );
}

export default Fugititves

