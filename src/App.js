import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes";
import CommentsContext from "./contexts/CommentsContext";
import ItemsContext from "./contexts/ItemsContext";

function App() {
  return (
    <BrowserRouter>
      <CommentsContext>
        <ItemsContext>
          <AppRoutes />
        </ItemsContext>
      </CommentsContext>
    </BrowserRouter>
  );
}

export default App;
