import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./TypeScript/TodoList";
import { NavLink } from "react-router-dom";
import UseRefTypeization from "./TypeScript/UseRefTypeization";

import s from "./TypeScript/TodoList.module.css";
import UserList from "./TypeScript/UserList/UserList";
import UserInfo from "./TypeScript/UserList/UserInfo";
import DragNDrop from "./Drag'n'Drop-1st lesson/DragNDrop";
import Boards from "./Drag'n'Drop-2nd lesson/Boards";

// import { BrowserRouter } from "react-router-dom";
// import ComponentWithOutlet from "./ReactRouterV6/RoutesOutletFile/RoutesOutlet";

// import List from "./components/Testing/List";

// const listData = ["Anna", "32"];

function App() {
  return (
    <Boards /> /*2nd lesson*/

    // <DragNDrop /> {/*1st lesson*/ }

    // <BrowserRouter>  {/*TypeScript*/}
    //   <header className={s.header}>
    //     <NavLink to="/todo"> Todo List</NavLink>
    //     <NavLink to="/users"> User List</NavLink>
    //   </header>
    //   <UseRefTypeization />
    //   <Routes>
    //     <Route path="/todo" element={<TodoList />} />
    //     <Route path="/users" element={<UserList />} />
    //     <Route path="/users/:id" element={<UserInfo />} />
    //   </Routes>
    // </BrowserRouter>

    // <BrowserRouter>
    //   <ComponentWithOutlet /> {/* For react router v.6 */}
    // </BrowserRouter>

    // <List listData={listData} />
  );
}

export default App;
