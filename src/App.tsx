import { Toaster } from "react-hot-toast";
import AppRouter from "./app/routes.tsx";
import { SelectLocationProvicer } from "./context/SelectLocationProvider.tsx";

function App() {
  return (
    <SelectLocationProvicer>
      <AppRouter />
      <Toaster reverseOrder={false} position="bottom-right" />
    </SelectLocationProvicer>
  );
}

export default App;
