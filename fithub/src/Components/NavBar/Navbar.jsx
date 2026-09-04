import { useState } from "react"
import { NavLink } from "react-router-dom"
import style from "./../NavBar/Navbar.module.scss"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className={open ? style.open : ""}>
      <button className={style.burger} onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </button>

      <nav className={style.Navstyle}>
        <ul>
          <li><NavLink to={"/home"}>Home</NavLink></li>
          <li><NavLink to={"/search"}>Search</NavLink></li>
          <li><NavLink to={"/Login"}>Login</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}