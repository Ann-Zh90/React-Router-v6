import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
import MainContentOutletInside from "./MainContentOutletInside";

import s from "./RoutesOutlet.module.css";

const ComponentWithOutlet = () => {
  return (
    <div className={s.basicContainer}>
      <Routes>
        <Route path="/" element={<MainContentOutletInside />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ComponentWithOutlet;
