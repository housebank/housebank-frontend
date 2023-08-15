import './App.css';
import { useRoutes } from "react-router-dom";
import routes from "./routes";


function App() {
    const content = useRoutes(routes);
  return (
    <div className="min-h-sreen">
        {content}
    </div>
  );
}

export default App;
