import React, { useState, useEffect } from "react";

export function Home() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/teams")
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setDataIsLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {!dataIsLoaded ? (
        <h1>Side svare ikke</h1>
      ) : (
        <ul>
          {items.map((team) => (
            <li key={team.id}>{team.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}