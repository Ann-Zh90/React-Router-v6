import { Outlet, Link } from "react-router-dom";
import s from "./RoutesOutlet.module.css";

const MainContentOutletInside = () => {
  return (
    <>
      <header className={s.header}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
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
