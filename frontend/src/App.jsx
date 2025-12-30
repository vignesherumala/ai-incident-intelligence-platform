import { BrowserRouter, Routes, Route } from "react-router-dom";
import IncidentList from "./pages/IncidentList";
import IncidentDetail from "./pages/IncidentDetail";
import CreateIncident from "./pages/CreateIncident";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IncidentList />} />
        <Route path="/incident/:id" element={<IncidentDetail />} />
        <Route path="/create" element={<CreateIncident />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
