import { BrowserRouter } from "react-router-dom";
import ComponentWithOutlet from "./ReactRouterV6/RoutesOutletFile/RoutesOutlet";
// import List from "./components/Testing/List";

// const listData = ["Anna", "32"];

function App() {
  return (
    <BrowserRouter>
      <ComponentWithOutlet />
    </BrowserRouter>

    // <List listData={listData} />
  );
}

export default App;
