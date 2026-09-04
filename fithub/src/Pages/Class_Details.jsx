import { useState, useEffect } from "react";
import { useParams } from "react-router";
import style from "./../Pages/Calss_Details.module.scss"

export function ClassDetails() {
  const { id } = useParams();
  const API = "http://localhost:3000";
  const [team, setTeam] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const hentTeam = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${API}/api/teams/${id}`);
        if (!res.ok) throw new Error("Fejl " + res.status);
        setTeam(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    hentTeam();
  }, [id]);

  if (isLoading) return <p>Henter...</p>;
  if (error) return <p>{error}</p>;
  if (!team) return null;

  return (
  <article className={style.details}>
    <div className={style.hero}>
      {team.image?.url && (
        <img src={API + team.image.url} alt={team.name} />
      )}
      <h1>{team.name}</h1>
      <button>Sign up</button>
    </div>

    <h2>Schedule</h2>
    <div className={style.schedule}>
      <span>{team.day}</span>
      <span>{team.time}</span>
    </div>
    <p>{team.description}</p>

    <h2>Trainer</h2>
    <div className={style.trainer}>
      {team.user?.image?.url && (
        <img src={API + team.user.image.url} alt={team.user.name} />
      )}
      <div>
        <h3>{team.user?.name}</h3>
        <p>{team.user?.description}</p>
      </div>
    </div>
  </article>
);
}