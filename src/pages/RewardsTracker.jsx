import React, {useState, useEffect } from 'react';


function RewardsTracker() {
    const [wantedPeople, setWantedPeople] = useState([]);

    useEffect(() => {
        const fetchWantedPeople = async () => {
            const response = await fetch('https://api.fbi.gov/wanted/v1/list');
            const data = await response.json();
            setWantedPeople(data.items);
        };

        fetchWantedPeople();
    }, []);

    return (
        <div>
          <h1>FBI Most Wanted List</h1>
          <ul>
            {wantedPeople.map((person) => (
                <li key={person.vid}>{person.title}</li>
            ))}
          </ul>
        </div>
    )

}

