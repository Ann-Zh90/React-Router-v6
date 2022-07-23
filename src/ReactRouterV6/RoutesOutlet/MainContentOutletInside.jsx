import { Outlet, Link, NavLink } from "react-router-dom";
import s from "./RoutesOutlet.module.css";

const setActive = ({ isActive }) => (isActive ? `${s.activeLink}` : ""); // можно передать в className непосредственно функцию (blog), а можно константу с этой функцией (about)

const MainContentOutletInside = () => {
  return (
    <>
      <header className={s.header}>
        <Link to="/">Home</Link>
        <NavLink to="/about" className={setActive}>
          About
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
        >
          Blog
        </NavLink>
      </header>
      <main className={s.main}>
        <div className={s.mainContainer}>
          <Outlet />
        </div>
      </main>
      <footer className={s.footer}>All rights are reserved. 2022</footer>
    </>
  );
};

export default MainContentOutletInside;
