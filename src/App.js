import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes";
import AuthContext from "./contexts/AuthContext";
import ItemsContext from "./contexts/ItemsContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <ItemsContext>
          <AppRoutes />
        </ItemsContext>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
