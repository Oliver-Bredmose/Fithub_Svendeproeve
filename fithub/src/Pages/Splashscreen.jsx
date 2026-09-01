import style from "./Splash.module.scss";
import { useNavigate } from "react-router-dom";
import SplashUpper from "./../assets/SplashUpperimg.png";
import Splashlower from "./../assets/Splashlowerimg.png";

export function Splashscreen() {
  const navigate = useNavigate();

  return (
    <div className={style.splash}>
  <img className={style.upper} src={SplashUpper} alt="" />
  <img className={style.lower} src={Splashlower} alt="" />

  <div className={style.text}>
    <h1>Believe</h1>
    <h1>Yourself</h1>
    <p><span></span>Train like a pro</p>
  </div>

  <button onClick={() => navigate("/home")}>Start training</button>
</div>
  );
}