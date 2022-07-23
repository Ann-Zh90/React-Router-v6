import { BrowserRouter } from "react-router-dom";
import ComponentWithOutlet from "./ReactRouterV6/RoutesOutlet/RoutesOutlet";
function App() {
  return (
    <BrowserRouter>
      <ComponentWithOutlet />
    </BrowserRouter>
  );
}

export default App;
