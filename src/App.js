import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/home";
import DataDeletion from "./pages/DataDeletionPolicy/DataDeletion";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/terms" element={<TermsOfService></TermsOfService>} />
        <Route path="/privacy" element={<PrivacyPolicy></PrivacyPolicy>} />
        <Route path="/data-Policy" element={<DataDeletion></DataDeletion>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
