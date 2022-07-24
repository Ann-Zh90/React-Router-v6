import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
import Post from "./Post_useNavigate";
import MainContentOutletInside from "./MainContentOutletInside";
import EditPost from "./EditPost";

import s from "./RoutesOutlet.module.css";
import CreatePost from "./CreatePost";
import RequireAuth from "./hoc/RequireAuth";
import LoginPage from "./LoginPage";

const ComponentWithOutlet = () => {
  return (
    <div className={s.basicContainer}>
      <Routes>
        <Route path="/" element={<MainContentOutletInside />}>
          в outlet помещается содержимое между верхними (родительскими) Route
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-us" element={<Navigate to="/about" />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/blog/:id/edit" element={<EditPost />} />
          <Route
            path="/blog/new"
            element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ComponentWithOutlet;
