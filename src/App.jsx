import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DoctorListPage from "./pages/DoctorListingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
