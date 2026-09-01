import {React, useState, useEffect } from "react";
import style from "./../Pages/Home.module.scss"

const API = "http://localhost:3000";

export function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const hentTeams = async () => {
      try {
        const res = await fetch(API + "/api/teams");
        const json = await res.json();
        setItems(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    hentTeams();
  }, []);

  return (
    <div className={style.calsses}>
      {error && <p>Kunne ikke hente teams: {error}</p>}
      {items.length > 0 ? (
        <ul>
          {items.map((team) => (
            <li key={team.id}>
              <h2>{team.name}</h2>
              <p>{team.user?.description}</p>
              {team.image?.url && (
                <img src={API + team.image.url} alt={team.name} />
              )}
            </li>
          ))}
        </ul>
      ) : (
        !error && !isLoading && <p>Ingen teams fundet</p>
      )}
    </div>
  );
}