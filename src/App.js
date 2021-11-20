import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes";
import ItemsContext from "./contexts/ItemsContext";

function App() {
  return (
    <ItemsContext>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ItemsContext>
  );
}

export default App;
