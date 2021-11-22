import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes";
import ItemsContext from "./contexts/ItemsContext";

function App() {
  return (
    <BrowserRouter>
      <ItemsContext>
        <AppRoutes />
      </ItemsContext>
    </BrowserRouter>
  );
}

export default App;
