import AppRouter from "./app/routes.tsx";
import { SelectLocationProvicer } from "./context/SelectLocationProvider.tsx";

function App() {
  return (
    <SelectLocationProvicer>
      <AppRouter />
    </SelectLocationProvicer>
  );
}

export default App;
